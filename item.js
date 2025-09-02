const GREEN = "#2b814fff";
const RED = "#aa2a0aff";
const DARK_RED = "#6e1b07ff";
const GRAY = "#686868ff";
const GOLD = "#a7901fff";
const LIGHT_BLUE = "#316db3ff";
const DARK_BLUE = "#17467cff";
const PURPLE = "#9a50c5ff";
const LIGHT_PURPLE = "#c392dfff";
const LIGHT_YELLOW = "#e7c818ff";
const LIGHT_GREEN = "#4e9b36ff";
const HOT_PINK = "#c432bcff";
const CRAFTING_BROWN = "#694e1dff";

const orderedSlots = ["head","back","chest","hands","waist","feet","weapon","off-hand","amulet","finger","trinket","augment"];

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
        switch (name){
            // 0.1.0 "The Big Update" crafting materials
            case "Spectral Essence":
                return new Item(name,quantity,null,null,CRAFTING_BROWN);
            case "Greater Spectral Essence":
                return new Item(name,quantity,null,null,CRAFTING_BROWN);
            case "Cracked Gemstone Amulet":
                return new Item(name,quantity,null,null,CRAFTING_BROWN);
            case "Zealot Essence":
                return new Item(name,quantity,null,null,CRAFTING_BROWN);
            case "Magical Essence":
                return new Item(name,quantity,null,null,CRAFTING_BROWN);
            case "Dragon Scale":
                return new Item(name,quantity,null,null,CRAFTING_BROWN);
            case "Frozen Essence":
                return new Item(name,quantity,null,null,CRAFTING_BROWN);
            case "Volcano Planet Essence":
                return new Item(name,quantity,null,null,CRAFTING_BROWN);
            case "Pleasure Essence":
                return new Item(name,quantity,null,null,CRAFTING_BROWN);
            case "A.M. Essence":
                return new Item(name,quantity,null,null,CRAFTING_BROWN);
            case "Stellar Remnant Essence":
                return new Item(name,quantity,null,null,CRAFTING_BROWN);
            case "Solar Debris":
                return new Item(name,quantity,null,null,CRAFTING_BROWN);
            case "Titan Essence":
                return new Item(name,quantity,null,null,CRAFTING_BROWN);
            case "Cloth Scrap":
                return new Item(name,quantity,null,null,CRAFTING_BROWN);
            case "Bone Chip":
                return new Item(name,quantity,null,null,CRAFTING_BROWN);
            // 0.1.0 "The Big Update" crafted items
            case "Gilded Dagger":
                return new Item(name,quantity,"weapon","+6 dmg",DARK_BLUE);
            case "Spectral Cowl":
                return new Item(name,quantity,"head","access to spirit world",PURPLE);
            case "Skullstompers":
                return new Item(name,quantity,"feet","+2 dmg, access to spirit world",PURPLE);
            case "Activated Gemstone Amulet":
                return new Item(name,quantity,"amulet","+10 dmg, access to spirit world",PURPLE);
            case "Havoc Blade":
                return new Item(name,quantity,"weapon","+13 dmg, 30% dmg",DARK_BLUE);
            case "Nature's Fury":
                return new Item(name,quantity,"weapon","+19 dmg, 11% dmg, +9% chance to hit", RED);
            case "Green Dragonscale Cape":
                return new Item(name,quantity,"back","10% dmg",RED);
            case "Black Dragonscale Cape":
                return new Item(name,quantity,"back","1.1x dmg, +7% chance to hit",RED);
            case "Blue Dragonscale Cape":
                return new Item(name,quantity,"back","+7 dmg",RED);
            case "Red Dragonscale Cape":
                return new Item(name,quantity,"back","100% dmg every 7 attacks",RED);
            case "Degenerate Star Tome":
                return new Item(name,quantity,"weapon","+25 dmg for each degenerate star item, deal 2.00x dmg on the first of every 5 attacks",RED);
            case "Degenerate Star Boots":
                return new Item(name,quantity,"feet","+25 dmg for each degenerate star item, deal 2.00x dmg on the second of every 5 attacks",RED);
            case "Degenerate Star Belt":
                return new Item(name,quantity,"waist","+25 dmg for each degenerate star item, deal 2.00x dmg on the third of every 5 attacks",RED);
            case "Degenerate Star Hood":
                return new Item(name,quantity,"head","+25 dmg for each degenerate star item, deal 2.00x dmg on the fourth of every 5 attacks", RED);
            case "Degenerate Star Coat":
                return new Item(name,quantity,"chest","+25 dmg for each degenerate star item, deal 2.00x dmg on the fifth of every 5 attacks",RED);
            case "Symbol of the Desert":
                return new Item(name,quantity,null,null,LIGHT_BLUE);
            case "Shined Shoes":
                return new Item(name,quantity,"feet","+1 style",GRAY);
            // 0.1.0 "The Big Update" new and updated drops
            case "Gravegrips":
                return new Item(name,quantity,"hands","4% dmg",GREEN);
            case "Killer Gloves":
                return new Item(name,quantity,"hands","+2 dmg",GREEN);
            case "Broken Havoc Blade":
                return new Item(name,quantity,"weapon","+10 dmg",GREEN);
            case "Shattered Havoc Hilt":
                return new Item(name,quantity,"weapon","+3 dmg, 30% dmg",GREEN);
            case "Nature's Wrath":
                return new Item(name,quantity,"weapon","+18 dmg, +8% chance to hit", DARK_BLUE);
            case "Drained Spirit":
                return new Item(name,quantity,null,null,LIGHT_BLUE);
            case "Green Cape":
                return new Item(name,quantity,"back","7% dmg",DARK_BLUE);
            case "Black Cape":
                return new Item(name,quantity,"back","7% chance to hit",DARK_BLUE);
            case "Blue Cape":
                return new Item(name,quantity,"back","+7 dmg, 7% chance to miss",DARK_BLUE);
            case "Red Cape":
                return new Item(name,quantity,"back","70% dmg every 10 attacks",DARK_BLUE);
            case "Arcane Helmet":
                return new Item(name,quantity,"head","+7 dmg, 3% dmg",DARK_BLUE);
            case "Arcane Vest":
                return new Item(name,quantity,"chest","+7 dmg, 3% dmg",DARK_BLUE);
            case "Arcane Gauntlets":
                return new Item(name,quantity,"hands","+7 dmg, 3% dmg",DARK_BLUE);
            case "Arcane Treads":
                return new Item(name,quantity,"feet","+7 dmg, 3% dmg",DARK_BLUE);
            case "Arcane Staff":
                return new Item(name,quantity,"weapon","+7 dmg, 3% dmg",DARK_BLUE);
            case "Essence-Starved Tome":
                return new Item(name,quantity,"weapon","deal 2.00x dmg on the first of every 5 attacks",RED);
            case "Essence-Starved Boots":
                return new Item(name,quantity,"feet","deal 2.00x dmg on the second of every 5 attacks",RED);
            case "Essence-Starved Belt":
                return new Item(name,quantity,"waist","deal 2.00x dmg on the third of every 5 attacks",RED);
            case "Essence-Starved Hood":
                return new Item(name,quantity,"head","deal 2.00x dmg on the fourth of every 5 attacks", RED);
            case "Essence-Starved Coat":
                return new Item(name,quantity,"chest","deal 2.00x dmg on the fifth of every 5 attacks",RED);
            case "Flesh Den Entry Token":
                return new Item(name,quantity,"trinket","+16 dmg, +9% chance to hit",DARK_BLUE);
            case "Titanic Bulwark":
                return new Item(name,quantity,"off-hand","+200 armor break",DARK_BLUE);
            case "Titanic Smasher":
                return new Item(name,quantity,"weapon","400% dmg",RED);
            // alpha items 
            case "Gold Coin":
                return new Item(name,quantity,null,null,GOLD);
            case "Platinum Coin":
                return new Item(name,quantity,null,null,GRAY);
            case "Universal Credit":
                return new Item(name,quantity,null,null,GRAY);
            case "Greater Myth Essence":
                return new Item(name,quantity,null,null,LIGHT_GREEN);
            case "Token of Faith":
                return new Item(name,quantity,null,null,LIGHT_BLUE);
            case "Water Jar":
                return new Item(name,quantity,null,null,LIGHT_BLUE);
            case "Venomous Gland":
                return new Item(name,quantity,null,null,LIGHT_BLUE);
            case "Ring of Slaying":
                return new Item(name,quantity,"finger","+1 dmg",GREEN);
            case "Epic Sword":
                return new Item(name,quantity,"weapon","+7 dmg",RED);
            case "Common Dagger":
                return new Item(name,quantity,"weapon","+3 dmg",GREEN);
            case "Dirty Shoes":
                return new Item(name,quantity,"feet","does nothing",GRAY);
            case "Mummy Wraps":
                return new Item(name,quantity,"chest","10% dmg",GREEN);
            case "Haunting Guise":
                return new Item(name,quantity,"head","50% dmg if no weapon",DARK_BLUE);
            case "Ring of Venom":
                return new Item(name,quantity,"finger","10% dmg",RED);
            case "Gauntlets of Sheer Force":
                return new Item(name,quantity,"hands","base damage is always 10",DARK_BLUE);
            case "Tooth Necklace":
                return new Item(name,quantity,"amulet","+6 dmg",DARK_BLUE);
            case "Fossil Blade":
                return new Item(name,quantity,"weapon","+20 dmg",RED);
            case "Treads of Crushing Depths":
                return new Item(name,quantity,"feet","9% dmg",RED);
            case "Emesis Amulet":
                return new Item(name,quantity,"amulet","+9 dmg, 9% dmg, 9% chance to miss",RED);
            case "Crown of the Corpseeater":
                return new Item(name,quantity,"head","11% dmg",DARK_BLUE);
            case "Promise Ring":
                return new Item(name,quantity,"finger","does nothing (what a tease...)",GRAY);
            case "Wraps of Temptation":
                return new Item(name,quantity,"chest","23% dmg, 10% chance to miss",DARK_BLUE);
            case "Blade of One Thousand Hooks":
                return new Item(name,quantity,"weapon","66% dmg",RED);
            case "Stone of James":
                return new Item(name,quantity,"finger","1.1x dmg",RED);
            case "Memento of the Vulture":
                return new Item(name,quantity,null,null,DARK_RED);
            case "Memento of the Dino":
                return new Item(name,quantity,null,null,DARK_RED);
            case "Memento of the Fangtooth":
                return new Item(name,quantity,null,null,DARK_RED);
            case "Memento of the Succubus":
                return new Item(name,quantity,null,null,DARK_RED);
            case "Memento of the Insect":
                return new Item(name,quantity,null,null,DARK_RED);
            case "Memento of the Bovine":  
                return new Item(name,quantity,null,null,DARK_RED);
            case "Ice Bear Fur Shawl":
                return new Item(name,quantity,"chest","+10 dmg",GREEN);
            case "Terror Mask":
                return new Item(name,quantity,"head","+20% chance to hit",RED);
            case "Dread Loop":
                return new Item(name,quantity,"finger","base damage is always 16, 16% chance to miss",RED);
            case "Mote of Arcane Power":
                return new Item(name,quantity,"finger","+40% chance to hit, -20% dmg",RED);
            case "Ice Bear Paw Mitts":
                return new Item(name,quantity,"hands","+5 dmg",GREEN);
            case "Baby Dragon Fang":
                return new Item(name,quantity,"amulet","13% dmg",GREEN);
            case "Juvenile Dragon Talon":
                return new Item(name,quantity,"weapon","+33 dmg",GREEN);
            case "Dragon Mucus Tincture":
                return new Item(name,quantity,"off-hand","10% dmg every 7 attacks",GREEN);
            case "Dragonheart Piercer":
                return new Item(name,quantity,"weapon","+26 dmg, 7% dmg",RED);
            case "Devastating Crossbow":
                return new Item(name,quantity,"weapon","+21 dmg, your attacks can't miss",RED);
            case "Snake-eye Chain":
                return new Item(name,quantity,"off-hand","+2 dmg",GREEN);
            case "Headcracker Mitts":
                return new Item(name,quantity,"hands","+1-12 dmg",RED);
            case "Ring of Greed":
                return new Item(name,quantity,"finger","40% dmg, miss every 4 attacks",GREEN);
            case "Goblin Ledger":
                return new Item(name,quantity,"off-hand","1% damage every attack, resets on 12",RED);
            case "Ratkickers":
                return new Item(name,quantity,"feet","6% dmg",GREEN);
            case "Greedy Goldgrubber Grips":
                return new Item(name,quantity,"hands","spawns treasure goblins",GRAY);
            case "Gold Cloak":
                return new Item(name,quantity,"back","+1 dmg, 1% dmg, 1.01x dmg, +1% chance to hit",DARK_BLUE);
            case "First Seal":
                return new Item(name,quantity,null,null,LIGHT_PURPLE);
            case "Second Seal":
                return new Item(name,quantity,null,null,LIGHT_PURPLE);
            case "Third Seal":
                return new Item(name,quantity,null,null,LIGHT_PURPLE);
            case "Fourth Seal":
                return new Item(name,quantity,null,null,LIGHT_PURPLE);
            case "Fifth Seal":
                return new Item(name,quantity,null,null,LIGHT_PURPLE);
            case "Sixth Seal":
                return new Item(name,quantity,null,null,LIGHT_PURPLE);
            case "Seventh Seal":
                return new Item(name,quantity,null,null,LIGHT_PURPLE);
            case "Helmet of Arcane Protection":
                return new Item(name,quantity,"head","+7 dmg, 3% dmg per arcane equip",DARK_BLUE);
            case "Vest of Arcane Devotion":
                return new Item(name,quantity,"chest","+7 dmg, 3% dmg per arcane equip",DARK_BLUE);
            case "Gauntlets of Arcane Postmultiplication":
                return new Item(name,quantity,"hands","+7 dmg, 3% dmg per arcane equip",DARK_BLUE);
            case "Treads of Arcane Stabilization":
                return new Item(name,quantity,"feet","+7 dmg, 3% dmg per arcane equip",DARK_BLUE);
            case "Staff of Arcane Domination":
                return new Item(name,quantity,"weapon","+7 dmg, 3% dmg per arcane equip",DARK_BLUE);
            case "Arcane Star Jar":
                return new Item(name,quantity,null,null,LIGHT_YELLOW);
            case "Arcane Focusing Gem":
                return new Item(name,quantity,"finger","1.13x dmg",RED);
            case "Arcane Circuitboard":
                return new Item(name,quantity,"trinket","8% dmg every 3 attacks",RED);
            case "Arcane Iris":
                return new Item(name,quantity,"amulet","+5% dmg, your attacks that would miss deal 40% dmg",RED);
            case "Arcane Shield":
                return new Item(name,quantity,"off-hand","5% dmg, +10% chance to hit",RED);
            case "Arcane Phylactery":
                return new Item(name,quantity,"trinket","18% dmg, 10% chance to miss",RED);
            case "Astral Hammer":
                return new Item(name,quantity,"weapon","+100 dmg, 50% chance to miss",RED);
            case "Moon Blasting Super Smashers":
                return new Item(name,quantity,"hands","base damage is always 40",RED);
            case "Laser Gigawatt Charger":
                return new Item(name,quantity,"off-hand","40% dmg with laser weapons",GREEN);
            case "Laser-powered Goblin Smasher":
                return new Item(name,quantity,"weapon","+22 dmg, 2.00x damage every 3 attacks",RED);
            case "Green Laser Blaster":
                return new Item(name,quantity,"weapon","+55 dmg",GREEN);
            case "Grey Laser Blaster":
                return new Item(name,quantity,"weapon","+50 dmg, 10% dmg",GREEN);
            case "Nebula Gemstone":
                return new Item(name,quantity,"amulet","50% dmg every 2 attacks",GREEN);
            // volcano planet world items
            case "Volcano Badge":
                return new Item(name,quantity,"trinket","10% dmg, +10% chance to hit",GREEN);
            case "Kor'As, Obliteration Blade":
                return new Item(name,quantity,"weapon","+113 dmg, 48% dmg",RED);
            case "Heart of Molten Giant":
                return new Item(name,quantity,"amulet","48% dmg, 11% chance to miss",DARK_BLUE);
            case "Eye of Molten Giant":
                return new Item(name,quantity,"finger","24% dmg, 7% chance to miss",GREEN);
            case "Destroyer Greaves":
                return new Item(name,quantity,"feet","1.2x dmg",RED);
            case "Signet of Trembling":
                return new Item(name,quantity,"finger","18% dmg, +18% chance to hit",DARK_BLUE);
            case "Deep Black Mask":
                return new Item(name,quantity,"head","60% dmg if wearing The Obsidian Band",RED);
            case "The Obsidian Band":
                return new Item(name,quantity,"finger","does nothing",DARK_BLUE);
            case "Sulfur Respirator":
                return new Item(name,quantity,"head","+10 dmg, 6% damage every attack, resets on 6",RED);
            case "Horn of Doom":
                return new Item(name,quantity,"off-hand","1.06x dmg",DARK_BLUE);
            case "Lava Scorpion Exoskeleton":
                return new Item(name,quantity,"chest","100% dmg if no head, hands, or feet item equipped",RED);
            case "Amulet of Vitriolic Withering":
                return new Item(name,quantity,"amulet","+10% chance to hit every attack, resets on 10",DARK_BLUE);
            case "Steps of Worldshaking":
                return new Item(name,quantity,"feet","+20 dmg",DARK_BLUE);
            // pleasure world items
            case "Mysterious Pleasure Juice":
                return new Item(name,quantity,"trinket","0-30% dmg",GREEN);
            case "Ak'Olp, Incineration Wand":
                return new Item(name,quantity,"weapon","+20 dmg & 20% dmg every attack, resets on 10",RED);
            case "Chaos Vambrace":
                return new Item(name,quantity,"hands","+0-30 dmg",DARK_BLUE);
            case "Chaos Blade":
                return new Item(name,quantity,"weapon","+90 dmg, 90% dmg",GREEN);
            case "Cape of Cunning":
                return new Item(name,quantity,"back","1.2x dmg on first attack",DARK_BLUE);
            case "Overtuned Grippers":
                return new Item(name,quantity,"hands","60% dmg, -10% every attack, resets on 6",RED);
            case "Dual-purpose Cane":
                return new Item(name,quantity,"off-hand","+10 dmg, +10% chance to hit",RED);
            case "Off-world Beast Fur Shawl":
                return new Item(name,quantity,"chest","+40 dmg",DARK_BLUE);
            case "Hyper Cutter":
                return new Item(name,quantity,"off-hand","+21 dmg, 10% chance to miss", RED);
            case "Ambush Sensor":
                return new Item(name,quantity,"off-hand","1.1x dmg, your first attack can't miss",DARK_BLUE);
            case "Badass Cloak":
                return new Item(name,quantity,"back","30% dmg",RED);
            case "Reworked Goblin Tech":
                return new Item(name,quantity,"head","+0-50 dmg on first attack",RED);
            // A.M. world items
            case "Electric Eye":
                return new Item(name,quantity,"trinket","+1 dmg every attack, resets on 33",GREEN);
            case "Gar'Ahan, Fleshstripper":
                return new Item(name,quantity,"weapon","+300 dmg, 150% chance to miss",RED);
            case "Tabis of Inexorable Torment":
                return new Item(name,quantity,"feet","+18 dmg, +18% chance to hit",DARK_BLUE);
            case "Cage of Inexorable Torment":
                return new Item(name,quantity,"head","40% dmg, your first attack always misses",GREEN);
            case "Perfect Diamond Amulet":
                return new Item(name,quantity,"amulet","+30% chance to hit",DARK_BLUE);
            case "Ring of the Unbroken Stare":
                return new Item(name,quantity,"finger","40% dmg after 8 attacks",RED);
            case "Symbol of Everlasting Humanity":
                return new Item(name,quantity,"trinket","1.1x dmg after 10 attacks, 1.2x dmg after 20 attacks",DARK_BLUE);
            case "Butcher's Apron":
                return new Item(name,quantity,"chest","40% dmg every 2 attacks, +10 dmg every 4 attacks",RED);
            case "Inexplicable Ribs":
                return new Item(name,quantity,"chest","60% dmg, 16% chance to miss",DARK_BLUE);
            case "Damaged Exosuit":
                return new Item(name,quantity,"chest","+50% chance to hit after 10 attacks, +100% chance to hit after 20 attacks", RED);
            case "Slicing Gloves":
                return new Item(name,quantity,"hands","base damage is always 100",DARK_BLUE);
            case "Repurposed Digital Gauge":
                return new Item(name,quantity,"finger","0.1% dmg for each Dreadbeast Trophy, up to 40%",RED);
            case "Strangler Mitts":
                return new Item(name,quantity,"hands","attacks without a weapon can't miss",RED);
            // stellar remnant world items
            case "Collapse Clasp":
                return new Item(name,quantity,"waist","30% dmg",GREEN);
            
            case "Cape of the Neutron Star":
                return new Item(name,quantity,"back","1600% dmg every 45 attacks",DARK_BLUE);
            case "Cape of the White Dwarf":
                return new Item(name,quantity,"back","300% dmg every 9 attacks",GREEN);
            case "Magnetar Pendant":
                return new Item(name,quantity,"amulet","+23 dmg",DARK_BLUE);
            case "Impossibly Dense Chain":
                return new Item(name,quantity,"amulet","56% dmg, 14% chance to miss",DARK_BLUE);
            case "Anti-matter Aegis":
                return new Item(name,quantity,"off-hand","+10 dmg every attack, resets on 4",DARK_BLUE);
            case "Ion Chimes":
                return new Item(name,quantity,"off-hand","+50% chance to hit every 2 attacks, 50% dmg every 4 attacks",DARK_BLUE);
            case "Stolen Hope":
                return new Item(name,quantity,"trinket","1% dmg every attack, resets on 50 attacks",RED);
            // myth world items
            case "Aura Scanner":
                return new Item(name,quantity,"off-hand","+20 armor break",GREEN);
            case "Gauntlets of Transcendent Faith":
                return new Item(name,quantity,"hands","25% chance for +100 armor break",DARK_BLUE);
            case "Shard of Light":
                return new Item(name,quantity,"finger","+50 dmg, doubles effect of Shard of Darkness",DARK_BLUE);
            case "Shard of Darkness":
                return new Item(name,quantity,"amulet","30% dmg, +18% chance to hit",RED);
            // case corretion for bugged item
            case "Symbol of the Trinity":
                return new Item("Symbol of Trinity",quantity,"trinket","33% dmg every attack, resets on 3 attacks",RED);
            case "Symbol of Trinity":
                return new Item(name,quantity,"trinket","33% dmg every attack, resets on 3 attacks",RED);
            case "Singularity of Purpose":
                return new Item(name,quantity,"weapon","+1000 dmg, -100 dmg for each item equipped",RED);
            case "Blazer of the Screaming Eagle":
                return new Item(name,quantity,"chest","+20 armor break, 2.00x armor break",RED);
            // default world part 3, part 4 + desert world part 2 items
            case "God Cinch":
                return new Item(name,quantity,"waist","200% dmg, 50% chance to miss, 18% dmg + 10% chance to hit per God item",HOT_PINK);
            case "God Bulwark":
                return new Item(name,quantity,"off-hand","200% dmg, 50% chance to miss, 18% dmg + 10% chance to hit per God item",HOT_PINK);
            case "God Helm":
                return new Item(name,quantity,"head","200% dmg, 50% chance to miss, 18% dmg + 10% chance to hit per God item",HOT_PINK);
            case "God Cape":
                return new Item(name,quantity,"back","200% dmg, 50% chance to miss, 18% dmg + 10% chance to hit per God item",HOT_PINK);
            case "God Plate":
                return new Item(name,quantity,"chest","200% dmg, 50% chance to miss, 18% dmg + 10% chance to hit per God item",HOT_PINK);
            case "God Gloves":
                return new Item(name,quantity,"hands","200% dmg, 50% chance to miss, 18% dmg + 10% chance to hit per God item",HOT_PINK);
            case "Spiral Augment":
                return new Item(name,quantity,"augment","-20 dmg, +20 armor break",DARK_BLUE);
            case "Critical Augment":
                return new Item(name,quantity,"augment","% dmg equal to your miss chance",DARK_BLUE);
            case "Charging Augment":
                return new Item(name,quantity,"augment","20% chance to miss, your attacks that would miss deal 50% dmg",DARK_BLUE);
            case "Flaring Augment":
                return new Item(name,quantity,"augment","-400% dmg, 2500% dmg every 5 attacks",DARK_BLUE);
            case "Chaos Emerald":
                return new Item(name,quantity,"finger","100% dmg if wearing the Order Sapphire",RED);
            case "Balance Ruby":
                return new Item(name,quantity,"amulet","100% dmg if wearing the Chaos Emerald",RED);
            case "Order Sapphire":
                return new Item(name,quantity,"trinket","100% dmg if wearing the Balance Ruby",RED);
            case "Truesilver Greathammer":
                return new Item(name,quantity,"weapon","+800 dmg, 400% dmg, 200 armor break, 2.00x armor break",RED);
            case "Truesilver Greataxe":
                return new Item(name,quantity,"weapon","+700 dmg, 350% dmg, 300 armor break, 2.50x armor break",RED);
            case "Truesilver Greatsword":
                return new Item(name,quantity,"weapon","+600 dmg, 300% dmg, 400 armor break, 3.00x armor break",RED);
            case "Vestaments of the Great Deceiver":
                return new Item(name,quantity,"chest","+69 dmg, 169% dmg, 60% chance to miss",DARK_BLUE);
            case "Treads of Unfathomable Pressure":
                return new Item(name,quantity,"feet","-60% dmg, your attacks that would miss deal 85% dmg",RED);
            default:
                return new Item(name,quantity);
        }
    }
}