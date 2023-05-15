const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.json({code: 400, message: 'Bad Request'})
});

router.use('/get', require('./get'));
router.use('/get_all', require('./get_all'));

module.exports = router;