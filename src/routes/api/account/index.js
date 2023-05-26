const express = require('express');
const router = express.Router();
const AccountController = require('../../../controllers/AccountController');

router.get('/', async (req, res) => {
    res.status(400).json({code: 400, message: 'Bad Request'})
});

router.get('/get', async (req, res) => {
    await AccountController.getJSONAccount(req, res);
});

module.exports = router;