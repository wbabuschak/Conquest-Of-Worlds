function genLootTable(table){
        const items = table.map(item => Item.createItem(item.name, item.quantity));
        const weights = table.map(item => item.weight);
        return new LootTable(items, weights);
    }

// DEFAULT WORLD

const commonThiefLootTable = genLootTable([
    { name: "Deadly Poison", quantity: 1, weight: 2 },
    { name: "Gold Coin", quantity: 3, weight: 4 },
    { name: "Gold Coin", quantity: 2, weight: 6 },
    { name: "Gold Coin", quantity: 1, weight: 8 },
    { name: "Cloth Scrap", quantity: 1, weight: 10 },
    { name: "Lame Rocks", quantity: 2, weight: 14 },
    { name: "Lame Rocks", quantity: 1, weight: 16 },
    { name: "Common Dagger", quantity: 1, weight: 20 },
    { name: "Dirty Shoes", quantity: 1, weight: 4 }
]);

const dirtyGoblinLootTable = genLootTable([
    { name: "Rotten Food", quantity: 1, weight: 2 },
    { name: "Gold Coin", quantity: 4, weight: 6 },
    { name: "Gold Coin", quantity: 2, weight: 8 },
    { name: "Cloth Scrap", quantity: 1, weight: 10 },
    { name: "Lame Rocks", quantity: 2, weight: 14 },
    { name: "Lame Rocks", quantity: 1, weight: 16 },
    { name: "Common Dagger", quantity: 1, weight: 4 },
    { name: "Dirty Shoes", quantity: 1, weight: 5 }
]);

const mysteriousVillainLootTable = genLootTable([
    { name: "Gold Coin", quantity: 8, weight: 5 },
    { name: "Gold Coin", quantity: 6, weight: 5 },
    { name: "Gold Coin", quantity: 4, weight: 5 },
    { name: "Gold Coin", quantity: 3, weight: 5 },
    { name: "Dirty Shoes", quantity: 1, weight: 4 },
    { name: "Ring of Slaying", quantity: 1, weight: 2 },
    { name: "Spectral Essence", quantity: 1, weight: 1 }
]);

// SPIRIT WORLD

const spectralFiendLootTable = genLootTable([
    { name: "Ectoplasm", quantity: 6, weight: 66 },
    { name: "Ectoplasm", quantity: 12, weight: 64 },
    { name: "Ectoplasm", quantity: 18, weight: 62 },
    { name: "Ring of Slaying", quantity: 1, weight: 2 },
    { name: "Spectral Essence", quantity: 1, weight: 2 },
    { name: "Mummy Wraps", quantity: 1, weight: 2 },
    { name: "Gravegrips", quantity: 1, weight: 1 }
]);

const spiritEaterLootTable = genLootTable([
    { name: "Ectoplasm", quantity: 6, weight: 36 },
    { name: "Gold Coin", quantity: 1, weight: 14 },
    { name: "Bone Chip", quantity: 1, weight: 4 },
    { name: "Greater Spectral Essence", quantity: 1, weight: 2 },
    { name: "Ring of Slaying", quantity: 1, weight: 2 },
    { name: "Gravegrips", quantity: 1, weight: 1 }
]);

const ghastlyHorrorLootTable = genLootTable([
    { name: "Ectoplasm", quantity: 6, weight: 62 },
    { name: "Brain Slime", quantity: 2, weight: 8 },
    { name: "Brain Slime", quantity: 1, weight: 6 },
    { name: "Bone Chip", quantity: 1, weight: 4 },
    { name: "Mummy Wraps", quantity: 1, weight: 2 },
    { name: "Ring of Slaying", quantity: 1, weight: 2 },
    { name: "Gravegrips", quantity: 1, weight: 1 }
]);

// DESERT WORLD

const desertWraithLootTable = genLootTable([
    { name: "Gold Coin", quantity: 39, weight: 3 },
    { name: "Gold Coin", quantity: 29, weight: 5 },
    { name: "Gold Coin", quantity: 17, weight: 7 },
    { name: "Gold Coin", quantity: 13, weight: 9 },
    { name: "Cloth Scrap", quantity: 13, weight: 6 },
    { name: "Cloth Scrap", quantity: 11, weight: 10 },
    { name: "Cloth Scrap", quantity: 7, weight: 14 },
    { name: "Cloth Scrap", quantity: 5, weight: 18 },
    { name: "Drained Spirit", quantity: 1, weight: 2 },
    { name: "Shattered Havoc Hilt", quantity: 1, weight: 2 },
    { name: "Haunting Guise", quantity: 1, weight: 1 }
]);

const bileSpitterLootTable = genLootTable([
    { name: "Bug Part", quantity: 13, weight: 64 },
    { name: "Bug Part", quantity: 11, weight: 32 },
    { name: "Chitinous Plate", quantity: 1, weight: 16 },
    { name: "Chitinous Plate", quantity: 2, weight: 8 },
    { name: "Vitriol", quantity: 2, weight: 4 },
    { name: "Venomous Gland", quantity: 1, weight: 2 },
    { name: "Shattered Havoc Hilt", quantity: 1, weight: 2 },
    { name: "Ring of Venom", quantity: 1, weight: 1 }
]);

const desertZealotLootTable = genLootTable([
    { name: "Cloth Scrap", quantity: 12, weight: 21 },
    { name: "Cloth Scrap", quantity: 13, weight: 19 },
    { name: "Cloth Scrap", quantity: 14, weight: 17 },
    { name: "Gold Coin", quantity: 13, weight: 13 },
    { name: "Gold Coin", quantity: 23, weight: 11 },
    { name: "Gold Coin", quantity: 33, weight: 7 },
    { name: "Broken Havoc Blade", quantity: 1, weight: 5 },
    { name: "Killer Gloves", quantity: 1, weight: 4 },
    { name: "Water Jar", quantity: 1, weight: 2 },
    { name: "Zealot Essence", quantity: 2, weight: 2 }
]);

const sandstoneGolemLootTable = genLootTable([
    { name: "Lame Rocks", quantity: 9, weight: 8 },
    { name: "Cracked Gem", quantity: 1, weight: 10 },
    { name: "Sandstone Brick", quantity: 1, weight: 12 },
    { name: "Broken Circuitry", quantity: 5, weight: 6 },
    { name: "Broken Circuitry", quantity: 4, weight: 8 },
    { name: "Broken Circuitry", quantity: 3, weight: 10 },
    { name: "Sandstone Brick", quantity: 2, weight: 4 },
    { name: "Token of Faith", quantity: 1, weight: 2 },
    { name: "Gauntlets of Sheer Force", quantity: 1, weight: 1 }
]);

// HELL WORLD

const blazingBovineLootTable = genLootTable([
    { name: "Weary Soul", quantity: 6, weight: 12 },
    { name: "Repressed Memory", quantity: 6, weight: 12 },
    { name: "Broken Dream", quantity: 6, weight: 12 },
    { name: "Shattered Innocence", quantity: 6, weight: 12 },
    { name: "Memento of the Bovine", quantity: 1, weight: 3 },
    { name: "Wraps of Temptation", quantity: 1, weight: 1 },
    { name: "Stone of James", quantity: 1, weight: 1 }
]);

const infernalInsectLootTable = genLootTable([
    { name: "Weary Soul", quantity: 6, weight: 12 },
    { name: "Repressed Memory", quantity: 6, weight: 12 },
    { name: "Broken Dream", quantity: 6, weight: 12 },
    { name: "Shattered Innocence", quantity: 6, weight: 12 },
    { name: "Memento of the Insect", quantity: 1, weight: 3 },
    { name: "Crown of the Corpseeater", quantity: 1, weight: 1 },
    { name: "Blade of One Thousand Hooks", quantity: 1, weight: 1 }
]);

const sinfulSuccubusLootTable = genLootTable([
    { name: "Weary Soul", quantity: 6, weight: 12 },
    { name: "Repressed Memory", quantity: 6, weight: 12 },
    { name: "Broken Dream", quantity: 6, weight: 12 },
    { name: "Shattered Innocence", quantity: 6, weight: 12 },
    { name: "Memento of the Succubus", quantity: 1, weight: 3 },
    { name: "Wraps of Temptation", quantity: 1, weight: 1 },
    { name: "Promise Ring", quantity: 1, weight: 1 }
]);

const fieryFangtoothLootTable = genLootTable([
    { name: "Weary Soul", quantity: 6, weight: 12 },
    { name: "Repressed Memory", quantity: 6, weight: 12 },
    { name: "Broken Dream", quantity: 6, weight: 12 },
    { name: "Shattered Innocence", quantity: 6, weight: 12 },
    { name: "Memento of the Fangtooth", quantity: 1, weight: 3 },
    { name: "Tooth Necklace", quantity: 1, weight: 1 },
    { name: "Treads of Crushing Depths", quantity: 1, weight: 1 }
]);

const dreadfulDinoLootTable = genLootTable([
    { name: "Weary Soul", quantity: 6, weight: 12 },
    { name: "Repressed Memory", quantity: 6, weight: 12 },
    { name: "Broken Dream", quantity: 6, weight: 12 },
    { name: "Shattered Innocence", quantity: 6, weight: 12 },
    { name: "Memento of the Dino", quantity: 1, weight: 3 },
    { name: "Tooth Necklace", quantity: 1, weight: 1 },
    { name: "Fossil Blade", quantity: 1, weight: 1 }
]);

const vileVultureLootTable = genLootTable([
    { name: "Weary Soul", quantity: 6, weight: 12 },
    { name: "Repressed Memory", quantity: 6, weight: 12 },
    { name: "Broken Dream", quantity: 6, weight: 12 },
    { name: "Shattered Innocence", quantity: 6, weight: 12 },
    { name: "Memento of the Vulture", quantity: 1, weight: 3 },
    { name: "Crown of the Corpseeater", quantity: 1, weight: 1 },
    { name: "Emesis Amulet", quantity: 1, weight: 1 }
]);

// ICE WORLD

const iceologerLootTable = genLootTable([
    { name: "Fur Scrap", quantity: 7, weight: 6 },
    { name: "Fur Scrap", quantity: 5, weight: 9 },
    { name: "Fur Scrap", quantity: 3, weight: 12 },
    { name: "Magical Essence", quantity: 3, weight: 9 },
    { name: "Gold Coin", quantity: 144, weight: 9 },
    { name: "Gold Coin", quantity: 73, weight: 12 },
    { name: "Ice Bear Fur Shawl", quantity: 1, weight: 1 },
    { name: "Cracked Gemstone Amulet", quantity: 1, weight: 1 },
    { name: "Frozen Essence", quantity: 1, weight: 1 }
]);

const spookyRevenantLootTable = genLootTable([
    { name: "Weary Soul", quantity: 1, weight: 15 },
    { name: "Repressed Memory", quantity: 1, weight: 15 },
    { name: "Broken Dream", quantity: 1, weight: 15 },
    { name: "Shattered Innocence", quantity: 1, weight: 15 },
    { name: "Terror Mask", quantity: 1, weight: 1 },
    { name: "Frozen Essence", quantity: 1, weight: 1 }
]);

const iceBearLootTable = genLootTable([
    { name: "Fur Scrap", quantity: 10, weight: 30 },
    { name: "Fur Scrap", quantity: 12, weight: 20 },
    { name: "Fur Scrap", quantity: 14, weight: 10 },
    { name: "Broken Nail", quantity: 1, weight: 4 },
    { name: "Ice Bear Paw Mitts", quantity: 1, weight: 3 },
    { name: "Ice Bear Fur Shawl", quantity: 1, weight: 3 },
    { name: "Nature's Wrath", quantity: 1, weight: 1 },
    { name: "Frozen Essence", quantity: 1, weight: 1 }
]);

const animatedWeaponLootTable = genLootTable([
    { name: "Broken Blade", quantity: 1, weight: 144 },
    { name: "Magical Essence", quantity: 2, weight: 30 },
    { name: "Magical Essence", quantity: 4, weight: 25 },
    { name: "Magical Essence", quantity: 5, weight: 20 },
    { name: "Magical Essence", quantity: 7, weight: 15 },
    { name: "Mote of Arcane Power", quantity: 1, weight: 1 },
    { name: "Frozen Essence", quantity: 1, weight: 1 }
]);

const foulNecromancerLootTable = genLootTable([
    { name: "Cloth Scrap", quantity: 20, weight: 12 },
    { name: "Cloth Scrap", quantity: 17, weight: 18 },
    { name: "Cloth Scrap", quantity: 15, weight: 24 },
    { name: "Gold Coin", quantity: 244, weight: 30 },
    { name: "Gold Coin", quantity: 151, weight: 39 },
    { name: "Magical Essence", quantity: 3, weight: 18 },
    { name: "Magical Essence", quantity: 5, weight: 24 },
    { name: "Bone Chip", quantity: 1, weight: 6 },
    { name: "Ice Bear Fur Shawl", quantity: 1, weight: 2 },
    { name: "Dread Loop", quantity: 1, weight: 1 },
    { name: "Frozen Essence", quantity: 1, weight: 1 }
]);

// DRAGON SWAMP WORLD

const juvenileDrakeLootTable = genLootTable([
    { name: "Dragon Scale", quantity: 5, weight: 4 },
    { name: "Dragon Scale", quantity: 4, weight: 8 },
    { name: "Dragon Scale", quantity: 3, weight: 12 },
    { name: "Dragon Scale", quantity: 2, weight: 16 },
    { name: "Dragon Scale", quantity: 1, weight: 20 },
    { name: "Sticky Dragon Mucus", quantity: 1, weight: 2 },
    { name: "Baby Dragon Fang", quantity: 1, weight: 1 },
    { name: "Second Seal", quantity: 1, weight: 1 }
]);

const adolescentDrakeLootTable = genLootTable([
    { name: "Dragon Scale", quantity: 7, weight: 4 },
    { name: "Dragon Scale", quantity: 6, weight: 8 },
    { name: "Dragon Scale", quantity: 5, weight: 12 },
    { name: "Dragon Scale", quantity: 4, weight: 16 },
    { name: "Dragon Scale", quantity: 3, weight: 20 },
    { name: "Gold Coin", quantity: 541, weight: 10 },
    { name: "Gold Coin", quantity: 610, weight: 20 },
    { name: "Sticky Dragon Mucus", quantity: 1, weight: 2 },
    { name: "Juvenile Dragon Talon", quantity: 1, weight: 1 },
    { name: "Second Seal", quantity: 1, weight: 1 }
]);

const greenDrakeLootTable = genLootTable([
    { name: "Dragon Scale", quantity: 10, weight: 4 },
    { name: "Dragon Scale", quantity: 9, weight: 8 },
    { name: "Dragon Scale", quantity: 8, weight: 12 },
    { name: "Dragon Scale", quantity: 7, weight: 16 },
    { name: "Dragon Scale", quantity: 6, weight: 20 },
    { name: "Gold Coin", quantity: 813, weight: 10 },
    { name: "Gold Coin", quantity: 910, weight: 20 },
    { name: "Green Cape", quantity: 1, weight: 2 },
    { name: "Dragon Mucus Tincture", quantity: 1, weight: 1 },
    { name: "Second Seal", quantity: 1, weight: 1 }
]);

const blackDrakeLootTable = genLootTable([
    { name: "Dragon Scale", quantity: 11, weight: 4 },
    { name: "Dragon Scale", quantity: 10, weight: 8 },
    { name: "Dragon Scale", quantity: 9, weight: 12 },
    { name: "Dragon Scale", quantity: 8, weight: 16 },
    { name: "Dragon Scale", quantity: 7, weight: 20 },
    { name: "Gold Coin", quantity: 860, weight: 10 },
    { name: "Gold Coin", quantity: 990, weight: 20 },
    { name: "Black Cape", quantity: 1, weight: 2 },
    { name: "Dragon Mucus Tincture", quantity: 1, weight: 1 },
    { name: "Second Seal", quantity: 1, weight: 1 }
]);

const blueDrakeLootTable = genLootTable([
    { name: "Dragon Scale", quantity: 12, weight: 4 },
    { name: "Dragon Scale", quantity: 11, weight: 8 },
    { name: "Dragon Scale", quantity: 10, weight: 12 },
    { name: "Dragon Scale", quantity: 9, weight: 16 },
    { name: "Dragon Scale", quantity: 8, weight: 20 },
    { name: "Gold Coin", quantity: 900, weight: 10 },
    { name: "Gold Coin", quantity: 1031, weight: 20 },
    { name: "Blue Cape", quantity: 1, weight: 2 },
    { name: "Dragon Mucus Tincture", quantity: 1, weight: 1 },
    { name: "Second Seal", quantity: 1, weight: 1 }
]);

const redDrakeLootTable = genLootTable([
    { name: "Dragon Scale", quantity: 13, weight: 4 },
    { name: "Dragon Scale", quantity: 12, weight: 8 },
    { name: "Dragon Scale", quantity: 11, weight: 12 },
    { name: "Dragon Scale", quantity: 10, weight: 16 },
    { name: "Dragon Scale", quantity: 9, weight: 20 },
    { name: "Gold Coin", quantity: 919, weight: 10 },
    { name: "Gold Coin", quantity: 1108, weight: 20 },
    { name: "Red Cape", quantity: 1, weight: 2 },
    { name: "Dragon Mucus Tincture", quantity: 1, weight: 1 },
    { name: "Second Seal", quantity: 1, weight: 1 }
]);

const giantAnacondaLootTable = genLootTable([
    { name: "Grody Man-meat", quantity: 7, weight: 4 },
    { name: "Grody Man-meat", quantity: 3, weight: 8 },
    { name: "Grody Man-meat", quantity: 2, weight: 12 },
    { name: "Gold Coin", quantity: 101, weight: 13 },
    { name: "Gold Coin", quantity: 203, weight: 12 },
    { name: "Gold Coin", quantity: 341, weight: 11 },
    { name: "Gold Coin", quantity: 391, weight: 10 },
    { name: "Gold Coin", quantity: 431, weight: 9 },
    { name: "Gold Coin", quantity: 781, weight: 8 },
    { name: "Gold Coin", quantity: 919, weight: 7 },
    { name: "Gold Coin", quantity: 1108, weight: 6 },
    { name: "Rotten Meat", quantity: 1, weight: 2 },
    { name: "Snake-eye Chain", quantity: 1, weight: 1 },
    { name: "Second Seal", quantity: 1, weight: 1 },
    { name: "Platinum Coin", quantity: 1, weight: 1 }
]);

const vaingloriousDragonHunter = genLootTable([
    { name: "Dragon Scale", quantity: 4, weight: 4 },
    { name: "Dragon Scale", quantity: 3, weight: 8 },
    { name: "Dragon Scale", quantity: 2, weight: 12 },
    { name: "Gold Coin", quantity: 354, weight: 16 },
    { name: "Gold Coin", quantity: 300, weight: 20 },
    { name: "Dragonheart Piercer", quantity: 1, weight: 6 },
    { name: "Devastating Crossbow", quantity: 1, weight: 3 },
    { name: "Platinum Coin", quantity: 1, weight: 1 },
    { name: "Second Seal", quantity: 1, weight: 1 }
]);

// GOLD WORLD

const bossGoblinLootTable = genLootTable([
    { name: "Gold Coin", quantity: 1770, weight: 50 },
    { name: "Gold Coin", quantity: 2080, weight: 39 },
    { name: "Broken Rubber Band", quantity: 1, weight: 8 },
    { name: "Ring of Greed", quantity: 1, weight: 2 },
    { name: "Boss Goblin's Gilded Fountain Pen", quantity: 1, weight: 1 },
    { name: "First Seal", quantity: 1, weight: 1 }
]);

const goblinLoanmasterLootTable = genLootTable([
    { name: "Gold Coin", quantity: 1420, weight: 50 },
    { name: "Gold Coin", quantity: 1790, weight: 39 },
    { name: "Broken Rubber Band", quantity: 1, weight: 8 },
    { name: "Ring of Greed", quantity: 1, weight: 2 },
    { name: "Goblin Ledger", quantity: 1, weight: 1 },
    { name: "First Seal", quantity: 1, weight: 1 }
]);

const goblinHeadcrackerLootTable = genLootTable([
    { name: "Gold Coin", quantity: 1020, weight: 50 },
    { name: "Gold Coin", quantity: 1330, weight: 39 },
    { name: "Broken Tire Iron", quantity: 1, weight: 8 },
    { name: "Ring of Greed", quantity: 1, weight: 2 },
    { name: "Headcracker Mitts", quantity: 1, weight: 1 },
    { name: "First Seal", quantity: 1, weight: 1 }
]);

const goldGoblinGolemLootTable = genLootTable([
    { name: "Gold Coin", quantity: 2040, weight: 50 },
    { name: "Gold Coin", quantity: 2680, weight: 45 },
    { name: "Gold Coin", quantity: 3120, weight: 40 },
    { name: "Gold Coin", quantity: 3810, weight: 35 },
    { name: "Gold Coin", quantity: 4250, weight: 30 },
    { name: "Gold Coin", quantity: 4600, weight: 25 },
    { name: "Gold Coin", quantity: 6400, weight: 10 },
    { name: "Gold Coin", quantity: 9800, weight: 5 },
    { name: "First Seal", quantity: 1, weight: 1 }
]);

// DEFAULT WORLD PART 2

const uncommonBanditLootTable = genLootTable([
    { name: "Epic Sword", quantity: 1, weight: 1 },
    { name: "Deadly Poison", quantity: 1, weight: 2 },
    { name: "Gold Coin", quantity: 12, weight: 4 },
    { name: "Gold Coin", quantity: 8, weight: 6 },
    { name: "Gold Coin", quantity: 4, weight: 8 },
    { name: "Cloth Scrap", quantity: 4, weight: 10 },
    { name: "Lame Rocks", quantity: 8, weight: 14 },
    { name: "Lame Rocks", quantity: 4, weight: 16 },
    { name: "Ratkickers", quantity: 1, weight: 41 }
]);

const filthyGoblinLootTable = genLootTable([
    { name: "Rotten Food", quantity: 2, weight: 2 },
    { name: "Gold Coin", quantity: 16, weight: 6 },
    { name: "Gold Coin", quantity: 8, weight: 8 },
    { name: "Cloth Scrap", quantity: 4, weight: 10 },
    { name: "Lame Rocks", quantity: 8, weight: 14 },
    { name: "Lame Rocks", quantity: 4, weight: 16 },
    { name: "Ratkickers", quantity: 1, weight: 1 },
    { name: "Greedy Goldgrubber Grips", quantity: 1, weight: 1 }
]);

const overgrownVoleLootTable = genLootTable([
    { name: "Fur Scrap", quantity: 2, weight: 12 },
    { name: "Fur Scrap", quantity: 1, weight: 24 },
    { name: "Bitter Morsel", quantity: 1, weight: 7 },
    { name: "Big Tooth", quantity: 1, weight: 2 },
    { name: "Pilfered Shiny", quantity: 1, weight: 1 },
    { name: "Greedy Goldgrubber Grips", quantity: 1, weight: 1 }
]);

// SPECIAL SPAWN

const treasureGoblinLootTable = genLootTable([
    { name: "Gold Coin", quantity: 1, weight: 80 },
    { name: "Gold Coin", quantity: 10, weight: 40 },
    { name: "Gold Coin", quantity: 100, weight: 20 },
    { name: "Gold Coin", quantity: 1000, weight: 10 },
    { name: "Gold Cloak", quantity: 1, weight: 1 }
]);

// ARCANE WORLD

const keeperOfSealsLootTable = genLootTable([
    { name: "Magical Essence", quantity: 13, weight: 100 },
    { name: "Magical Essence", quantity: 15, weight: 80 },
    { name: "Magical Essence", quantity: 17, weight: 60 },
    { name: "Magical Essence", quantity: 19, weight: 40 },
    { name: "Third Seal", quantity: 1, weight: 4 },
    { name: "Fourth Seal", quantity: 1, weight: 4 },
    { name: "Fifth Seal", quantity: 1, weight: 4 },
    { name: "Sixth Seal", quantity: 1, weight: 4 },
    { name: "Seventh Seal", quantity: 1, weight: 4 },
    { name: "Arcane Helmet", quantity: 1, weight: 1 },
    { name: "Arcane Vest", quantity: 1, weight: 1 },
    { name: "Arcane Gauntlets", quantity: 1, weight: 1 },
    { name: "Arcane Treads", quantity: 1, weight: 1 },
    { name: "Arcane Staff", quantity: 1, weight: 1 }
]);

// ARCANE WORLD PART 2

const arcaneSoulStitcherLootTable = genLootTable([
    { name: "Arcane Star Jar", quantity: 1, weight: 3 },
    { name: "Magical Essence", quantity: 15, weight: 50 },
    { name: "Magical Essence", quantity: 17, weight: 40 },
    { name: "Magical Essence", quantity: 19, weight: 30 },
    { name: "Arcane Gauntlets", quantity: 1, weight: 1 },
    { name: "Arcane Phylactery", quantity: 1, weight: 1 }
]);

const arcaneKnightLootTable = genLootTable([
    { name: "Arcane Star Jar", quantity: 1, weight: 3 },
    { name: "Magical Essence", quantity: 17, weight: 50 },
    { name: "Magical Essence", quantity: 19, weight: 40 },
    { name: "Magical Essence", quantity: 21, weight: 30 },
    { name: "Arcane Helmet", quantity: 1, weight: 1 },
    { name: "Arcane Shield", quantity: 1, weight: 1 }
]);

const arcaneDevoteeLootTable = genLootTable([
    { name: "Arcane Star Jar", quantity: 1, weight: 3 },
    { name: "Magical Essence", quantity: 13, weight: 50 },
    { name: "Magical Essence", quantity: 15, weight: 40 },
    { name: "Magical Essence", quantity: 17, weight: 30 },
    { name: "Arcane Staff", quantity: 1, weight: 1 },
    { name: "Arcane Iris", quantity: 1, weight: 1 }
]);

const arcaneBattlemageLootTable = genLootTable([
    { name: "Arcane Star Jar", quantity: 1, weight: 3 },
    { name: "Magical Essence", quantity: 15, weight: 50 },
    { name: "Magical Essence", quantity: 17, weight: 40 },
    { name: "Magical Essence", quantity: 19, weight: 30 },
    { name: "Arcane Vest", quantity: 1, weight: 1 },
    { name: "Arcane Focusing Gem", quantity: 1, weight: 1 }
]);

const arcaneGolemLootTable = genLootTable([
    { name: "Arcane Star Jar", quantity: 1, weight: 3 },
    { name: "Magical Essence", quantity: 19, weight: 50 },
    { name: "Magical Essence", quantity: 21, weight: 40 },
    { name: "Magical Essence", quantity: 23, weight: 30 },
    { name: "Arcane Treads", quantity: 1, weight: 1 },
    { name: "Arcane Circuitboard", quantity: 1, weight: 1 }
]);

// SPACE WORLD

const moonRockGolemLootTable = genLootTable([
    { name: "Useless Moon Rock", quantity: 7, weight: 4 },
    { name: "Useless Moon Rock", quantity: 6, weight: 8 },
    { name: "Useless Moon Rock", quantity: 5, weight: 12 },
    { name: "Useless Moon Rock", quantity: 4, weight: 16 },
    { name: "Useless Moon Rock", quantity: 3, weight: 20 },
    { name: "Useless Moon Rock", quantity: 2, weight: 24 },
    { name: "Useless Moon Rock", quantity: 1, weight: 28 },
    { name: "Moon Blasting Super Smashers", quantity: 1, weight: 1 },
    { name: "Nebula Gemstone", quantity: 1, weight: 1 }
]);

const livingCometLootTable = genLootTable([
    { name: "Useless Moon Rock", quantity: 7, weight: 4 },
    { name: "Useless Moon Rock", quantity: 6, weight: 8 },
    { name: "Useless Moon Rock", quantity: 5, weight: 12 },
    { name: "Useless Moon Rock", quantity: 4, weight: 16 },
    { name: "Useless Moon Rock", quantity: 3, weight: 20 },
    { name: "Useless Moon Rock", quantity: 2, weight: 24 },
    { name: "Useless Moon Rock", quantity: 1, weight: 28 },
    { name: "Astral Hammer", quantity: 1, weight: 1 },
    { name: "Nebula Gemstone", quantity: 1, weight: 1 }
]);

const greyLaserAlienLootTable = genLootTable([
    { name: "Broken Laser Gun", quantity: 1, weight: 78 },
    { name: "Alien Sludge", quantity: 1, weight: 12 },
    { name: "Universal Credit", quantity: 1, weight: 12 },
    { name: "Grey Laser Blaster", quantity: 1, weight: 3 },
    { name: "Laser Gigawatt Charger", quantity: 1, weight: 1 }
]);

const greenLaserAlienLootTable = genLootTable([
    { name: "Broken Laser Gun", quantity: 1, weight: 78 },
    { name: "Alien Sludge", quantity: 1, weight: 12 },
    { name: "Universal Credit", quantity: 1, weight: 12 },
    { name: "Green Laser Blaster", quantity: 1, weight: 3 },
    { name: "Laser Gigawatt Charger", quantity: 1, weight: 1 }
]);

const uglyBugAlienLootTable = genLootTable([
    { name: "Bug Part", quantity: 101, weight: 78 },
    { name: "Alien Sludge", quantity: 1, weight: 12 },
    { name: "Universal Credit", quantity: 1, weight: 12 },
    { name: "Freaky Bug Eye", quantity: 1, weight: 3 },
    { name: "Laser Gigawatt Charger", quantity: 1, weight: 1 }
]);

const superstellarSpaceRaiderLootTable = genLootTable([
    { name: "Random Alien Junk", quantity: 1, weight: 50 },
    { name: "Freaky Moon Boots", quantity: 1, weight: 23 },
    { name: "Keys to the Galaxy", quantity: 1, weight: 15 },
    { name: "Alien Sludge", quantity: 1, weight: 13 },
    { name: "Universal Credit", quantity: 1, weight: 10 },
    { name: "Universal Credit", quantity: 2, weight: 4 },
    { name: "Laser-powered Goblin Smasher", quantity: 1, weight: 1 },
    { name: "Laser Gigawatt Charger", quantity: 1, weight: 1 }
]);

// VOLCANO PLANET WORLD

const obsidianSphereLootTable = genLootTable([
    { name: "Rapidly Cooled Rock", quantity: 1, weight: 50 },
    { name: "Rapidly Cooled Rock", quantity: 2, weight: 25 },
    { name: "Rapidly Cooled Rock", quantity: 3, weight: 15 },
    { name: "Trace Metal Ore", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 4, weight: 3 },
    { name: "The Obsidian Band", quantity: 1, weight: 2 },
    { name: "Volcano Badge", quantity: 1, weight: 1 },
    { name: "Deep Black Mask", quantity: 1, weight: 1 },
    { name: "Volcano Planet Essence", quantity: 1, weight: 10 }
]);

const lavaScorpionLootTable = genLootTable([
    { name: "Molten Shell Fragment", quantity: 1, weight: 50 },
    { name: "Molten Shell Fragment", quantity: 2, weight: 25 },
    { name: "Molten Shell Fragment", quantity: 3, weight: 15 },
    { name: "Molted Shell Fragment", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 4, weight: 3 },
    { name: "Amulet of Vitriolic Withering", quantity: 1, weight: 2 },
    { name: "Volcano Badge", quantity: 1, weight: 1 },
    { name: "Lava Scorpion Exoskeleton", quantity: 1, weight: 1 },
    { name: "Volcano Planet Essence", quantity: 1, weight: 10 }
]);

const magmaDrinkerLootTable = genLootTable([
    { name: "Rapidly Cooled Rock", quantity: 2, weight: 50 },
    { name: "Rapidly Cooled Rock", quantity: 3, weight: 25 },
    { name: "Rapidly Cooled Rock", quantity: 4, weight: 15 },
    { name: "Permineralized Skull Fragment", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 4, weight: 3 },
    { name: "Horn of Doom", quantity: 1, weight: 2 },
    { name: "Volcano Badge", quantity: 1, weight: 1 },
    { name: "Sulfur Respirator", quantity: 1, weight: 1 },
    { name: "Volcano Planet Essence", quantity: 1, weight: 10 }
]);

const basaltGolemLootTable = genLootTable([
    { name: "Rapidly Cooled Rock", quantity: 3, weight: 50 },
    { name: "Rapidly Cooled Rock", quantity: 4, weight: 25 },
    { name: "Rapidly Cooled Rock", quantity: 5, weight: 15 },
    { name: "Basaltic Fragment", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 4, weight: 3 },
    { name: "Signet of Trembling", quantity: 1, weight: 2 },
    { name: "Volcano Badge", quantity: 1, weight: 1 },
    { name: "Destroyer Greaves", quantity: 1, weight: 1 },
    { name: "Volcano Planet Essence", quantity: 1, weight: 10 }
]);

const fieryDreadbeastLootTable = genLootTable([
    { name: "Molten Shell Fragment", quantity: 1, weight: 100 },
    { name: "Molten Shell Fragment", quantity: 2, weight: 50 },
    { name: "Molten Shell Fragment", quantity: 3, weight: 30 },
    { name: "Dripping Fang", quantity: 1, weight: 10 },
    { name: "Universal Credit", quantity: 4, weight: 6 },
    { name: "Steps of Worldshaking", quantity: 1, weight: 4 },
    { name: "Volcano Badge", quantity: 1, weight: 2 },
    { name: "Dreadbeast Trophy", quantity: 1, weight: 1 },
    { name: "Volcano Planet Essence", quantity: 1, weight: 10 }
]);

const moltenGiantLootTable = genLootTable([
    { name: "Rapidly Cooled Rock", quantity: 4, weight: 50 },
    { name: "Rapidly Cooled Rock", quantity: 5, weight: 25 },
    { name: "Rapidly Cooled Rock", quantity: 6, weight: 15 },
    { name: "Eye of Molten Giant", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 4, weight: 3 },
    { name: "Heart of Molten Giant", quantity: 1, weight: 2 },
    { name: "Volcano Badge", quantity: 1, weight: 1 },
    { name: "Kor'As, Obliteration Blade", quantity: 1, weight: 1 },
    { name: "Volcano Planet Essence", quantity: 1, weight: 10 }
]);

// PLEASURE WORLD

const underworldGangsterLootTable = genLootTable([
    { name: "Cloth Scrap", quantity: 113, weight: 50 },
    { name: "Cloth Scrap", quantity: 135, weight: 25 },
    { name: "Cloth Scrap", quantity: 190, weight: 15 },
    { name: "Universal Credit", quantity: 6, weight: 3 },
    { name: "Reworked Goblin Tech", quantity: 1, weight: 2 },
    { name: "Mysterious Pleasure Juice", quantity: 1, weight: 1 },
    { name: "Badass Cloak", quantity: 1, weight: 1 },
    { name: "Pleasure Essence", quantity: 1, weight: 10 }
]);

const uncompromisingHedonistLootTable = genLootTable([
    { name: "Spoils of the Flesh", quantity: 1, weight: 50 },
    { name: "Spoils of the Flesh", quantity: 2, weight: 25 },
    { name: "Spoils of the Flesh", quantity: 3, weight: 15 },
    { name: "Secret Tool", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 6, weight: 3 },
    { name: "Flesh Den Entry Token", quantity: 1, weight: 2 },
    { name: "Mysterious Pleasure Juice", quantity: 1, weight: 1 },
    { name: "Overtuned Grippers", quantity: 1, weight: 1 },
    { name: "Pleasure Essence", quantity: 1, weight: 10 }
]);

const alienPimpLootTable = genLootTable([
    { name: "Spoils of the Flesh", quantity: 2, weight: 50 },
    { name: "Spoils of the Flesh", quantity: 3, weight: 25 },
    { name: "Spoils of the Flesh", quantity: 4, weight: 15 },
    { name: "Secret Tool", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 6, weight: 3 },
    { name: "Off-world Beast Fur Shawl", quantity: 1, weight: 2 },
    { name: "Mysterious Pleasure Juice", quantity: 1, weight: 1 },
    { name: "Dual-purpose Cane", quantity: 1, weight: 1 },
    { name: "Pleasure Essence", quantity: 1, weight: 10 }
]);

const subterraneanLootTable = genLootTable([
    { name: "Neutralized Anti-matter", quantity: 3, weight: 50 },
    { name: "Neutralized Anti-matter", quantity: 4, weight: 25 },
    { name: "Neutralized Anti-matter", quantity: 5, weight: 15 },
    { name: "Sigil of the Survivor", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 6, weight: 3 },
    { name: "Ambush Sensor", quantity: 1, weight: 2 },
    { name: "Mysterious Pleasure Juice", quantity: 1, weight: 1 },
    { name: "Hyper Cutter", quantity: 1, weight: 1 },
    { name: "Pleasure Essence", quantity: 1, weight: 10 }
]);

const veiledDreadbeastLootTable = genLootTable([
    { name: "Essence of Twisting Nether", quantity: 31, weight: 100 },
    { name: "Essence of Twisting Nether", quantity: 37, weight: 50 },
    { name: "Essence of Twisting Nether", quantity: 41, weight: 30 },
    { name: "Shadow Fang", quantity: 1, weight: 10 },
    { name: "Universal Credit", quantity: 6, weight: 6 },
    { name: "Universal Credit", quantity: 8, weight: 3 },
    { name: "Cape of Cunning", quantity: 1, weight: 4 },
    { name: "Mysterious Pleasure Juice", quantity: 1, weight: 2 },
    { name: "Dreadbeast Trophy", quantity: 1, weight: 1 },
    { name: "Pleasure Essence", quantity: 1, weight: 10 }
]);

const chaosInfiltratorLootTable = genLootTable([
    { name: "Essence of Twisting Nether", quantity: 41, weight: 50 },
    { name: "Essence of Twisting Nether", quantity: 43, weight: 25 },
    { name: "Essence of Twisting Nether", quantity: 47, weight: 15 },
    { name: "Chaos Blade", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 6, weight: 3 },
    { name: "Universal Credit", quantity: 8, weight: 3 },
    { name: "Chaos Vambrace", quantity: 1, weight: 2 },
    { name: "Mysterious Pleasure Juice", quantity: 1, weight: 1 },
    { name: "Ak'Olp, Incineration Wand", quantity: 1, weight: 1 },
    { name: "Pleasure Essence", quantity: 1, weight: 10 }
]);

// A.M. WORLD

const clangingMechanotentacleLootTable = genLootTable([
    { name: "Random Mechanojunk", quantity: 1, weight: 50 },
    { name: "Random Mechanojunk", quantity: 2, weight: 25 },
    { name: "Random Mechanojunk", quantity: 3, weight: 15 },
    { name: "Perpetual Dynamo", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 20, weight: 3 },
    { name: "Strangler Mitts", quantity: 1, weight: 2 },
    { name: "Electric Eye", quantity: 1, weight: 1 },
    { name: "Repurposed Digital Gauge", quantity: 1, weight: 1 },
    { name: "A.M. Essence", quantity: 1, weight: 10 }
]);

const razorSpitterLootTable = genLootTable([
    { name: "Random Mechanojunk", quantity: 2, weight: 50 },
    { name: "Random Mechanojunk", quantity: 3, weight: 25 },
    { name: "Random Mechanojunk", quantity: 4, weight: 15 },
    { name: "Perpetual Dynamo", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 20, weight: 3 },
    { name: "Slicing Gloves", quantity: 1, weight: 2 },
    { name: "Electric Eye", quantity: 1, weight: 1 },
    { name: "Damaged Exosuit", quantity: 1, weight: 1 },
    { name: "A.M. Essence", quantity: 1, weight: 10 }
    
]);

const resurrectedMeatSludgeLootTable = genLootTable([
    { name: "Destroyed Flesh", quantity: 2, weight: 50 },
    { name: "Destroyed Flesh", quantity: 3, weight: 25 },
    { name: "Destroyed Flesh", quantity: 4, weight: 15 },
    { name: "Still-beating Heart", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 20, weight: 3 },
    { name: "Inexplicable Ribs", quantity: 1, weight: 2 },
    { name: "Electric Eye", quantity: 1, weight: 1 },
    { name: "Butcher's Apron", quantity: 1, weight: 1 },
    { name: "A.M. Essence", quantity: 1, weight: 10 }
]);

const warpedManLootTable = genLootTable([
    { name: "Destroyed Flesh", quantity: 3, weight: 50 },
    { name: "Destroyed Flesh", quantity: 4, weight: 25 },
    { name: "Destroyed Flesh", quantity: 5, weight: 15 },
    { name: "Soul Remnant", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 20, weight: 3 },
    { name: "Symbol of Everlasting Humanity", quantity: 1, weight: 2 },
    { name: "Electric Eye", quantity: 1, weight: 1 },
    { name: "Ring of the Unbroken Stare", quantity: 1, weight: 1 },
    { name: "A.M. Essence", quantity: 1, weight: 10 }
]);

const hairyDreadbeastLootTable = genLootTable([
    { name: "Pile of Beast Fur", quantity: 31, weight: 100 },
    { name: "Pile of Beast Fur", quantity: 37, weight: 50 },
    { name: "Pile of Beast Fur", quantity: 41, weight: 30 },
    { name: "Brutal Fang", quantity: 1, weight: 10 },
    { name: "Universal Credit", quantity: 20, weight: 6 },
    { name: "Universal Credit", quantity: 24, weight: 3 },
    { name: "Perfect Diamond Amulet", quantity: 1, weight: 4 },
    { name: "Electric Eye", quantity: 1, weight: 2 },
    { name: "Dreadbeast Trophy", quantity: 1, weight: 1 },
    { name: "A.M. Essence", quantity: 1, weight: 10 }
]);

const amPlaythingLootTable = genLootTable([
    { name: "Broken Circuitry", quantity: 111, weight: 50 },
    { name: "Broken Circuitry", quantity: 133, weight: 25 },
    { name: "Broken Circuitry", quantity: 177, weight: 15 },
    { name: "Cage of Inexorable Torment", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 10, weight: 3 },
    { name: "Universal Credit", quantity: 12, weight: 3 },
    { name: "Tabis of Inexorable Torment", quantity: 1, weight: 2 },
    { name: "Electric Eye", quantity: 1, weight: 1 },
    { name: "Gar'Ahan, Fleshstripper", quantity: 1, weight: 1 },
    { name: "A.M. Essence", quantity: 1, weight: 10 }
]);

// STELLAR REMNANT WORLD

const impactSurvivorLootTable = genLootTable([
    { name: "Space Junk", quantity: 1, weight: 50 },
    { name: "Space Junk", quantity: 2, weight: 25 },
    { name: "Space Junk", quantity: 3, weight: 15 },
    { name: "Element Collector", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 14, weight: 3 },
    { name: "Stolen Hope", quantity: 1, weight: 2 },
    { name: "Collapse Clasp", quantity: 1, weight: 1 },
    { name: "Essence-Starved Coat", quantity: 1, weight: 1 },
    { name: "Stellar Remnant Essence", quantity: 1, weight: 10 }
]);

const ionBreatherLootTable = genLootTable([
    { name: "Solar Debris", quantity: 1, weight: 50 },
    { name: "Solar Debris", quantity: 2, weight: 25 },
    { name: "Solar Debris", quantity: 3, weight: 15 },
    { name: "Element Collector", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 14, weight: 3 },
    { name: "Ion Chimes", quantity: 1, weight: 2 },
    { name: "Collapse Clasp", quantity: 1, weight: 1 },
    { name: "Essence-Starved Hood", quantity: 1, weight: 1 },
    { name: "Stellar Remnant Essence", quantity: 1, weight: 10 }
]);

const plasmaJunkerLootTable = genLootTable([
    { name: "Solar Debris", quantity: 2, weight: 50 },
    { name: "Solar Debris", quantity: 3, weight: 25 },
    { name: "Solar Debris", quantity: 4, weight: 15 },
    { name: "Element Collector", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 14, weight: 3 },
    { name: "Anti-matter Aegis", quantity: 1, weight: 2 },
    { name: "Collapse Clasp", quantity: 1, weight: 1 },
    { name: "Essence-Starved Belt", quantity: 1, weight: 1 },
    { name: "Stellar Remnant Essence", quantity: 1, weight: 10 }
]);

const poststellarScreamerLootTable = genLootTable([
    { name: "Solar Debris", quantity: 3, weight: 50 },
    { name: "Solar Debris", quantity: 4, weight: 25 },
    { name: "Solar Debris", quantity: 5, weight: 15 },
    { name: "Astral Dust", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 14, weight: 3 },
    { name: "Impossibly Dense Chain", quantity: 1, weight: 2 },
    { name: "Collapse Clasp", quantity: 1, weight: 1 },
    { name: "Essence-Starved Boots", quantity: 1, weight: 1 },
    { name: "Stellar Remnant Essence", quantity: 1, weight: 10 }
]);

const superDreadbeastLootTable = genLootTable([
    { name: "Solar Debris", quantity: 4, weight: 100 },
    { name: "Solar Debris", quantity: 5, weight: 50 },
    { name: "Solar Debris", quantity: 6, weight: 30 },
    { name: "Supermassive Fang", quantity: 1, weight: 10 },
    { name: "Universal Credit", quantity: 14, weight: 6 },
    { name: "Universal Credit", quantity: 16, weight: 3 },
    { name: "Magnetar Pendant", quantity: 1, weight: 4 },
    { name: "Collapse Clasp", quantity: 1, weight: 2 },
    { name: "Dreadbeast Trophy", quantity: 1, weight: 1 },
    { name: "Stellar Remnant Essence", quantity: 1, weight: 10 }
]);

const studentofSyzygyLootTable = genLootTable([
    { name: "Solar Debris", quantity: 5, weight: 50 },
    { name: "Solar Debris", quantity: 6, weight: 25 },
    { name: "Solar Debris", quantity: 7, weight: 15 },
    { name: "Cape of the White Dwarf", quantity: 1, weight: 5 },
    { name: "Universal Credit", quantity: 14, weight: 3 },
    { name: "Universal Credit", quantity: 16, weight: 3 },
    { name: "Cape of the Neutron Star", quantity: 1, weight: 2 },
    { name: "Collapse Clasp", quantity: 1, weight: 1 },
    { name: "Essence-Starved Tome", quantity: 1, weight: 1 },
    { name: "Stellar Remnant Essence", quantity: 1, weight: 10 }
]);

// MYTH WORLD

const mythEnemyLootTable = genLootTable([
    { name: "Myth Essence", quantity: 1, weight: 75 },
    { name: "Greater Myth Essence", quantity: 1, weight: 15 },
    { name: "Aura Scanner", quantity: 1, weight: 5 },
    { name: "Gauntlets of Transcendent Faith", quantity: 1, weight: 3 },
    { name: "Shard of Light", quantity: 1, weight: 2 },
    { name: "Shard of Darkness", quantity: 1, weight: 1 },
    { name: "Symbol of Trinity", quantity: 1, weight: 1 },
    { name: "Singularity of Purpose", quantity: 1, weight: 1 },
    { name: "Blazer of the Screaming Eagle", quantity: 1, weight: 1 }
]);

// DEFAULT WORLD PART 3

const defaultWorldPartThreeEnemyLootTable = genLootTable([
    { name: "Life Essence", quantity: 1, weight: 200 },
    { name: "God Cinch", quantity: 1, weight: 1 },
    { name: "Chaos Emerald", quantity: 1, weight: 1 },
    { name: "God Bulwark", quantity: 1, weight: 1 },
    { name: "God Helm", quantity: 1, weight: 1 },
    { name: "Spiral Augment", quantity: 1, weight: 2 },
    { name: "Critical Augment", quantity: 1, weight: 2 },
    { name: "Charging Augment", quantity: 1, weight: 2 },
    { name: "Flaring Augment", quantity: 1, weight: 2 }
]);

// DEFAULT WORLD PART 4

const defaultWorldPartFourEnemyLootTable = genLootTable([
    { name: "Life Essence", quantity: 1, weight: 200 },
    { name: "God Plate", quantity: 1, weight: 1 },
    { name: "Balance Ruby", quantity: 1, weight: 1 },
    { name: "God Cape", quantity: 1, weight: 1 },
    { name: "God Gloves", quantity: 1, weight: 1 },
    { name: "Spiral Augment", quantity: 1, weight: 2 },
    { name: "Critical Augment", quantity: 1, weight: 2 },
    { name: "Charging Augment", quantity: 1, weight: 2 },
    { name: "Flaring Augment", quantity: 1, weight: 2 }
]);

// DESERT WORLD PART 2

const desertWorldPartTwoEnemyLootTable = genLootTable([
    { name: "Life Essence", quantity: 1, weight: 200 },
    { name: "Truesilver Greathammer", quantity: 1, weight: 1 },
    { name: "Order Sapphire", quantity: 1, weight: 1 },
    { name: "Truesilver Greataxe", quantity: 1, weight: 1 },
    { name: "Truesilver Greatsword", quantity: 1, weight: 1 },
    { name: "Spiral Augment", quantity: 1, weight: 2 },
    { name: "Critical Augment", quantity: 1, weight: 2 },
    { name: "Charging Augment", quantity: 1, weight: 2 },
    { name: "Flaring Augment", quantity: 1, weight: 2 }
]);

// TITAN BOSS WORLD

const bulwarkTitanLootTable = genLootTable([
    { name: "Titan Essence", quantity: 1, weight: 47 },
    { name: "Titanic Bulwark", quantity: 1, weight: 2 },
    { name: "Titanic Smasher", quantity: 1, weight: 1 },
]);