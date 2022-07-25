const router = require('express').Router();
const { Users } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const userData = await Users.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
// used for sending text messege
router.get('/sendMsg',  async(req, res) => {
  try {
    const userNum = await Users.findByPk(req.session.user_id,{
    });
    const userData = userNum.get({ plain: true });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
})
// logs user in
router.post('/login', async (req, res) => {
  try {
    const userData = await Users.findOne({ where: { email: req.body.email } });
    
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.status(200).json('You are now logged in!');
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// logs user out
router.post('/logout', withAuth, (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).json('logged out');
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
