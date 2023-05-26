const express = require('express');
const router = express.Router();

const characterRouter = require('./character');
const accountRouter = require('./account');

router.get('/', (req, res) => {
    res.send('api');
});

router.use('/character', characterRouter);
router.use('/account', accountRouter);

module.exports = router;