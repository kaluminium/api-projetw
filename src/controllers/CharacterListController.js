const CharacterListRepository = require('../repositories/CharacterListRepository');

class CharacterListController{
    static async getJSONCharacterList(req, res){
        let list;
        if(req.query.account_id) list = await CharacterListRepository.getCharacterListByAccountId(req.query.account_id);
        else if(req.query.account_name) list = await CharacterListRepository.getCharacterListByAccountName(req.query.account_name);
        else if(req.query.order){
            const autorizedOrder = [
                'id',
                'name',
                'xp'
            ]
            const autorizedType = [
                'asc',
                'desc',
            ]
            let type = 'asc';
            if(req.query.type && autorizedType.includes(req.query.type)) type = req.query.type;
            if(autorizedOrder.includes(req.query.order)){
                list = await CharacterListRepository.getAllCharacterListWithOrder(req.query.order, type);
            }else{
                return res.status(400).json({
                    code : 400,
                    error: 'L\'ordre demandé n\'est pas autorisé'
                });
            }
        }
        else list = await CharacterListRepository.getAllCharacterList();
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