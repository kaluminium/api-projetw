const express = require('express');
const router = express.Router();
const CharacterController = require('../../../controllers/CharacterController');
const CharacterListController = require('../../../controllers/CharacterListController');

router.get('/', async (req, res) => {
    res.status(400).json({code: 400, message: 'Bad Request'})
});

router.get('/get', async (req, res) => {
    await CharacterController.getJSONCharacter(req, res);
});

router.get('/get_all', async (req, res) => {
    await CharacterListController.getJSONCharacterList(req, res);
});

module.exports = router;