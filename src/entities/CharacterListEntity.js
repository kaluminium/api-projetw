class CharacterListEntity{
    #characterList;

    constructor(... characterList){
        this.#characterList = characterList;
    }

    getCharacterList(){
        return this.#characterList;
    }

    getSize(){
        return this.#characterList.length;
    }

    getCharacter(index){
        return this.#characterList[index];
    }

    addCharacter(character){
        this.#characterList.push(character);
    }

    toJSON(){
        let json = []
        for(let i = 0; i < this.getSize(); i++){
            let character = this.getCharacter(i);
            json.push(character.toJSON());
        }
        return json;
    }
}

module.exports = CharacterListEntity;