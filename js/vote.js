class Argument {
     #votes;
     #downVotes;
     #name;

    constructor(name) {
        this.#name = name;
        this.#votes = 0;
        this.#downVotes = 0;
    } 
    upVote() {
       ++this.#votes;
    }
    

    downVote(){
        --this.#downVotes;
    }

    getVotes() {
    return this.#votes;
}

getDownVotes() {
    return this.#downVotes;
}

getName() {
    return this.#name;
}

}