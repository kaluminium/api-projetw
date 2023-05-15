const express = require('express');
const router = express.Router();

const characterRouter = require('./character');

router.get('/', (req, res) => {
    res.send('api');
});

router.use('/character', characterRouter);

module.exports = router;