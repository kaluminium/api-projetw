const express = require('express');
const router = express.Router();

const getCharacterById = require('./getCharacterById');
const getCharacterByName = require('./getCharacterByName');

router.get('/', async (req, res) => {
    if(req.query.name) res.json(await getCharacterByName(req.query.name))
    else if(req.query.id) res.json(await getCharacterById(req.query.id))
    else res.json({code: 400, message: 'Bad Request'})
});

module.exports = router;