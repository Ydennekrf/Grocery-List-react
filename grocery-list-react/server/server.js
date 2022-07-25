const path = require('path');
const express = require('express');
const session = require('express-session');
const sequelize = require('./config/connection');
const auth = require('./utils/auth')
const app = express();
const routes = require('./controllers/');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({  });
const PORT = process.env.PORT || 3001;

const SquelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'jestacorn',
    cookie: {
        //expires in 5 min of no activity
        expires: 300000
    },
    resave: false,
    // allows the session to reset its expiration time back to 5 min
    rolling: true,
    saveUntinitialized: true,
    store: new SquelizeStore({
        db: sequelize
    })
};

app.use(session(sess));


app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening at port ${PORT}`));
});