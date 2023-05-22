const CharacterListRepository = require('../repositories/CharacterListRepository');

class CharacterListController{
    static async getJSONCharacterList(req, res){
        let list;
        if(req.query.account_id) list = await CharacterListRepository.getCharacterListByAccountId(req.query.account_id);
        else if(req.query.account_name) list = await CharacterListRepository.getCharacterListByAccountName(req.query.account_name);
        else return res.status(400).json({
            code : 400,
            error: 'Requête invalide'
        });
        if(list === null){
            return res.status(404).json({
                code : 404,
                error: 'Le compte n\'existe pas ou n\'a pas de personnage'
            });
        }
        return res.status(200).json(list.toJSON())
    }
}

module.exports = CharacterListController;