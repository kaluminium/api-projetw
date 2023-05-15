const Database = require('../models/database');
const Character = require('../entities/Character');

class CharacterController {
    static async getCharacterById(id){
        const db = await Database.getInstance();
        const character = await db.query(`SELECT * FROM personnage WHERE id = ${id}`);
        if(character.length === 0){
            return null;
        }
        return new Character(
            character[0].account_id,
            character[0].id,
            character[0].name,
            character[0].divinity,
            character[0].race,
            character[0].xp,
            character[0].sex)
    }

    static async getCharacterByName(name){
        const db = await Database.getInstance();
        const character = await db.query(`SELECT * FROM personnage WHERE lower(name) = '${name.toLowerCase()}'`);
        if(character.length === 0){
            return null;
        }
        return new Character(
            character[0].account_id,
            character[0].id,
            character[0].name,
            character[0].divinity,
            character[0].race,
            character[0].xp,
            character[0].sex);
    }
}

module.exports = CharacterController;