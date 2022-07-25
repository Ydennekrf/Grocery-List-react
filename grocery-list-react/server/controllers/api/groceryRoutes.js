const router = require('express').Router();
require('dotenv').config();
const accountSid = process.env.T_SID;
const authToken = process.env.T_TOK;
const client = require('twilio')(accountSid, authToken);

// accepts the data from the grocery list and the user phone 
router.post('/send', async (req, res) => {
try {
    const numString = JSON.stringify(req.body.phone);
    const groceryList = JSON.stringify(req.body.list);
    // sends the sms message
        client.messages.create({
            body: `Here is your Grocery List for your selected meals: ${groceryList}`,
            to: numString,
            from: '+18305875494'
});
res.status(200).json(req.body);
} catch (err) {
    res.status(400).json(err);
}}
)

module.exports = router
