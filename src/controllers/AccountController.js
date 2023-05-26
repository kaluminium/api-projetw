const AccountRepository = require('../repositories/AccountRepository');

class AccountController{
    static async getJSONAccount(req, res){
        let account;
        if(req.query.id) account = await AccountRepository.getAccountById(req.query.id);
        else if(req.query.discord_id) account = await AccountRepository.getAccountByDiscordId(req.query.discord_id);
        else return res.status(400).json({error: 'Aucun paramètre de recherche n\'a été fourni'});
        if(!account) return res.status(404).json({error: 'Compte non trouvé'});
        return res.status(200).json(account);
    }
}

module.exports = AccountController;