class AccountEntity {
    #id;
    #discordId;
    #name;
    #selectedCharacterId;
    #passwordHash;
    #mail;

    constructor(id, discordId, name, selectedCharacterId, passwordHash, mail) {
        this.#id = id;
        this.#discordId = discordId;
        this.#name = name;
        this.#selectedCharacterId = selectedCharacterId;
        this.#passwordHash = passwordHash;
        this.#mail = mail;
    }

    get id() { return this.#id; }
    get discordId() { return this.#discordId; }
    get name() { return this.#name; }
    get selectedCharacterId() { return this.#selectedCharacterId; }
    get passwordHash() { return this.#passwordHash; }
    get mail() { return this.#mail; }

    toJSON(){
        return{
            id: this.#id,
            discordId: this.#discordId,
            name: this.#name,
            selectedCharacterId: this.#selectedCharacterId,
            passwordHash: this.#passwordHash,
            mail: this.#mail
        }
    }
}

module.exports = AccountEntity;