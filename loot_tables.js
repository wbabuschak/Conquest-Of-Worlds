function genLootTable(table){
        const items = table.map(item => Item.createItem(item.name, item.quantity));
        const weights = table.map(item => item.weight);
        return new LootTable(items, weights);
    }

// DEFAULT WORLD

const dirtyGoblinLootTable = genLootTable([
    { name: "Rotten Food", quantity: 1, weight: 2 },
    { name: "Gold Coin", quantity: 4, weight: 6 },
    { name: "Gold Coin", quantity: 2, weight: 8 },
    { name: "Cloth Scrap", quantity: 1, weight: 10 },
    { name: "Lame Rocks", quantity: 2, weight: 14 },
    { name: "Lame Rocks", quantity: 1, weight: 16 },
    { name: "Ramshackle Shank", quantity: 1, weight: 4 },
    { name: "Filthy Boots", quantity: 1, weight: 5 }
]);

const commonThiefLootTable = genLootTable([
    { name: "Deadly Poison", quantity: 1, weight: 2 },
    { name: "Gold Coin", quantity: 3, weight: 6 },
    { name: "Gold Coin", quantity: 2, weight: 8 },
    { name: "Gold Coin", quantity: 1, weight: 10 },
    { name: "Cloth Scrap", quantity: 1, weight: 10 },
    { name: "Lame Rocks", quantity: 2, weight: 14 },
    { name: "Lame Rocks", quantity: 1, weight: 16 },
    { name: "Ramshackle Shank", quantity: 1, weight: 20 },
]);

const mysteriousVillainLootTable = genLootTable([
    { name: "Gold Coin", quantity: 8, weight: 5 },
    { name: "Gold Coin", quantity: 6, weight: 5 },
    { name: "Gold Coin", quantity: 4, weight: 5 },
    { name: "Gold Coin", quantity: 3, weight: 5 },
    { name: "Ring of Slaying", quantity: 1, weight: 2 },
    { name: "Spectral Essence", quantity: 1, weight: 1 }
]);

const forestBanditLootTable = genLootTable([
    { name: "Deadly Poison", quantity: 1, weight: 7 },
    { name: "Gold Coin", quantity: 6, weight: 20 },
    { name: "Gold Coin", quantity: 4, weight: 25 },
    { name: "Gold Coin", quantity: 2, weight: 30 },
    { name: "Cloth Scrap", quantity: 1, weight: 18 },
    { name: "Cloth Scrap", quantity: 2, weight: 10 },
    { name: "Forest Leather Vest", quantity: 1, weight: 2 },
    { name: "Forest Leather Boots", quantity: 1, weight: 2 },
    { name: "Forest Leather Gloves", quantity: 1, weight: 4 },
    { name: "Forest Leather Hood", quantity: 1, weight: 4 },
    { name: "Pilfered Gold Ring", quantity: 1, weight: 1 },
]);

const creekHunterLootTable = genLootTable([
    { name: "Skinning Knife", quantity: 1, weight: 2 },
    { name: "Camping Equipment", quantity: 1, weight: 3 },
    { name: "Cloth Scrap", quantity: 1, weight: 12 },
    { name: "Cloth Scrap", quantity: 2, weight: 6 },
    { name: "Fur Scrap", quantity: 1, weight: 5 },
    { name: "Forest Leather Vest", quantity: 1, weight: 2 },
    { name: "Forest Leather Boots", quantity: 1, weight: 2 },
    { name: "Forest Leather Gloves", quantity: 1, weight: 1 },
    { name: "Forest Leather Hood", quantity: 1, weight: 1 },
]);

const woodsLurkerLootTable = genLootTable([
    { name: "Spider Fang", quantity: 1, weight: 3 },
    { name: "Crappy Bug Junk", quantity: 1, weight: 10 },
    { name: "Crappy Bug Junk", quantity: 2, weight: 5 },
    { name: "Crappy Bug Junk", quantity: 3, weight: 2 },
    { name: "Silken Hood", quantity: 1, weight: 1 },
]);

const longroadDogLootTable = genLootTable([
    { name: "Fur Scrap", quantity: 1, weight: 15 },
    { name: "Fur Scrap", quantity: 2, weight: 9 },
    { name: "Fur Scrap", quantity: 3, weight: 5 },
    { name: "Dog Tooth", quantity: 42, weight: 1 },
    { name: "Dog Tooth", quantity: 6, weight: 5 },
    { name: "Dog Tooth", quantity: 2, weight: 15 },
    { name: "Dog Tooth", quantity: 1, weight: 35 },
]);

const longroadBanditLootTable = genLootTable([
    { name: "Gold Coin", quantity: 7, weight: 24 },
    { name: "Gold Coin", quantity: 11, weight: 21 },
    { name: "Stolen Junk", quantity: 1, weight: 39 },
    { name: "Skinning Knife", quantity: 1, weight: 6 },
    { name: "Crossroads Ambush Knife", quantity: 1, weight: 3 },
    { name: "Pilfered Gold Ring", quantity: 1, weight: 1 },
]);

const gnollGangsterLootTable = genLootTable([
    { name: "Gold Coin", quantity: 8, weight: 8 },
    { name: "Gold Coin", quantity: 15, weight: 7 },
    { name: "Stolen Junk", quantity: 1, weight: 13 },
    { name: "Skinning Knife", quantity: 1, weight: 2 },
    { name: "Crossroads Ambush Knife", quantity: 1, weight: 1 },
    { name: "Gnoll Gang Belt Buckle", quantity: 1, weight: 1 },
]);

const gnollGangBossLootTable = genLootTable([
    { name: "Gold Coin", quantity: 10, weight: 6 },
    { name: "Gold Coin", quantity: 16, weight: 5 },
    { name: "Gold Coin", quantity: 18, weight: 4 },
    { name: "Gold Coin", quantity: 19, weight: 3 },
    { name: "Stolen Junk", quantity: 1, weight: 3 },
    { name: "Crossroads Ambush Knife", quantity: 1, weight: 1 },
    { name: "Gnoll Gang Belt Buckle", quantity: 1, weight: 2 },
]);

const blackMagicianLootTable = genLootTable([
    { name: "Reaper Cloak", quantity: 1, weight: 1 },
    { name: "Magical Essence", quantity: 2, weight: 4 },
    { name: "Magical Essence", quantity: 1, weight: 8 },
    { name: "High Quality Cloth Scrap", quantity: 1, weight: 24 },
    { name: "High Quality Cloth Scrap", quantity: 2, weight: 8 },
    { name: "Lesser Wizard Wand", quantity: 1, weight: 5 },
    { name: "Tri-element Spellbook", quantity: 1, weight: 2 },
]);

const soulUnionistLootTable = genLootTable([
    { name: "Reaper Cloak", quantity: 1, weight: 1 },
    { name: "Magical Essence", quantity: 2, weight: 4 },
    { name: "Magical Essence", quantity: 1, weight: 8 },
    { name: "High Quality Cloth Scrap", quantity: 1, weight: 24 },
    { name: "High Quality Cloth Scrap", quantity: 2, weight: 8 },
    { name: "Greater Wizard Wand", quantity: 1, weight: 3 },
]);

const darkBrotherhoodCommanderLootTable = genLootTable([
    { name: "Reaper Cloak", quantity: 1, weight: 1 },
    { name: "Magical Essence", quantity: 2, weight: 4 },
    { name: "High Quality Cloth Scrap", quantity: 1, weight: 14 },
    { name: "High Quality Cloth Scrap", quantity: 2, weight: 12 },
    { name: "Tri-element Spellbook", quantity: 1, weight: 2 },
    { name: "Greater Wizard Wand", quantity: 1, weight: 3 },
]);

const spiritRealmThresholdEnemy = genLootTable([
    { name: "Spectral Essence", quantity: 2, weight: 20 },
    { name: "Spectral Essence", quantity: 3, weight: 15 },
    { name: "Spectral Essence", quantity: 4, weight: 10 },
    { name: "Spectral Essence", quantity: 5, weight: 5 },
    { name: "Ghost Cape", quantity: 1, weight: 4 },
    { name: "Farside Trophy", quantity: 1, weight: 2 },
    { name: "Shadow Signet", quantity: 1, weight: 1 },
]);

const frozenInvaderLootTable = genLootTable([
    { name: "Frozen Essence", quantity: 1, weight: 100 },
    { name: "Frozen Essence", quantity: 2, weight: 42 },
    { name: "Broken Mailparts", quantity: 1, weight: 60 },
    { name: "Broken Mailparts", quantity: 2, weight: 30 },
    { name: "Frozen Legion Banner Tatter", quantity: 1, weight: 7 },
    { name: "Yetimagician Skull Fragment", quantity: 1, weight: 3 },
    { name: "Frost-trap Victim Crusher", quantity: 1, weight: 1 },
    { name: "Icemail Barbute", quantity: 1, weight: 1 },
]);

const frozenLieutenantLootTable = genLootTable([
    { name: "Frozen Essence", quantity: 1, weight: 50 },
    { name: "Frozen Essence", quantity: 2, weight: 42 },
    { name: "Broken Mailparts", quantity: 1, weight: 40 },
    { name: "Broken Mailparts", quantity: 3, weight: 20 },
    { name: "Broken Mailparts", quantity: 4, weight: 15 },
    { name: "Frozen Legion Banner Tatter", quantity: 1, weight: 6 },
    { name: "Yetimagician Skull Fragment", quantity: 1, weight: 6 },
    { name: "Frost-trap Victim Crusher", quantity: 1, weight: 1 },
    { name: "Icemail Barbute", quantity: 1, weight: 1 },
]);

const farawayScoundrelLootTable = genLootTable([
    { name: "Stolen Junk", quantity: 2, weight: 40 },
    { name: "Stolen Junk", quantity: 3, weight: 21 },
    { name: "Broken Mailparts", quantity: 1, weight: 15 },
    { name: "Pilfered Tool", quantity: 1, weight: 3 },
    { name: "Stolen Chestmold", quantity: 1, weight: 2 },
    { name: "Stolen Handsmold", quantity: 1, weight: 2 },
    { name: "Stolen Designer Gloves", quantity: 1, weight: 2 },
]);

const farawayArchvillainLootTable = genLootTable([
    { name: "Stolen Junk", quantity: 2, weight: 50 },
    { name: "Stolen Junk", quantity: 3, weight: 42 },
    { name: "Broken Mailparts", quantity: 2, weight: 20 },
    { name: "Pilfered Tool", quantity: 1, weight: 5 },
    { name: "Stolen Designer Gloves", quantity: 1, weight: 3 },
    { name: "Stolen Chestmold", quantity: 1, weight: 4 },
    { name: "Stolen Handsmold", quantity: 1, weight: 4 },
    { name: "Echoing Villainous Greaves", quantity: 1, weight: 1 },
]);

const dirtDwarfLootTable = genLootTable([
    { name: "Mud Pie", quantity: 1, weight: 100 },
    { name: "Dirt Essence", quantity: 1, weight: 84 },
    { name: "Dirt Essence", quantity: 2, weight: 76 },
    { name: "Dirt Essence", quantity: 3, weight: 68 },
    { name: "Mud Brick", quantity: 1, weight: 32 },
    { name: "Mussel Shell", quantity: 1, weight: 16 },
    { name: "Dirt Dwarves Medallion", quantity: 1, weight: 12 },
    { name: "Mussel Shell", quantity: 2, weight: 6 },
    { name: "Mussel Shell Helmet", quantity: 1, weight: 1 },
    { name: "Mussel Shell Vest", quantity: 1, weight: 1 },
    { name: "Mussel Shell Gauntlets", quantity: 1, weight: 1 },
    { name: "Mussel Shell Treads", quantity: 1, weight: 1 },
    { name: "Dirt Block", quantity: 1, weight: 1 },
]);

const fireCultistLootTable = genLootTable([
    { name: "Sulphur Pouch", quantity: 1, weight: 110 },
    { name: "Fire Essence", quantity: 1, weight: 94 },
    { name: "Fire Essence", quantity: 2, weight: 86 },
    { name: "Fire Essence", quantity: 3, weight: 78 },
    { name: "Forgemaster's Vice", quantity: 1, weight: 42 },
    { name: "Fire Emblem", quantity: 1, weight: 22 },
    { name: "Staff of Firebolt", quantity: 1, weight: 16 },
    { name: "Flame Transfuser", quantity: 1, weight: 4 },
]);

const fireCultSlaveLootTable = genLootTable([
    { name: "Sulphur Pouch", quantity: 1, weight: 15 },
    { name: "Fire Essence", quantity: 1, weight: 6},
    { name: "Fire Essence", quantity: 2, weight: 5 },
    { name: "Fire Essence", quantity: 3, weight: 4 },
    { name: "Broken Restraints", quantity: 1, weight: 1 },
]);

const doomManiacLootTable = genLootTable([
    { name: "Mountainland Real", quantity: 1, weight: 24 },
    { name: "Mountainland Real", quantity: 2, weight: 18 },
    { name: "Mountainland Real", quantity: 3, weight: 12 },
    { name: "Stolen Junk", quantity: 1, weight: 18 },
    { name: "Stolen Junk", quantity: 2, weight: 16 },
    { name: "Stolen Junk", quantity: 3, weight: 14 },
    { name: "Doom Hood", quantity: 1, weight: 7 },
    { name: "Frost Cloak", quantity: 1, weight: 6 },
    { name: "Shadowfrost Wand", quantity: 1, weight: 2 },
    { name: "Doom Module", quantity: 1, weight: 1 },
]);

const livingFireLootTable = genLootTable([
    { name: "Smoldering Pitch", quantity: 1, weight: 80 },
    { name: "Smoldering Pitch", quantity: 2, weight: 60 },
    { name: "Fire Essence", quantity: 2, weight: 80 },
    { name: "Fire Essence", quantity: 3, weight: 60 },
    { name: "Fire Emblem", quantity: 1, weight: 4 },
    { name: "Fragment of Ra'oulgh", quantity: 1, weight: 3 },
]);

const farsideCommunerLootTable = genLootTable([
    { name: "Mountainland Real", quantity: 1, weight: 10 },
    { name: "Mountainland Real", quantity: 2, weight: 8 },
    { name: "Mountainland Real", quantity: 3, weight: 6 },
    { name: "Greater Magical Essence", quantity: 1, weight: 4 },
    { name: "Infused Metal Scrap", quantity: 1, weight: 14 },
    { name: "Infused Metal Scrap", quantity: 2, weight: 12 },
    { name: "Farside Viewing Lens", quantity: 1, weight: 3 },
    { name: "Shadowfrost Wand", quantity: 1, weight: 3 },
]);

const darkBrotherhoodInsiderLootTable = genLootTable([
    { name: "Greater Magical Essence", quantity: 1, weight: 4 },
    { name: "Supreme Quality Cloth Scrap", quantity: 1, weight: 14 },
    { name: "Supreme Quality Cloth Scrap", quantity: 2, weight: 12 },
    { name: "Evil Spellbook", quantity: 1, weight: 2 },
    { name: "Shadowfrost Wand", quantity: 1, weight: 3 },
]);

const magmaBeingLootTable = genLootTable([
    { name: "Smoldering Pitch", quantity: 2, weight: 70 },
    { name: "Smoldering Pitch", quantity: 3, weight: 50 },
    { name: "Fire Essence", quantity: 4, weight: 70 },
    { name: "Dirt Essence", quantity: 4, weight: 70 },
    { name: "Fire Essence", quantity: 3, weight: 50 },
    { name: "Dirt Essence", quantity: 3, weight: 50 },
    { name: "Staff of Firebolt", quantity: 1, weight: 4 },
    { name: "Fragment of Ra'oulgh", quantity: 1, weight: 5 },
    { name: "Fragment of Ra'oulgh", quantity: 2, weight: 2 },
]);

const disguisedYetimageLootTable = genLootTable([
    { name: "Mountainland Real", quantity: 2, weight: 11 },
    { name: "Mountainland Real", quantity: 3, weight: 9 },
    { name: "Mountainland Real", quantity: 4, weight: 7 },
    { name: "Yetimagic Essence", quantity: 1, weight: 4 },
    { name: "Yetiblessed Cloth Scrap", quantity: 1, weight: 14 },
    { name: "Yetiblessed Cloth Scrap", quantity: 1, weight: 12 },
    { name: "Yetimagic Infusion Rod", quantity: 1, weight: 1 },
]);

const golemCarverLootTable = genLootTable([
    { name: "Smoldering Pitch", quantity: 3, weight: 30 },
    { name: "Stone Essence", quantity: 1, weight: 10 },
    { name: "Dirt Essence", quantity: 1, weight: 10 },
    { name: "Stone Essence", quantity: 2, weight: 8 },
    { name: "Dirt Essence", quantity: 2, weight: 8 },
    { name: "Carving Tool", quantity: 1, weight: 4 },
    { name: "Molding Hammer", quantity: 1, weight: 3 },
]);

const mountainKingDoubleAgentLootTable = genLootTable([
    { name: "Mountainland Real", quantity: 7, weight: 36 },
    { name: "Mountainland Real", quantity: 8, weight: 24 },
    { name: "Shadow Essence", quantity: 1, weight: 12 },
    { name: "Replica Mountain King Belt Buckle", quantity: 1, weight: 1 },
]);

const farsideScientistLootTable = genLootTable([
    { name: "Mountainland Real", quantity: 1, weight: 14 },
    { name: "Mountainland Real", quantity: 2, weight: 12 },
    { name: "Infused Metal Scrap", quantity: 3, weight: 14 },
    { name: "Infused Metal Scrap", quantity: 4, weight: 12 },
    { name: "Farside Viewing Lens", quantity: 1, weight: 3 },
    { name: "Lenscrafter Tool", quantity: 1, weight: 10 },
]);

const farsideOfficerLootTable = genLootTable([
    { name: "Mountainland Real", quantity: 2, weight: 8 },
    { name: "Mountainland Real", quantity: 3, weight: 6 },
    { name: "Infused Metal Scrap", quantity: 4, weight: 14 },
    { name: "Infused Metal Scrap", quantity: 5, weight: 12 },
    { name: "Farside Viewing Lens", quantity: 1, weight: 3 },
    { name: "Lenscrafter Tool Lockout Key", quantity: 1, weight: 4 },
]);