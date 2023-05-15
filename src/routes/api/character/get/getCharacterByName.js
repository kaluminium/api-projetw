const CharacterController = require("../../../../controllers/CharacterController");

async function getCharacterByName(name){
    name = name.toLowerCase();
    let character = await CharacterController.getCharacterByName(name);
    if(character === null) return {code : 404, message : "Character not found"};
    return {
        code : 200,
        id : character.getId(),
        account_id : character.getAccountId(),
        name : character.getName(),
        xp : character.getXp(),
        divinity : character.getDivinity(),
        race : character.getRace(),
        sex : character.getSex()
    }
}

module.exports = getCharacterByName;