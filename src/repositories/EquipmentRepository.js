const EquipmentEntity = require('../entities/EquipmentEntity');
const Database = require('../models/Database');

class EquipmentRepository {
    static async getEquipmentByCharacterId(characterId) {
        const db = await Database.getInstance();
        const result = await db.query(`SELECT * FROM inventaire_equipe WHERE personnage_id = ?`, [characterId]);
        if(result.length === 0) return null;
        return new EquipmentEntity(
            result[0].personnage_id,
            result[0].weapon,
            result[0].shield,
            result[0].helmet,
        )
    }
}

module.exports = EquipmentRepository;