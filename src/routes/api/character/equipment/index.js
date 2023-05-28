const express = require('express');
const router = express.Router();

const EquipmentController = require('../../../../controllers/EquipmentController');

router.get('/', async (req, res) => {
    res.status(400).json({code: 400, message: 'Bad Request'})
});

router.get('/get', async (req, res) => {
    await EquipmentController.getJSONEquipment(req, res);
});

module.exports = router;