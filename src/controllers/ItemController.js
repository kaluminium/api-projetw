const ItemRepository = require('../repositories/ItemRepository');

class ItemController {
    static async getJSONItem(req, res) {
        let item;
        if(req.query.id) item = await ItemRepository.getItemById(req.query.id);
        if(item) res.status(200).json(item);
        else res.status(404).json({message: 'Item not found'});
    }
}

module.exports = ItemController;