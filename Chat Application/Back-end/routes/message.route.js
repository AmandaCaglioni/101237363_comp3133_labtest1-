const express = require('express');
const router = express.Router();
const Message = require('../models/message.model');
const User = require('../models/user.model');

router.post('/', async function (req, res) {
    const { message, room } = req.body;
    console.log(req.body);
    try {
        const response = await Message.create({ message, room });
        console.log("Message", Message)
        res.status(201).json({ response });
    }
    catch (error) {
        res.status(500).json({ 'Error': error })
    }
});
router.get('/', async function (req, res) {
    try {
        const response = await Message.find();
        console.log(response)
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ 'Error': error })
    }
});


module.exports = router;