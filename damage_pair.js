class DamagePair {
    constructor(type,magnitude){
        this.type = type;
        this.magnitude = magnitude;
        // console.log("DamagePair constructed:",type,magnitude)
    }
    updateMagnitude(delta){
        this.magnitude += delta;
    }
    toString(){
        return this.magnitude + " " + this.type
    }

    static mergeDamage(list1,list2){
        const merged = new Map();

        for (let pair of [...list1, ...list2]){
            if (merged.has(pair.type)){
                merged.get(pair.type).updateMagnitude(pair.magnitude);
            } else {
                // console.log("list1 does not contain DamagePair of type",pair.type)
                merged.set(pair.type, new DamagePair(pair.type, pair.magnitude));
            }
        }

        return [...merged.values()];
    }

    static convertDamage(list, startType, endType){
        let delta = 0;
        for (let pair of list){
            if (pair.type == startType){
                delta = pair.magnitude;
            }
        }
        let subtractedList = DamagePair.mergeDamage(list, [new DamagePair(startType, 0 - delta)]);
        return DamagePair.mergeDamage(subtractedList, [new DamagePair(endType,delta)]);
    }
}