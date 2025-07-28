class LootTable{
    constructor(items,weights){
        this.items = items;
        this.weights = weights;
    }
    
    getDrop(no){
        let drops = [];
        for (let i = 0; i < no; i++){
            drops.push(this.getWeightedRandom());
        }
        return drops;
    }

    getWeightedRandom() {
        const totalWeight = this.weights.reduce((a, b) => a + b, 0);
        let r = Math.random() * totalWeight;
        for (let i = 0; i < this.items.length; i++) {
            r -= this.weights[i];
            if (r <= 0) return this.items[i];
        }
    }

}