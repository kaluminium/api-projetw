const express = require('express');
const router = express.Router();

const characterRouter = require('./character');
const accountRouter = require('./account');
const itemRouter = require('./item');

router.get('/', (req, res) => {
    res.send('api');
});

router.use('/character', characterRouter);
router.use('/account', accountRouter);
router.use('/item', itemRouter);

module.exports = router;