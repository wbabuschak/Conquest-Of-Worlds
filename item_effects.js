const ItemEffects = {
    "Tri-element Spellbook": state => {
        let elementSelect = Math.random() * 3;
        switch (Math.floor(elementSelect)){
            case 0:
                state.dmg = DamagePair.mergeDamage(state.dmg,[new DamagePair("fire",1)]);
                break;
            case 1:
                state.dmg = DamagePair.mergeDamage(state.dmg,[new DamagePair("ice",1)]);
                break;
            case 2:
                state.dmg = DamagePair.mergeDamage(state.dmg,[new DamagePair("lightning",1)]);
                break;
        }
        
    },
    "Echoing Villainous Greaves": state => {
        state.dmgMult += 0.10 * (state.attackCount % 3)
    },
    "Flame Transfuser": state => {
        state.dmg = DamagePair.convertDamage(state.dmg, "ice", "fire");
        state.dmg = DamagePair.convertDamage(state.dmg, "lightning", "fire");
    },
    "Blazing Sigil": state => {
        state.dmgMult += 0.08 * (state.attackCount % 4)
    },
    "Doom Module": state => {
        state.dmg = DamagePair.convertDamage(state.dmg, "ice", "shadow");
    },
};

const ItemStaticEffects = {
    "Ramshackle Shank": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",2)]);},
    "Ring of Slaying": s => { s.missChance -= 0.02;},
    "Dirty Dagger": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",2),new DamagePair("poison",1)]);},
    "Forest Leather Vest": s => { s.dmgMult += 0.06;},
    "Forest Leather Hood": s => { s.dmgMult += 0.04;},
    "Forest Leather Gloves": s => { s.dmgMult += 0.03;},
    "Forest Leather Boots": s => { s.dmgMult += 0.04;},
    "Skinning Knife": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",3)]); s.dmgMult += 0.06;},
    "Silken Hood": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("poison",1)]);},
    "Spider Fang": s => { s.dmgMult += 0.01;},
    "Pilfered Gold Ring": s => { s.dmgMult += 0.11; s.missChance += 0.01;},
    "Reinforced Leather Vest": s => { s.dmgMult += 0.08;},
    "Reinforced Leather Hood": s => { s.dmgMult += 0.06;},
    "Reinforced Leather Gloves": s => { s.dmgMult += 0.05;},
    "Reinforced Leather Boots": s => { s.dmgMult += 0.06;},
    "Crossroads Ambush Knife": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",4)]); s.missChance -= 0.05;},
    "Gnoll Gang Belt Buckle": s => { s.missChance -= 0.01;},
    "Tooth Necklace": s => { s.dmgMult += 0.05;},
    "Reaper Cloak": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("shadow",1)]);},
    "Enchanted Reaper Cloak": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("shadow",1)]);},
    "Lesser Wizard Wand": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("shadow",4)]);},
    "Greater Wizard Wand": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("shadow",5)]);},
    "Ghost Cape": s => { s.dmgMult += 0.05;},
    "Frozen Legion Banner": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("ice",5)]);},
    "Yetimagician Skull": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("ice",3)]); s.missChance += 0.05; },
    "Icemail Barbute": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("ice",2)]); s.missChance -= 0.02; },
    "Frost-trap Victim Crusher": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",5)]); s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("ice",5)]); s.missChance += 0.10; },
    "Repaired Mail Gauntlets": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",1)]); s.dmgMult += 0.06;},
    "Repaired Mail Breastplate": s => { s.dmgMult += 0.12;},
    "Dirt Dwarves Medallion": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("dirt",2)]);},
    "Mussel Shell Helmet": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",2)]);},
    "Mussel Shell Vest": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",2)]);},
    "Mussel Shell Gauntlets": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",2)]);},
    "Mussel Shell Treads": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",2)]);},
    "Staff of Firebolt": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("fire",7)]); s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("arcane",3)]);},
    "Staff of Fireball": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("fire",12)]);},
    "Fire Emblem": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("fire",1)]); s.dmgMult += 0.08},
    "Blazing Sigil": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("fire",1)]); s.dmgMult += 0.08},
    "Forgemaster's Vice": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("fire",2)]);},
    "Doom Hood": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("shadow",2)]);},
    "Frost Cloak": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("ice",2)]);},
    "Shadowfrost Wand": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("shadow",5)]); s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("ice",5)]);},
    "Doomfrost Hood": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("shadow",2)]); s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("ice",1)]);},
    "Shadowfrost Cloak": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("shadow",1)]); s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("ice",2)]);},
    "Doomfrost Wand": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("shadow",7)]); s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("ice",7)]);},
    "Fragment of Ra'oulgh": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("fire",1)]); s.missChance -= 0.01},
    "Glyph of Ra'oulgh": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("fire",2)]); s.missChance -= 0.01},
    "Bolt of Ra'oulgh": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("fire",2)]); s.missChance -= 0.02},
    "Node of Ra'oulgh": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("fire",2)]); s.missChance -= 0.04},
    "Icon of Ra'oulgh": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("fire",4)]); s.missChance -= 0.04},
    "Lesser Yetimagic Enchantment": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("ice",1)]);},
    "Lesser Yetimagic Enchantment": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("ice",2)]);},
    "Farside Viewing Lens": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("shadow",2)]);},
    "Improved Farside Viewing Lens": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("shadow",3)]); s.dmgMult += 0.03;},
    "Perfect Farside Viewer": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("shadow",4)]); s.dmgMult += 0.04; s.missChance -= 0.04;},
    "Carving Tool": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",10)]); s.missChance -= 0.02;},
    "Molding Hammer": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",14)]); s.missChance += 0.06;},
    "Replica Montain King Belt Buckle": s => { s.dmg += 0.15;},
    "Evil Spellbook": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("shadow",1)]); s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("plague",1)]); s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("undeath",1)]);},
};

    // "Stormstrike": state => {
    //     state.dmgMult += Math.random() > 0.5 ? 1.00 : -1.00;
    // },
    // "Red Dragonscale Cape": state => {
    //     if (state.attackCount % 7 === 0) state.dmgMult += 1.00;
    // },
    // "Red Cape": state => {
    //     if (state.attackCount % 10 === 0) state.dmgMult += 0.70;
    // },
    // "Dragon Mucus Tincture": state => {
    //     if (state.attackCount % 7 === 0) state.dmgMult += 0.10;
    // },
    // "Goblin Ledger": state => {
    //     state.dmgMult += 0.01 * (state.attackCount % 12);
    // },
    // "Nebula Gemstone": state => {
    //     if (state.attackCount % 2 === 0) state.dmgMult += 0.50;
    // },
    // "Laser-powered Goblin Smasher": state => {
    //     if (state.attackCount % 3 === 0) state.moreMult += 1.00;
    // },
    // "Arcane Circuitboard": state => {
    //     if (state.attackCount % 3 === 0) state.dmgMult += 0.08;
    // },
    // "Ring of Greed": state => {
    //     if (state.attackCount % 4 === 0) state.missChance += 1000.0;
    // },
    // "Headcracker Mitts": state => {
    //     state.dmg += 1 + Math.floor(Math.random() * 12);
    // },
    // "Mysterious Pleasure Juice": state => {
    //     state.dmgMult += Math.random() * 0.30;
    // },
    // "Ak'Olp, Incineration Wand": state => {
    //     state.dmg += 20 * (state.attackCount % 10);
    //     state.dmgMult += 0.20 * (state.attackCount % 10);
    // },
    // "Chaos Vambrace": state => {
    //     state.dmg += Math.floor(Math.random() * 31);
    // },
    // "Cape of Cunning": state => {
    //     if (state.enemyAttacks === 0) state.moreMult += 0.20;
    // },
    // "Overtuned Grippers": state => {
    //     state.dmgMult -= 0.10 * (state.attackCount % 6);
    // },
    // "Ambush Sensor": state => {
    //     if (state.enemyAttacks === 0) state.missChance -= 10000.0;
    // },
    // "Reworked Goblin Tech": state => {
    //     if (state.enemyAttacks === 0) state.dmg += Math.floor(Math.random() * 51);
    // },
    // "Electric Eye": state => {
    //     state.dmg = DamagePair.mergeDamage(state.dmg,[new DamagePair("electric",1 * (state.attackCount % 33))]);
    // },
    // "Cage of Inexorable Torment": state => {
    //     if (state.enemyAttacks === 0) state.missChance += 1000.0;
    // },
    // "Ring of the Unbroken Stare": state => {
    //     if (state.enemyAttacks > 7) state.dmgMult += 0.40;
    // },
    // "Symbol of Everlasting Humanity": state => {
    //     if (state.enemyAttacks > 9) {
    //         state.moreMult += 0.10;
    //         if (state.enemyAttacks > 19) state.moreMult += 0.10;
    //     }
    // },
    // "Butcher's Apron": state => {
    //     if (state.attackCount % 2 === 0) {
    //         state.dmgMult += 0.40;
    //         if (state.attackCount % 4 === 0) state.dmg += 10;
    //     }
    // },
    // "Damaged Exosuit": state => {
    //     if (state.enemyAttacks > 9) {
    //         state.missChance -= 0.50;
    //         if (state.enemyAttacks > 19) state.missChance -= 0.50;
    //     }
    // },
    // "Repurposed Digital Gauge": state => {
    //     let trophies = state.inventory.items.find(i => i.name === "Dreadbeast Trophy");
    //     if (trophies) state.dmgMult += 0.001 * trophies.quantity;
    // },
    // "Degenerate Star Tome": state => {
    //     if (state.attackCount % 5 === 0) state.moreMult += 1.00;
    // },
    // "Degenerate Star Boots": state => {
    //     if (state.attackCount % 5 === 1) state.moreMult += 1.00;
    // },
    // "Degenerate Star Belt": state => {
    //     if (state.attackCount % 5 === 2) state.moreMult += 1.00;
    // },
    // "Degenerate Star Hood": state => {
    //     if (state.attackCount % 5 === 3) state.moreMult += 1.00;
    // },
    // "Degenerate Star Coat": state => {
    //     if (state.attackCount % 5 === 4) state.moreMult += 1.00;
    // },
    // "Essence-Starved Tome": state => {
    //     if (state.attackCount % 5 === 0) state.moreMult += 1.00;
    // },
    // "Essence-Starved Boots": state => {
    //     if (state.attackCount % 5 === 1) state.moreMult += 1.00;
    // },
    // "Essence-Starved Belt": state => {
    //     if (state.attackCount % 5 === 2) state.moreMult += 1.00;
    // },
    // "Essence-Starved Hood": state => {
    //     if (state.attackCount % 5 === 3) state.moreMult += 1.00;
    // },
    // "Essence-Starved Coat": state => {
    //     if (state.attackCount % 5 === 4) state.moreMult += 1.00;
    // },
    // "Cape of the Neutron Star": state => {
    //     if (state.attackCount % 45 === 0) state.dmgMult += 16.00;
    // },
    // "Cape of the White Dwarf": state => {
    //     if (state.attackCount % 9 === 0) state.dmgMult += 3.00;
    // },
    // "Anti-matter Aegis": state => {
    //     state.dmg = DamagePair.mergeDamage(state.dmg,[new DamagePair("Anti-matter",10 * (state.attackCount % 4))]);
    // },
    // "Ion Chimes": state => {
    //     if (state.attackCount % 2 === 0) {
    //         state.missChance -= 0.50;
    //         if (state.attackCount % 4 === 0) state.dmgMult += 0.50;
    //     }
    // },
    // "Stolen Hope": state => {
    //     state.dmgMult += 0.01 * (state.attackCount % 50);
    // },
    // "Sulfur Respirator": state => {
    //     state.dmgMult += 0.06 * (state.attackCount % 6);
    // },
    // "Amulet of Vitriolic Withering": state => {
    //     state.missChance -= 0.10 * (state.attackCount % 10);
    // },
    // "Aura Scanner": state => {
    //     state.armorBreak += 20;
    // },
    // "Titanic Bulwark": state => {
    //     state.armorBreak += 100;
    // },
    // "Blazer of the Screaming Eagle": state => {
    //     state.armorBreak += 20;
    //     state.armorBreakMod += 1.00;
    // },
    // "Gauntlets of Transcendent Faith": state => {
    //     if (Math.random() > 0.75) {
    //         state.armorBreak += 100;
    //     }
    // },
    // "Symbol of Trinity": state => {
    //     state.dmgMult += 0.33 * (state.attackCount % 3);
    // }

    // "Common Dagger": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",3)]); },
    // "Ring of Slaying": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",1)]); },
    // "Epic Sword": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",7)]); },
    // "Gilded Dagger": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",6)]); },
    // "Mummy Wraps": s => { s.dmgMult += 0.10; },
    // "Havoc Blade": s => { s.dmgMult += 0.30; s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",3)]); },
    // "Haunting Guise": s => { if (!itemInSlot("weapon")) s.dmgMult += 0.50; },
    // "Ring of Venom": s => { s.dmgMult += 0.10; },
    // "Gauntlets of Sheer Force": s => { s.setBase = 10; },
    // "Emesis Amulet": s => { s.missChance += 0.09; s.dmgMult += 0.09; s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("poison",9)]); },
    // "Crown of the Corpseeater": s => { s.dmgMult += 0.11; },
    // "Wraps of Temptation": s => { s.dmgMult += 0.23; s.missChance += 0.10; },
    // "Blade of One Thousand Hooks": s => { s.dmgMult += 0.66; },
    // "Stone of James": s => { s.moreMult += 0.10; },
    // "Treads of Crushing Depths": s => { s.dmgMult += 0.09; },
    // "Fossil Blade": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",20)]); },
    // "Tooth Necklace": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",6)]); },
    // "Killer Gloves": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",2)]); },
    // "Blasting Wand": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("fire",10)]); },
    // "Ice Bear Fur Shawl": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",10)]); },
    // "Terror Mask": s => { s.missChance -= 0.20; },
    // "Dread Loop": s => { s.setBase = 32; s.missChance += 0.16; },
    // "Mote of Arcane Power": s => { s.missChance -= 0.40; s.dmgMult -= 0.20; s.arcaneCount++;},
    // "Nature's Wrath": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",18)]); s.missChance -= 0.09; s.dmgMult += 0.06; },
    // "Nature's Fury": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",19)]); s.missChance -= 0.09; s.dmgMult += 0.11; },
    // "Ice Bear Paw Mitts": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",6)]); },
    // "Activated Gemstone Amulet": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("arcane",10)]); },
    // "Baby Dragon Fang": s => { s.dmgMult += 0.13; },
    // "Juvenile Dragon Talon": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",23)]); },

    // "Green Dragonscale Cape": s => { s.dmgMult += 0.10; },
    // "Black Dragonscale Cape": s => { s.moreMult += 0.10; s.missChance -= 0.07; },
    // "Blue Dragonscale Cape": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",7)]); },

    // "Green Cape": s => { s.dmgMult += 0.07; },
    // "Black Cape": s => {s.missChance -= 0.07; },
    // "Blue Cape": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",7)]); s.missChance += 0.07;},

    // "Dragonheart Piercer": s => { s.dmgMult += 0.07; s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",26)]); },
    // "Devastating Crossbow": s => { s.missChance -= 10000.0; s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",21)]); },
    // "Snake-eye Chain": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",2)]); },
    // "Skullstompers": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",1)]); },
    // "Devious Dagger": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",6)]); s.dmgMult += 0.16; },
    // "Ratkickers": s => { s.dmgMult += 0.06; },
    // "Gravegrips": s => { s.dmgMult += 0.04; },
    // "Gold Cloak": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",1)]); s.dmgMult += 0.01; s.moreMult += 0.01; s.missChance -= 0.01; },
    // "Ring of Greed": s => { s.dmgMult += 0.40; },
    // "Astral Hammer": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("astral",100)]); s.missChance += 0.50; },
    // "Moon Blasting Super Smashers": s => { s.setBase = 66; },
    // "Laser Gigawatt Charger": s => {
    //     if (itemEquipped("Astral Hammer") || itemEquipped("Laser-powered Goblin Smasher") || itemEquipped("Green Laser Blaster") || itemEquipped("Grey Laser Blaster")) {
    //         s.dmgMult += 0.40;
    //     }
    // },
    // "Laser-powered Goblin Smasher": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",22)]); },
    // "Green Laser Blaster": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("plasma",55)]); },
    // "Grey Laser Blaster": s => {  s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("plasma",50)]); s.dmgMult += 0.10; },
    // "Volcano Badge": s => { s.dmgMult += 0.10; s.missChance -= 0.10; },
    // "Kor'As, Obliteration Blade": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",113)]); s.dmgMult += 0.48; },
    // "Heart of Molten Giant": s => { s.dmgMult += 0.48; s.missChance += 0.11; },
    // "Eye of Molten Giant": s => { s.dmgMult += 0.24; s.missChance += 0.07; },
    // "Destroyer Greaves": s => { s.moreMult += 0.20; },
    // "Signet of Trembling": s => { s.dmgMult += 0.18; s.missChance -= 0.18; },
    // "Deep Black Mask": s => { if (itemEquipped("The Obsidian Band")) s.dmgMult += 0.60; },
    // "Sulfur Respirator": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("poison",10)]); },
    // "Horn of Doom": s => { s.moreMult += 0.06; },
    // "Lava Scorpion Exoskeleton": s => { if (!itemInSlot("head") && !itemInSlot("feet") && !itemInSlot("hands")) s.dmgMult += 1.00; },
    // "Steps of Worldshaking": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",20)]); },
    // "Chaos Blade": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("chaos",90)]); s.dmgMult += 0.90; },
    // "Overtuned Grippers": s => { s.dmgMult += 0.60; },
    // "Flesh Den Entry Token": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",16)]);; s.missChance -= 0.09; },
    // "Dual-purpose Cane": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",10)]); s.missChance -= 0.10; },
    // "Off-world Beast Fur Shawl": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",40)]); },
    // "Hyper Cutter": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("plasma",21)]); s.missChance += 0.10; },
    // "Badass Cloak": s => { s.dmgMult += 0.30; },
    // "Ambush Sensor": s => { s.moreMult += 0.10; },
    // "Gar'Ahan, Fleshstripper": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",300)]); s.missChance += 1.50; },
    // "Tabis of Inexorable Torment": s => { s.dmg += 18; s.missChance -= 0.18; },
    // "Cage of Inexorable Torment": s => { s.dmgMult += 0.40; },
    // "Perfect Diamond Amulet": s => { s.missChance -= 0.30; },
    // "Inexplicable Ribs": s => { s.dmgMult += 0.60; s.missChance += 0.16; },
    // "Slicing Gloves": s => { s.setBase = 100;},
    // "Collapse Clasp": s => { s.dmgMult += 0.30; },
    // "Magnetar Pendant": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("astral",23)]); },
    // "Impossibly Dense Chain": s => { s.dmgMult += 0.56; s.missChance += 0.14; },
    // "Shard of Light": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("radiant",50)]); if (itemEquipped("Shard of Darkness")) { s.dmgMult += 0.30; s.missChance -= 0.18; } },
    // "Shard of Darkness": s => { s.dmgMult += 0.30; s.missChance -= 0.18; },
    // "Singularity of Purpose": s => { s.dmg += 1000; s.dmg -= 100 * equipped.length; },
    // "Arcane Shield": s => { s.dmgMult += 0.05; s.missChance -= 0.10; s.arcaneCount++; },
    // "Arcane Iris": s => { s.dmgMult += 0.05; s.missMult = 0.4; s.arcaneCount++; },
    // "Arcane Phylactery": s => { s.dmgMult += 0.18; s.missChance += 0.10; s.arcaneCount++; },
    // "Arcane Focusing Gem": s => { s.moreMult += 0.13; s.arcaneCount++; },
    // "Helmet of Arcane Protection": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("arcane",7)]); s.arcaneSetBonus++; s.arcaneCount++; },
    // "Vest of Arcane Devotion": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("arcane",7)]); s.arcaneSetBonus++; s.arcaneCount++; },
    // "Gauntlets of Arcane Postmultiplication": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("arcane",7)]); s.arcaneSetBonus++; s.arcaneCount++; },
    // "Treads of Arcane Stabilization": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("arcane",7)]); s.arcaneSetBonus++; s.arcaneCount++; },
    // "Staff of Arcane Domination": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("arcane",7)]); s.arcaneSetBonus++; s.arcaneCount++; },
    // "Arcane Helmet": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("arcane",7)]); s.arcaneCount++; },
    // "Arcane Vest": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("arcane",7)]); s.arcaneSetBonus++; s.arcaneCount++; },
    // "Arcane Gauntlets": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("arcane",7)]); s.arcaneSetBonus++; s.arcaneCount++; },
    // "Arcane Treads": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("arcane",7)]); s.arcaneSetBonus++; s.arcaneCount++; },
    // "Arcane Staff": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("arcane",7)]); s.arcaneSetBonus++; s.arcaneCount++; },
    // "Arcane Circuitboard": s => { s.arcaneCount++; },
    // "Broken Havoc Blade": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",10)]); },
    // "Shattered Havoc Hilt": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",3)]); s.dmgMult += 0.30},
    // "Havoc Blade": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",13)]); s.dmgMult += 0.30},
    // "Degenerate Star Tome": s => { s.starSetBonus++; },
    // "Degenerate Star Boots": s => { s.starSetBonus++; },
    // "Degenerate Star Belt": s => { s.starSetBonus++; },
    // "Degenerate Star Hood": s => { s.starSetBonus++; },
    // "Degenerate Star Coat": s => { s.starSetBonus++; },
    // "Titanic Smasher": s => { s.dmgMult += 4.00},
    // "Wraps of the Great Deceiver": s => { s.dmg = DamagePair.mergeDamage(s.dmg,[new DamagePair("physical",69)]); s.dmgMult += 1.69; s.missChance += 0.6; },
    // "Treads of Unfathomable Pressure": s => { s.dmgMult -= 0.60; s.missMult = 0.85; },
    // "Lesser Spirit Enchantment": s => { s.dropBonus += 0.01; },
    // "Greater Spirit Enchantment": s => { s.dropBonus += 0.015; },
    // "Lesser Frost Enchantment": s => { s.dropBonus += 0.014; },
    // "Greater Frost Enchantment": s => { s.dropBonus += 0.026; },
    // "Lesser Myth Enchantment": s => { s.dropBonus += 0.025; },
    // "Greater Myth Enchantment": s => { s.dropBonus += 0.034; },
    // "Enchanted Yeti Fur Hood": s => { s.dmgMult += 0.08; },
    // "Enchanted Yeti Fur Coat": s => { s.dmgMult += 0.15; },
    // "Necromancer Mitts": s => { s.dmgMult += 0.05; s.necroSetBonus++; },
    // "Necromancer Hood": s => { s.dmgMult += 0.08; s.necroSetBonus++; },
    // "Necromancer Coat": s => { s.dmgMult += 0.015; s.necroSetBonus++; },

