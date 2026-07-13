class Reputation {
    constructor(name, difficulty = 1, rep = 0){
        this.name = name;
        this.difficulty = difficulty;
        this.rep = rep;
    }

    gainRep(mult = 1){
        if (this.level() > 5){
            return;
        }
        this.rep += (mult / this.difficulty);
    }

    loseRep(mult = 1){
        if (this.level() < -5){
            return;
        }
        this.rep -= mult;
    }

    level(){
        if (this.rep == 0){
            return 0;
        }
        return Math.sign(this.rep) * Math.floor(Math.log(Math.abs(this.rep) / 25 + 1));
    }
    //returns xp needed for next level
    nextLevel() {
        let level = this.level();
        if (this.level() + 1 == 0){
            return 0;
        }
        return Math.sign(this.level()+1) * Math.ceil(25 * (Math.exp(Math.abs(this.level()+1)) - 1));
    }

    serialize(){
        return {
            name: this.name,
            difficulty: this.difficulty,
            rep: this.rep
        };
    }

}

const reps = new Map([]);

function resetReps(){
    reps.set("Greater Rivertown", new Reputation("Greater Rivertown"));
    reps.set("The Longroad Authority", new Reputation("The Longroad Authority"));
    reps.set("Gnoll Gang", new Reputation("Gnoll Gang"));
    reps.set("Faraway Kingdom", new Reputation("Faraway Kingdom"));
    reps.set("Shadow Army", new Reputation("Shadow Army"));
    reps.set("Dark Brotherhood", new Reputation("Dark Brotherhood"));
    reps.set("Mountainland Kingdom", new Reputation("Mountainland Kingdom", difficulty = 2));
    reps.set("Dirt Dwarves", new Reputation("Dirt Dwarves"));
    reps.set("Fire Cult", new Reputation("Fire Cult"));
    reps.set("Doom Cult", new Reputation("Doom Cult"));
    reps.set("Farside Visionaries", new Reputation("Farside Visionaries"));
    reps.set("Yetimagic Putrefiers", new Reputation("Yetimagic Putrefiers"));
    reps.set("Frozen Legion", new Reputation("Frozen Legion"));
}
