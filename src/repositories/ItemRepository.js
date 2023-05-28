const Database = require('../models/Database');
const ItemEntity = require('../entities/ItemEntity');

class ItemRepository{
    static async getItemById(id){
        const db = await Database.getInstance();
        const query = `SELECT * FROM items WHERE id = ${id}`;
        const result = await db.query(query);
        if(result.length === 0) return null;
        return new ItemEntity(
            result[0].id,
            result[0].personnage_id,
            result[0].reference,
            result[0].pv,
            result[0].atk,
            result[0].intelligence,
            result[0].agility,
            result[0].strength,
            result[0].armor,
        );
    }
}

module.exports = ItemRepository;