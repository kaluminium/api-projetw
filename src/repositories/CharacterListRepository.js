const Database = require('../models/Database');
const CharacterListEntity = require('../entities/CharacterListEntity');
const CharacterEntity = require('../entities/CharacterEntity');

class CharacterListRepository {
    static async getCharacterListWithResponse(response){
        let newList = new CharacterListEntity();
        for(let i = 0; i < response.length; i++){
            newList.addCharacter(
                new CharacterEntity(
                    response[i].account_id,
                    response[i].id,
                    response[i].name,
                    response[i].divinity,
                    response[i].race,
                    response[i].xp,
                    response[i].sex
                )
            );
        }
        return newList;
    }

    static async getCharacterListByAccountId(accountId) {
        const db = await Database.getInstance();
        const characterList = await db.query(
            'SELECT * FROM personnage WHERE account_id = ?',
            [accountId]
        );
        return await this.getCharacterListWithResponse(characterList);
    }

    static async getCharacterListByAccountName(accountName){
        const db = await Database.getInstance();
        const characterList = await db.query(
            'SELECT * FROM personnage WHERE account_id = (select id from compte where account_name = ?)',
            [accountName]
        );
        return await this.getCharacterListWithResponse(characterList);
    }

    static async getAllCharacterList(){
        const db = await Database.getInstance();
        const characterList = await db.query(
            'SELECT * FROM personnage LIMIT 50'
        );
        return await this.getCharacterListWithResponse(characterList);
    }

    static async getAllCharacterListWithOrder(order, orderType){
        const db = await Database.getInstance();
        const characterList = await db.query(
            `SELECT * FROM personnage ORDER BY ${order} ${orderType} LIMIT 50`,
        );
        return await this.getCharacterListWithResponse(characterList);
    }
}

module.exports = CharacterListRepository;