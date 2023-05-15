class Character {
    #accountId;
    #id;
    #name;
    #divinity;
    #race;
    #xp;
    #sex;

    constructor(accountId, id, name, divinity, race, xp, sex) {
        this.#id = id;
        this.#accountId = accountId;
        this.#name = name;
        this.#divinity = divinity;
        this.#race = race;
        this.#xp = xp;
        this.#sex = sex;
    }

    getId() {
        return this.#id;
    }

    getAccountId() {
        return this.#accountId;
    }

    getName() {
        return this.#name;
    }

    getDivinity() {
        return this.#divinity;
    }

    getRace() {
        return this.#race;
    }

    getXp() {
        return this.#xp;
    }

    getSex(){
        return this.#sex;
    }
}

module.exports = Character;