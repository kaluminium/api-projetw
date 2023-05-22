const CharacterRepository = require('../repositories/CharacterRepository');

class CharacterController {
    static async getJSONCharacter(req, res){
        let character
        if(req.query.id) character = await CharacterRepository.getCharacterById(req.query.id);
        else if(req.query.name) character = await CharacterRepository.getCharacterByName(req.query.name);
        else return res.status(400).json({
            code : 400,
            error: 'Requête invalide'
        });
        if(character === null){
            return res.status(404).json({
                code : 404,
                error: 'Personnage introuvable'
            });
        }
        return res.status(200).json(character.toJSON())
    }
}

module.exports = CharacterController;