class ItemEntity {
    #id;
    #characterId;
    #itemId;
    #pv;
    #attack;
    #intelligence;
    #agility;
    #strength;
    #armor;

    constructor(id, characterId, itemId, pv, attack, intelligence, agility, strength, armor){
        this.#id = id;
        this.#characterId = characterId;
        this.#itemId = itemId;
        this.#pv = pv;
        this.#attack = attack;
        this.#intelligence = intelligence;
        this.#agility = agility;
        this.#strength = strength;
        this.#armor = armor;
    }

    getId(){ return this.#id; }
    getCharacterId(){ return this.#characterId; }
    getItemId(){ return this.#itemId; }
    getPv(){ return this.#pv; }
    getAttack(){ return this.#attack; }
    getIntelligence(){ return this.#intelligence; }
    getAgility(){ return this.#agility; }
    getStrength(){ return this.#strength; }
    getArmor(){ return this.#armor; }

    toJSON(){
        return {
            id: this.#id,
            characterId: this.#characterId,
            itemId: this.#itemId,
            pv: this.#pv,
            attack: this.#attack,
            intelligence: this.#intelligence,
            agility: this.#agility,
            strength: this.#strength,
            armor: this.#armor
        }
    }
}

module.exports = ItemEntity;