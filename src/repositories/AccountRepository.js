const Database = require('../models/Database');
const AccountEntity = require('../entities/AccountEntity');

class AccountRepository{
    static async getAccountWithResponse(response){
        if(response.length === 0){
            return null;
        }
        return new AccountEntity(
            response[0].id,
            response[0].discord_id,
            response[0].account_name,
            response[0].selected_character,
            response[0].hash,
            response[0].mail,
        );
    }

    static async getAccountById(id){
        const db = await Database.getInstance();
        const result = await db.query('SELECT * FROM compte WHERE id = ?', [id]);
        if(result.length === 0){
            return null;
        }
        return this.getAccountWithResponse(result);
    }

    static async getAccountByDiscordId(discordId){
        const db = await Database.getInstance();
        const result = await db.query('SELECT * FROM compte WHERE discord_id = ?', [discordId]);
        if(result.length === 0){
            return null;
        }
        return this.getAccountWithResponse(result);
    }
}

module.exports = AccountRepository;