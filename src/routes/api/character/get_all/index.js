const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.json({code: 400, message: 'Bad Request'})
});

module.exports = router;