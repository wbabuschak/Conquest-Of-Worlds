const ItemEffects = {
    "Stormstrike": state => {
        state.dmgMult += Math.random() > 0.5 ? 1.00 : -1.00;
    },
    "Red Dragonscale Cape": state => {
        if (state.attackCount % 7 === 0) state.dmgMult += 1.00;
    },
    "Dragon Mucus Tincture": state => {
        if (state.attackCount % 7 === 0) state.dmgMult += 0.10;
    },
    "Goblin Ledger": state => {
        state.dmgMult += 0.01 * (state.attackCount % 12);
    },
    "Nebula Gemstone": state => {
        if (state.attackCount % 2 === 0) state.dmgMult += 0.50;
    },
    "Laser-powered Goblin Smasher": state => {
        if (state.attackCount % 3 === 0) state.moreMult += 1.00;
    },
    "Arcane Circuitboard": state => {
        if (state.attackCount % 3 === 0) state.dmgMult += 0.08;
    },
    "Ring of Greed": state => {
        if (state.attackCount % 4 === 0) state.missChance += 1000.0;
    },
    "Headcracker Mitts": state => {
        state.dmg += 1 + Math.floor(Math.random() * 12);
    },
    "Mysterious Pleasure Juice": state => {
        state.dmgMult += Math.random() * 0.30;
    },
    "Ak'Olp, Incineration Wand": state => {
        state.dmg += 20 * (state.attackCount % 10);
        state.dmgMult += 0.20 * (state.attackCount % 10);
    },
    "Chaos Vambrace": state => {
        state.dmg += Math.floor(Math.random() * 31);
    },
    "Cape of Cunning": state => {
        if (state.enemyAttacks === 0) state.moreMult += 0.20;
    },
    "Overtuned Grippers": state => {
        state.dmgMult -= 0.10 * (state.attackCount % 6);
    },
    "Ambush Sensor": state => {
        if (state.enemyAttacks === 0) state.missChance -= 10000.0;
    },
    "Reworked Goblin Tech": state => {
        if (state.enemyAttacks === 0) state.dmg += Math.floor(Math.random() * 51);
    },
    "Electric Eye": state => {
        state.dmg += 1 * (state.attackCount % 33);
    },
    "Cage of Inexorable Torment": state => {
        if (state.enemyAttacks === 0) state.missChance += 1000.0;
    },
    "Ring of the Unbroken Stare": state => {
        if (state.enemyAttacks > 7) state.dmgMult += 0.40;
    },
    "Symbol of Everlasting Humanity": state => {
        if (state.enemyAttacks > 9) {
            state.moreMult += 0.10;
            if (state.enemyAttacks > 19) state.moreMult += 0.10;
        }
    },
    "Butcher's Apron": state => {
        if (state.attackCount % 2 === 0) {
            state.dmgMult += 0.40;
            if (state.attackCount % 4 === 0) state.dmg += 10;
        }
    },
    "Damaged Exosuit": state => {
        if (state.enemyAttacks > 9) {
            state.missChance -= 0.50;
            if (state.enemyAttacks > 19) state.missChance -= 0.50;
        }
    },
    "Repurposed Digital Gauge": state => {
        let trophies = state.inventory.items.find(i => i.name === "Dreadbeast Trophy");
        if (trophies) state.dmgMult += 0.001 * trophies.quantity;
    },
    "Degenerate Star Tome": state => {
        if (state.attackCount % 5 === 0) state.moreMult += 1.00;
    },
    "Degenerate Star Boots": state => {
        if (state.attackCount % 5 === 1) state.moreMult += 1.00;
    },
    "Degenerate Star Belt": state => {
        if (state.attackCount % 5 === 2) state.moreMult += 1.00;
    },
    "Degenerate Star Hood": state => {
        if (state.attackCount % 5 === 3) state.moreMult += 1.00;
    },
    "Degenerate Star Coat": state => {
        if (state.attackCount % 5 === 4) state.moreMult += 1.00;
    },
    "Essence-Starved Tome": state => {
        if (state.attackCount % 5 === 0) state.moreMult += 1.00;
    },
    "Essence-Starved Boots": state => {
        if (state.attackCount % 5 === 1) state.moreMult += 1.00;
    },
    "Essence-Starved Belt": state => {
        if (state.attackCount % 5 === 2) state.moreMult += 1.00;
    },
    "Essence-Starved Hood": state => {
        if (state.attackCount % 5 === 3) state.moreMult += 1.00;
    },
    "Essence-Starved Coat": state => {
        if (state.attackCount % 5 === 4) state.moreMult += 1.00;
    },
    "Cape of the Neutron Star": state => {
        if (state.attackCount % 45 === 0) state.dmgMult += 16.00;
    },
    "Cape of the White Dwarf": state => {
        if (state.attackCount % 9 === 0) state.dmgMult += 3.00;
    },
    "Anti-matter Aegis": state => {
        state.dmg += 10 * (state.attackCount % 4);
    },
    "Ion Chimes": state => {
        if (state.attackCount % 2 === 0) {
            state.missChance -= 0.50;
            if (state.attackCount % 4 === 0) state.dmgMult += 0.50;
        }
    },
    "Stolen Hope": state => {
        state.dmgMult += 0.01 * (state.attackCount % 50);
    },
    "Sulfur Respirator": state => {
        state.dmgMult += 0.06 * (state.attackCount % 6);
    },
    "Amulet of Vitriolic Withering": state => {
        state.missChance -= 0.10 * (state.attackCount % 10);
    },
    "Aura Scanner": state => {
        state.armorBreak += 20;
    },
    "Titanic Bulwark": state => {
        state.armorBreak += 100;
    },
    "Blazer of the Screaming Eagle": state => {
        state.armorBreak += 20;
        state.armorBreakMod += 1.00;
    },
    "Gauntlets of Transcendent Faith": state => {
        if (Math.random() > 0.75) {
            state.armorBreak += 100;
        }
    },
    "Symbol of Trinity": state => {
        state.dmgMult += 0.33 * (state.attackCount % 3);
    }
};

const ItemStaticEffects = {
    "Common Dagger": s => { s.dmg += 3; },
    "Ring of Slaying": s => { s.dmg += 1; },
    "Epic Sword": s => { s.dmg += 7; },
    "Gilded Dagger": s => { s.dmg += 6; },
    "Mummy Wraps": s => { s.dmgMult += 0.10; },
    "Havoc Blade": s => { s.dmgMult += 0.30; s.dmg += 3; },
    "Haunting Guise": s => { if (!itemInSlot("weapon")) s.dmgMult += 0.50; },
    "Ring of Venom": s => { s.dmgMult += 0.10; },
    "Gauntlets of Sheer Force": s => { s.setBase = 10; },
    "Emesis Amulet": s => { s.missChance += 0.09; s.dmgMult += 0.09; s.dmg += 9; },
    "Crown of the Corpseeater": s => { s.dmgMult += 0.11; },
    "Wraps of Temptation": s => { s.dmgMult += 0.23; s.missChance += 0.10; },
    "Blade of One Thousand Hooks": s => { s.dmgMult += 0.66; },
    "Stone of James": s => { s.moreMult += 0.10; },
    "Treads of Crushing Depths": s => { s.dmgMult += 0.09; },
    "Fossil Blade": s => { s.dmg += 20; },
    "Tooth Necklace": s => { s.dmg += 6; },
    "Killer Gloves": s => { s.dmg += 2; },
    "Blasting Wand": s => { s.dmg += 10; },
    "Ice Bear Fur Shawl": s => { s.dmg += 10; },
    "Terror Mask": s => { s.missChance -= 0.20; },
    "Dread Loop": s => { s.setBase = 16; s.missChance += 0.16; },
    "Mote of Arcane Power": s => { s.missChance -= 0.40; s.dmgMult -= 0.20; s.arcaneCount++;},
    "Nature's Wrath": s => { s.dmg += 18; s.missChance -= 0.09; s.dmgMult += 0.06; },
    "Nature's Fury": s => { s.dmg += 19; s.missChance -= 0.09; s.dmgMult += 0.11; },
    "Ice Bear Paw Mitts": s => { s.dmg += 6; },
    "Activated Gemstone Amulet": s => { s.dmg += 10; },
    "Baby Dragon Fang": s => { s.dmgMult += 0.13; },
    "Juvenile Dragon Talon": s => { s.dmg += 33; },
    "Green Dragonscale Cape": s => { s.dmgMult += 0.07; },
    "Black Dragonscale Cape": s => { s.moreMult += 0.10; s.missChance += 0.07; },
    "Blue Dragonscale Cape": s => { s.dmg += 7; },
    "Dragonheart Piercer": s => { s.dmgMult += 0.07; s.dmg += 26; },
    "Devastating Crossbow": s => { s.missChance -= 10000.0; s.dmg += 21; },
    "Snake-eye Chain": s => { s.dmg += 2; },
    "Skullstompers": s => { s.dmg += 1; },
    "Devious Dagger": s => { s.dmg += 6; s.dmgMult += 0.16; },
    "Ratkickers": s => { s.dmgMult += 0.06; },
    "Gold Cloak": s => { s.dmg += 1; s.dmgMult += 0.01; s.moreMult += 0.01; s.missChance -= 0.01; },
    "Ring of Greed": s => { s.dmgMult += 0.40; },
    "Astral Hammer": s => { s.dmg += 100; s.missChance += 0.50; },
    "Moon Blasting Super Smashers": s => { s.setBase = 40; },
    "Laser Gigawatt Charger": s => {
        if (itemEquipped("Astral Hammer") || itemEquipped("Laser-powered Goblin Smasher") || itemEquipped("Green Laser Blaster") || itemEquipped("Grey Laser Blaster")) {
            s.dmgMult += 0.40;
        }
    },
    "Laser-powered Goblin Smasher": s => { s.dmg += 22; },
    "Green Laser Blaster": s => { s.dmg += 55; },
    "Grey Laser Blaster": s => { s.dmg += 50; s.dmgMult += 0.10; },
    "Volcano Badge": s => { s.dmgMult += 0.10; s.missChance -= 0.10; },
    "Kor'As, Obliteration Blade": s => { s.dmg += 113; s.dmgMult += 0.48; },
    "Heart of Molten Giant": s => { s.dmgMult += 0.48; s.missChance += 0.11; },
    "Eye of Molten Giant": s => { s.dmgMult += 0.24; s.missChance += 0.07; },
    "Destroyer Greaves": s => { s.moreMult += 0.20; },
    "Signet of Trembling": s => { s.dmgMult += 0.18; s.missChance -= 0.18; },
    "Deep Black Mask": s => { if (itemEquipped("The Obsidian Band")) s.dmgMult += 0.60; },
    "Sulfur Respirator": s => { s.dmg += 10; },
    "Horn of Doom": s => { s.moreMult += 0.06; },
    "Lava Scorpion Exoskeleton": s => { if (!itemInSlot("head") && !itemInSlot("feet") && !itemInSlot("hands")) s.dmgMult += 1.00; },
    "Steps of Worldshaking": s => { s.dmg += 20; },
    "Chaos Blade": s => { s.dmg += 90; s.dmgMult += 0.90; },
    "Overtuned Grippers": s => { s.dmgMult += 0.60; },
    "Flesh Den Entry Token": s => { s.dmg += 16; s.missChance -= 0.09; },
    "Dual-purpose Cane": s => { s.dmg += 10; s.missChance -= 0.10; },
    "Off-world Beast Fur Shawl": s => { s.dmg += 40; },
    "Hyper Cutter": s => { s.dmg += 21; s.missChance += 0.10; },
    "Badass Cloak": s => { s.dmgMult += 0.30; },
    "Ambush Sensor": s => { s.moreMult += 0.10; },
    "Gar'Ahan, Fleshstripper": s => { s.dmg += 300; s.missChance += 1.50; },
    "Tabis of Inexorable Torment": s => { s.dmg += 18; s.missChance -= 0.18; },
    "Cage of Inexorable Torment": s => { s.dmgMult += 0.40; },
    "Perfect Diamond Amulet": s => { s.missChance -= 0.30; },
    "Inexplicable Ribs": s => { s.dmgMult += 0.60; s.missChance += 0.16; },
    "Collapse Clasp": s => { s.dmgMult += 0.30; },
    "Magnetar Pendant": s => { s.dmg += 23; },
    "Impossibly Dense Chain": s => { s.dmgMult += 0.56; s.missChance += 0.14; },
    "Shard of Light": s => { s.dmg += 50; if (itemEquipped("Shard of Darkness")) { s.dmgMult += 0.30; s.missChance -= 0.18; } },
    "Shard of Darkness": s => { s.dmgMult += 0.30; s.missChance -= 0.18; },
    "Singularity of Purpose": s => { s.dmg += 1000; s.dmg -= 100 * equipped.length; },
    "Arcane Shield": s => { s.dmgMult += 0.05; s.missChance -= 0.10; s.arcaneCount++; },
    "Arcane Iris": s => { s.dmgMult += 0.05; s.missMult = 0.4; s.arcaneCount++; },
    "Arcane Phylactery": s => { s.dmgMult += 0.18; s.missChance += 0.10; s.arcaneCount++; },
    "Arcane Focusing Gem": s => { s.moreMult += 0.13; s.arcaneCount++; },
    "Helmet of Arcane Protection": s => { s.dmg += 7; s.arcaneSetBonus++; s.arcaneCount++; },
    "Vest of Arcane Devotion": s => { s.dmg += 7; s.arcaneSetBonus++; s.arcaneCount++; },
    "Gauntlets of Arcane Postmultiplication": s => { s.dmg += 7; s.arcaneSetBonus++; s.arcaneCount++; },
    "Treads of Arcane Stabilization": s => { s.dmg += 7; s.arcaneSetBonus++; s.arcaneCount++; },
    "Staff of Arcane Domination": s => { s.dmg += 7; s.arcaneSetBonus++; s.arcaneCount++; },
    "Arcane Helmet": s => { s.dmg += 7; s.arcaneCount++; },
    "Arcane Vest": s => { s.dmg += 7; s.arcaneSetBonus++; s.arcaneCount++; },
    "Arcane Gauntlets": s => { s.dmg += 7; s.arcaneSetBonus++; s.arcaneCount++; },
    "Arcane Treads": s => { s.dmg += 7; s.arcaneSetBonus++; s.arcaneCount++; },
    "Arcane Staff": s => { s.dmg += 7; s.arcaneSetBonus++; s.arcaneCount++; },
    "Arcane Circuitboard": s => { s.arcaneCount++; },
    "Broken Havoc Blade": s => { s.dmg += 10; },
    "Shattered Havoc Hilt": s => { s.dmg += 3; s.dmgMult += 0.30},
    "Havoc Blade": s => { s.dmg += 13; s.dmgMult += 0.30},
    "Degenerate Star Tome": s => { s.starSetBonus++; },
    "Degenerate Star Boots": s => { s.starSetBonus++; },
    "Degenerate Star Belt": s => { s.starSetBonus++; },
    "Degenerate Star Hood": s => { s.starSetBonus++; },
    "Degenerate Star Coat": s => { s.starSetBonus++; },
    "Titanic Smasher": s => { s.dmgMult += 4.00},
};

