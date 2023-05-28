class EquipmentEntity{
    #characterId;
    #weaponId;
    #shieldId;
    #helmetId;

    constructor(characterId, weaponId, shieldId, helmetId){
        this.#characterId = characterId;
        this.#weaponId = weaponId;
        this.#shieldId = shieldId;
        this.#helmetId = helmetId;
    }

    getCharacterId(){ return this.#characterId; }
    getWeaponId(){ return this.#weaponId; }
    getShieldId(){ return this.#shieldId; }
    getHelmetId(){ return this.#helmetId; }

    toJSON(){
        return {
            characterId: this.#characterId,
            weaponId: this.#weaponId,
            shieldId: this.#shieldId,
            helmetId: this.#helmetId
        }
    }
}

module.exports = EquipmentEntity;