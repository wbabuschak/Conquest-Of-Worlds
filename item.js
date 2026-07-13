const COMMON = "rgb(71, 71, 71)";
const UNCOMMON = "#2b814fff";
const RARE = "#17467cff";
const EPIC = "#aa2a0aff";
const LEGENDARY = "#9a50c5ff";
const ACCESS_ITEM = "#316db3ff";

const CRAFTING_LESSER = "#694e1dff";
const CRAFTING_GREATER = "#53404fff";
const CRAFTING_LEGENDARY = "#723e67ff";

const DARK_RED = "#6e1b07ff";

const GOLD = "#a7901fff";

const LIGHT_PURPLE = "#c392dfff";
const LIGHT_YELLOW = "#e7c818ff";
const LIGHT_GREEN = "#4e9b36ff";
const HOT_PINK = "#c432bcff";



const orderedSlots = ["head","back","chest","hands","waist","feet","weapon","off-hand","amulet","finger","trinket","augment","enchantment"];



class Item{

    constructor(name, quantity, equippable, desc, color){
        this.name = name;
        this.quantity = quantity;
        this.equippable = equippable;
        this.desc = desc;
        this.color = color || "#000000";
    }

    toString(){
        return this.quantity + "x " + this.name;
    }

    serialize() {
        return {
            name: this.name,
            quantity: this.quantity,
            equippable: this.equippable,
            desc: this.desc,
            color: this.color
        };
    }

    static createItem(name, quantity = 1){
        if (!name || !quantity){
            return null;
        }
        let color = "#000000ff";
        // for (const recipe in recipes){
        //     if (Recipe.isMaterial(recipe, name)){
        //         color = CRAFTING_BROWN;
        //     }
        // }
        
        switch (name){
            case "Ramshackle Shank":
                return new Item(name,quantity,'weapon',"+2 physical dmg",COMMON);
            case "Ring of Slaying":
                return new Item(name,quantity,'finger',"+2% hit chance",COMMON);
            case "Filthy Boots":
                return new Item(name,quantity,'feet',"you should probably get these shined",COMMON);
            case "Dirty Dagger":
                return new Item(name,quantity,'weapon',"+2/1 physical/poison dmg",UNCOMMON);
            case "Walking Boots":
                return new Item(name,quantity,'feet',"these boots were made for walking",ACCESS_ITEM);
            case "Wading Boots":
                return new Item(name,quantity,'feet',"(mostly) waterproof",ACCESS_ITEM);
            case "Forest Leather Vest":
                return new Item(name,quantity,'chest',"6% dmg",UNCOMMON);
            case "Forest Leather Hood":
                return new Item(name,quantity,'head',"4% dmg",UNCOMMON);
            case "Forest Leather Boots":
                return new Item(name,quantity,'feet',"4% dmg",UNCOMMON);
            case "Forest Leather Gloves":
                return new Item(name,quantity,'hands',"3% dmg",UNCOMMON);
            case "Skinning Knife":
                return new Item(name,quantity,'weapon',"+3 physical dmg, 6% dmg",COMMON);
            case "Silken Hood":
                return new Item(name,quantity,'head',"+1 poison dmg",UNCOMMON);
            case "Spider Fang":
                return new Item(name,quantity,'off-hand',"1% dmg",COMMON);
            case "Pilfered Gold Ring":
                return new Item(name,quantity,'finger',"10% dmg, -1% hit chance",RARE);  
            case "Reinforced Leather Vest":
                return new Item(name,quantity,'chest',"8% dmg",UNCOMMON);
            case "Reinforced Leather Hood":
                return new Item(name,quantity,'head',"6% dmg",UNCOMMON);
            case "Reinforced Leather Boots":
                return new Item(name,quantity,'feet',"6% dmg",UNCOMMON);
            case "Reinforced Leather Gloves":
                return new Item(name,quantity,'hands',"5% dmg",UNCOMMON);
            case "Crossroads Ambush Knife":
                return new Item(name,quantity,'weapon',"+4 physical dmg, +5% hit chance",UNCOMMON);
            case "Tooth Necklace":
                return new Item(name,quantity,'amulet',"7% dmg",UNCOMMON);
            case "Gnoll Gang Belt Buckle":
                return new Item(name,quantity,'waist',"+1% hit chance",COMMON);
            case "Reaper Cloak":
                return new Item(name,quantity,'chest',"+1 shadow dmg",UNCOMMON);
            case "Lesser Wizard Wand":
                return new Item(name,quantity,'weapon',"+4 shadow dmg",COMMON);
            case "Greater Wizard Wand":
                return new Item(name,quantity,'weapon',"+5 shadow dmg",COMMON);
            case "Tri-element Spellbook":
                return new Item(name,quantity,'off-hand',"+1 fire, ice, or lightning dmg",RARE);
            case "Enchanted Reaper Cloak": 
                return new Item(name,quantity,'chest',"+1 shadow damage, access to Spirit Realm Threshold",ACCESS_ITEM);
            case "Shadow Signet": 
                return new Item(name,quantity,'finger',"Mountainland Kingdom is collaborating with the Shadow Army",ACCESS_ITEM);
            case "Farside Trophy": 
                return new Item(name,quantity,null,"Mountainland Kingdom is purging the Farside Visionaries",ACCESS_ITEM);
            case "Ghost Cape":
                return new Item(name,quantity,'back',"5% dmg",COMMON);
            case "Frozen Legion Banner":
                return new Item(name,quantity,'back',"+1 ice dmg",UNCOMMON);
            case "Yetimagician Skull":
                return new Item(name,quantity,'off-hand',"+3 ice dmg, -5% hit chance",UNCOMMON);
            case "Icemail Barbute":
                return new Item(name,quantity,'head',"+2 ice dmg, +2% hit chance",RARE);
            case "Frost-trap Victim Crusher":
                return new Item(name,quantity,'weapon',"+5/5 physical/ice dmg, -10% hit chance",RARE);
            case "Repaired Mail Gauntlets":
                return new Item(name,quantity,'hands',"+1 physical dmg, 6% dmg",COMMON);
            case "Repaired Mail Breastplate":
                return new Item(name,quantity,'chest',"12% dmg",COMMON);
            case "Echoing Villainous Greaves":
                return new Item(name,quantity,'feet',"0,10,20% dmg (in order)",RARE);
            case "Stolen Designer Gloves":
                return new Item(name,quantity,'hands',"fancy!",COMMON);
            case "Dirt Dwarves Medallion":
                return new Item(name,quantity,'amulet',"+2 dirt dmg (what is that?)",COMMON);
            case "Mussel Shell Helmet":
                return new Item(name,quantity,'head',"+2 physical dmg",COMMON);
            case "Mussel Shell Vest":
                return new Item(name,quantity,'chest',"+2 physical dmg",COMMON);
            case "Mussel Shell Gauntlets":
                return new Item(name,quantity,'hands',"+2 physical dmg",COMMON);
            case "Mussel Shell Treads":
                return new Item(name,quantity,'feet',"+2 physical dmg",COMMON);
            case "Flame Transfuser":
                return new Item(name,quantity,'trinket',"converts all ice/lightning dmg to fire",EPIC);
            case "Staff of Firebolt":
                return new Item(name,quantity,'weapon',"+7/3 fire/arcane dmg",UNCOMMON);
            case "Staff of Fireball":
                return new Item(name,quantity,'weapon',"+12 fire dmg",RARE);
            case "Fire Emblem":
                return new Item(name,quantity,'amulet',"+1 fire dmg, 8% dmg",UNCOMMON);
            case "Blazing Sigil":
                return new Item(name,quantity,'amulet',"+1 fire dmg, 8,16,24,30% dmg (in order)",RARE);
            case "Forgemaster's Vice":
                return new Item(name,quantity,'waist',"+2 fire dmg",UNCOMMON);
            case "Doom Hood":
                return new Item(name,quantity,'head',"+2 shadow dmg",UNCOMMON);
            case "Frost Cloak":
                return new Item(name,quantity,'chest',"+2 ice dmg",UNCOMMON);
            case "Shadowfrost Wand":
                return new Item(name,quantity,'weapon',"+5/5 shadow/ice dmg",UNCOMMON);
            case "Doomice Hood":
                return new Item(name,quantity,'head',"+2/1 shadow/ice dmg",RARE);
            case "Shadowfrost Cloak":
                return new Item(name,quantity,'chest',"+1/2 shadow/ice dmg",RARE);
            case "Doomfrost Wand":
                return new Item(name,quantity,'weapon',"+7/7 shadow/ice dmg",RARE);
            case "Doom Module":
                return new Item(name,quantity,'trinket',"converts all ice dmg to shadow",RARE);
            case "Fragment of Ra'oulgh":
                return new Item(name,quantity,'finger',"+1 fire dmg, +1% hit chance",COMMON);
            case "Glyph of Ra'oulgh":
                return new Item(name,quantity,'finger',"+2 fire dmg, +1% hit chance",UNCOMMON);
            case "Bolt of Ra'oulgh":
                return new Item(name,quantity,'finger',"+2 fire dmg, +2% hit chance",RARE);
            case "Node of Ra'oulgh":
                return new Item(name,quantity,'finger',"+2 fire dmg, +4% hit chance",EPIC);
            case "Icon of Ra'oulgh":
                return new Item(name,quantity,'finger',"+4 fire dmg, +4% hit chance",LEGENDARY);
            case "Lesser Yetimagic Enchantment":
                return new Item(name,quantity,'enchantment',"+1 ice dmg",CRAFTING_LESSER);
            case "Greater Yetimagic Enchantment":
                return new Item(name,quantity,'enchantment',"+2 ice dmg",CRAFTING_LESSER);
            case "Farside Viewing Lens":
                return new Item(name,quantity,'head',"+2 shadow dmg",UNCOMMON);
            case "Improved Farside Viewing Lens":
                return new Item(name,quantity,'head',"+3 shadow dmg, 3% dmg",RARE);
            case "Perfect Farside Viewer":
                return new Item(name,quantity,'head',"+4 shadow dmg, 4% dmg, +4% hit chance",EPIC);
            case "Carving Tool":
                return new Item(name,quantity,'weapon',"+10 physical dmg, +2% hit chance",UNCOMMON);
            case "Molding Hammer":
                return new Item(name,quantity,'weapon',"+14 physical dmg, -6% hit chance",RARE);
            case "Replica Mountain King Belt Buckle":
                return new Item(name,quantity,'waist',"15% dmg",RARE);
            case "Evil Spellbook":
                return new Item(name,quantity,'off-hand',"+1/1/1 shadow/plague/undeath",RARE);

            default: 
                return new Item(name,quantity,null,null,color);
        }
    }
}