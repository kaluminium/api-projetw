const EquipmentRepository = require('../repositories/EquipmentRepository');
const ItemRepository = require('../repositories/ItemRepository');

class EquipmentController {
    static async getJSONEquipment(req, res){
        let equipment;
        if(req.query.id && !req.query.complete) equipment = await EquipmentRepository.getEquipmentByCharacterId(req.query.id)
        if(req.query.id && req.query.complete) equipment = await this.getCompleteEquipment(req.query.id)
        if(!equipment) res.status(404).send({message: 'Equipment not found'});
        else res.status(200).json(equipment);
    }

    static async getCompleteEquipment(id) {
        let equipment = await EquipmentRepository.getEquipmentByCharacterId(id);
        if (!equipment) return null;
        const jsonEquipment = {}
        jsonEquipment.characterId = equipment.getCharacterId();
        jsonEquipment.weapon = await ItemRepository.getItemById(equipment.getWeaponId());
        jsonEquipment.shield = await ItemRepository.getItemById(equipment.getShieldId());
        jsonEquipment.helmet = await ItemRepository.getItemById(equipment.getHelmetId());

        return jsonEquipment;
    }
}

module.exports = EquipmentController;