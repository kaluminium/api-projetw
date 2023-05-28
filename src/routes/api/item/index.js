const express = require('express');
const router = express.Router();
const ItemController = require('../../../controllers/ItemController');

router.get('/', async (req, res) => {
    res.status(400).json({code: 400, message: 'Bad Request'})
});

router.get('/get', async (req, res) => {
    await ItemController.getJSONItem(req, res);
});

module.exports = router;