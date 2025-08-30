class Entity{
    constructor(name, mobLevel, lootTable, armorClass = 0){
        this.name = name;
        this.mobLevel = mobLevel;
        this.maxHealth = this.randomizeMaxHealth(mobLevel);
        this.HP = this.maxHealth;
        this.destroyed = false;
        this.lootTable = lootTable;
        this.armor = Math.floor((mobLevel * (2 * mobLevel + 9)) * armorClass);
        this.loot = null;
        this.xp = this.calculateXP(mobLevel);
    }

    damage(damage){
        if (this.HP > 0) this.HP-= Math.max(0,damage - this.armor);
        //console.log(this.HP + " - " + Math.max(0,damage - this.armor))
         if (this.HP <= 0 && !this.destroyed) {
            this.destroyed = true;
            this.name += " (destroyed)";
         }
    }

    randomizeMaxHealth(mobLevel){
        return Math.floor((mobLevel * (2 * mobLevel + 9)) * (0.9 + Math.random() * .2));
    }

    calculateXP(mobLevel){
        return Math.floor(mobLevel * mobLevel + 5);
    }

    getLoot(drops) {
       if (this.destroyed){
            if (this.lootTable != null) {
                return this.lootTable.getDrop(drops);
            } else {
                console.log(this.name + " drops nothing (null loot table)");
                return [];
            }
        }
        // loot not dropped (entity still alive)
        return null;
    }
}