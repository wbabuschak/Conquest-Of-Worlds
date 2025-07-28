// DEFAULT WORLD

const commonThiefLootTable = new LootTable([
    Item.createItem("Epic Sword", 1),
    Item.createItem("Deadly Poison", 1),
    Item.createItem("Gold Coin", 3),
    Item.createItem("Gold Coin", 2),
    Item.createItem("Gold Coin", 1),
    Item.createItem("Lame Rocks", 4),
    Item.createItem("Lame Rocks", 2),
    Item.createItem("Lame Rocks", 1),
    Item.createItem("Common Dagger", 1),
    Item.createItem("Dirty Shoes", 1)
    ],[1,2,4,6,8,10,14,16,20,4]
);

const dirtyGoblinLootTable = new LootTable([
    Item.createItem("Rotten Food", 1),
    Item.createItem("Gold Coin", 4),
    Item.createItem("Gold Coin", 2),
    Item.createItem("Lame Rocks", 4),
    Item.createItem("Lame Rocks", 2),
    Item.createItem("Lame Rocks", 1),
    Item.createItem("Common Dagger", 1),
    Item.createItem("Dirty Shoes", 1)
    ],[2,6,8,10,14,16,4,5]
);

const mysteriousVillainLootTable = new LootTable([
    Item.createItem("Gold Coin", 8),
    Item.createItem("Gold Coin", 6),
    Item.createItem("Gold Coin", 4),
    Item.createItem("Gold Coin", 3),
    Item.createItem("Dirty Shoes", 1),
    Item.createItem("Ring of Slaying", 1),
    Item.createItem("Spectral Cowl", 1)
    ],[5,5,5,5,4,2,1]
);

// SPIRIT WORLD

const spectralFiendLootTable = new LootTable([
    Item.createItem("Ectoplasm", 6),
    Item.createItem("Ectoplasm", 12),
    Item.createItem("Ectoplasm", 18),
    Item.createItem("Ring of Slaying", 1),
    Item.createItem("Spectral Cowl", 1),
    Item.createItem("Mummy Wraps", 1),
    Item.createItem("Skullstompers", 1)
    ],[66,64,62,2,2,2,1]
);

const spiritEaterLootTable = new LootTable([
    Item.createItem("Ectoplasm", 6),
    Item.createItem("Gold Coin", 1),
    Item.createItem("Bone Chip", 1),
    Item.createItem("Fearsome Kris", 1),
    Item.createItem("Ring of Slaying", 1),
    Item.createItem("Skullstompers", 1)
    ],[36,14,4,2,2,1]
);

const ghastlyHorrorLootTable = new LootTable([
    Item.createItem("Ectoplasm", 6),
    Item.createItem("Brain Slime", 2),
    Item.createItem("Brain Slime", 1),
    Item.createItem("Bone Chip", 1),
    Item.createItem("Mummy Wraps", 1),
    Item.createItem("Ring of Slaying", 1),
    Item.createItem("Skullstompers", 1)
    ],[62,8,6,4,2,2,1]
);

// DESERT WORLD

const desertWraithLootTable = new LootTable([
    Item.createItem("Gold Coin", 39),
    Item.createItem("Gold Coin", 29),
    Item.createItem("Gold Coin", 17),
    Item.createItem("Gold Coin", 13),
    Item.createItem("Cloth Scrap", 13),
    Item.createItem("Cloth Scrap", 11),
    Item.createItem("Cloth Scrap", 7),
    Item.createItem("Cloth Scrap", 5),
    Item.createItem("Drained Essence", 1),
    Item.createItem("Havoc Blade", 1),
    Item.createItem("Haunting Guise", 1),
    ],[3,5,7,9,6,10,14,18,2,1,1]
);

const bileSpitterLootTable = new LootTable([
    Item.createItem("Bug Part", 13),
    Item.createItem("Bug Part", 11),
    Item.createItem("Chitinous Plate", 1),
    Item.createItem("Chitinous Plate", 2),
    Item.createItem("Vitriol", 2),
    Item.createItem("Venomous Gland", 1),
    Item.createItem("Ring of Venom", 1)
    ],[64,32,16,8,4,2,1]
);

const desertZealotLootTable = new LootTable([
    Item.createItem("Cloth Scrap", 12),
    Item.createItem("Cloth Scrap", 13),
    Item.createItem("Cloth Scrap", 14),
    Item.createItem("Gold Coin", 13),
    Item.createItem("Gold Coin", 23),
    Item.createItem("Gold Coin", 33),
    Item.createItem("Blasting Wand", 1),
    Item.createItem("Killer Gloves", 1),
    Item.createItem("Water Jar", 1),
    Item.createItem("Stormstrike", 1)
    ],[21,19,17,13,11,7,5,4,2,1]
);

const sandstoneGolemLootTable = new LootTable([
    Item.createItem("Lame Rocks", 9),
    Item.createItem("Cracked Gem", 1),
    Item.createItem("Sandstone Brick", 1),
    Item.createItem("Broken Circuitry", 5),
    Item.createItem("Broken Circuitry", 4),
    Item.createItem("Broken Circuitry", 3),
    Item.createItem("Sandstone Brick", 2),
    Item.createItem("Token of Faith", 1),
    Item.createItem("Gauntlets of Sheer Force", 1),
    ],[8,10,12,6,8,10,4,2,1]
);

// HELL WORLD

const blazingBovineLootTable = new LootTable([
    Item.createItem("Weary Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Bovine", 1),
    Item.createItem("Wraps of Temptation", 1),
    Item.createItem("Stone of James", 1)
    ],[12,12,12,12,3,1,1]
);

const infernalInsectLootTable = new LootTable([
    Item.createItem("Weary Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Insect", 1),
    Item.createItem("Crown of the Corpseeater", 1),
    Item.createItem("Blade of One Thousand Hooks", 1)
    ],[12,12,12,12,3,1,1]
);

const sinfulSuccubusLootTable = new LootTable([
    Item.createItem("Weary Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Succubus", 1),
    Item.createItem("Wraps of Temptation", 1),
    Item.createItem("Promise Ring", 1)
    ],[12,12,12,12,3,1,1]
);

const fieryFangtoothLootTable = new LootTable([
    Item.createItem("Weary Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Fangtooth", 1),
    Item.createItem("Tooth Necklace", 1),
    Item.createItem("Treads of Crushing Depths", 1)
    ],[12,12,12,12,3,1,1]
);

const dreadfulDinoLootTable = new LootTable([
    Item.createItem("Weary Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Dino", 1),
    Item.createItem("Tooth Necklace", 1),
    Item.createItem("Fossil Blade", 1)
    ],[12,12,12,12,3,1,1]
);

const vileVultureLootTable = new LootTable([
    Item.createItem("Weary Soul", 6),
    Item.createItem("Repressed Memory", 6),
    Item.createItem("Broken Dream", 6),
    Item.createItem("Shattered Innocence", 6),
    Item.createItem("Memento of the Vulture", 1),
    Item.createItem("Crown of the Corpseeater", 1),
    Item.createItem("Emesis Amulet", 1)
    ],[12,12,12,12,3,1,1]
);

// ICE WORLD

const iceologerLootTable = new LootTable([
    Item.createItem("Fur Scrap", 7),
    Item.createItem("Fur Scrap", 5),
    Item.createItem("Fur Scrap", 3),
    Item.createItem("Magical Essence", 3),
    Item.createItem("Gold Coin", 144),
    Item.createItem("Gold Coin", 73),
    Item.createItem("Ice Bear Fur Shawl", 1),
    Item.createItem("Frozen Gemstone Amulet", 1)
    ],[6,9,12,9,9,12,1,1]
);

const spookyRevenantLootTable = new LootTable([
    Item.createItem("Weary Soul", 1),
    Item.createItem("Repressed Memory", 1),
    Item.createItem("Broken Dream", 1),
    Item.createItem("Shattered Innocence", 1),
    Item.createItem("Terror Mask", 1)
    ],[15,15,15,15,1]
);

const iceBearLootTable = new LootTable([
    Item.createItem("Fur Scrap", 10),
    Item.createItem("Fur Scrap", 12),
    Item.createItem("Fur Scrap", 14),
    Item.createItem("Broken Nail", 1),
    Item.createItem("Ice Bear Paw Mitts", 1),
    Item.createItem("Ice Bear Fur Shawl", 1),
    Item.createItem("Nature's Wrath", 1)
    ],[30,20,10,4,3,3,1]
);

const animatedWeaponLootTable = new LootTable([
    Item.createItem("Broken Blade", 1),
    Item.createItem("Magical Essence", 2),
    Item.createItem("Magical Essence", 4),
    Item.createItem("Magical Essence", 5),
    Item.createItem("Magical Essence", 7),
    Item.createItem("Mote of Arcane Power", 1)
    ],[144,30,25,20,15,1]
);

const foulNecromancerLootTable = new LootTable([
    Item.createItem("Cloth Scrap", 20),
    Item.createItem("Cloth Scrap", 17),
    Item.createItem("Cloth Scrap", 15),
    Item.createItem("Gold Coin", 244),
    Item.createItem("Gold Coin", 151),
    Item.createItem("Magical Essence", 3),
    Item.createItem("Magical Essence", 5),
    Item.createItem("Bone Chip", 1),
    Item.createItem("Ice Bear Fur Shawl", 1),
    Item.createItem("Dread Loop", 1)
    ],[12,18,24,30,39,18,24,6,2,1]
);

// DRAGON SWAMP WORLD

const juvenileDrakeLootTable = new LootTable([
    Item.createItem("Dragon Scale", 5),
    Item.createItem("Dragon Scale", 4),
    Item.createItem("Dragon Scale", 3),
    Item.createItem("Dragon Scale", 2),
    Item.createItem("Dragon Scale", 1),
    Item.createItem("Sticky Dragon Mucus", 1),
    Item.createItem("Baby Dragon Fang", 1),
    Item.createItem("Second Seal", 1),
    ],[4,8,12,16,20,2,1,1]
);

const adolescentDrakeLootTable = new LootTable([
    Item.createItem("Dragon Scale", 7),
    Item.createItem("Dragon Scale", 6),
    Item.createItem("Dragon Scale", 5),
    Item.createItem("Dragon Scale", 4),
    Item.createItem("Dragon Scale", 3),
    Item.createItem("Gold Coin", 541),
    Item.createItem("Gold Coin", 610),
    Item.createItem("Sticky Dragon Mucus", 1),
    Item.createItem("Juvenile Dragon Talon", 1),
    Item.createItem("Second Seal", 1),
    ],[4,8,12,16,20,10,20,2,1,1]
);

const greenDrakeLootTable = new LootTable([
    Item.createItem("Dragon Scale", 10),
    Item.createItem("Dragon Scale", 9),
    Item.createItem("Dragon Scale", 8),
    Item.createItem("Dragon Scale", 7),
    Item.createItem("Dragon Scale", 6),
    Item.createItem("Gold Coin", 813),
    Item.createItem("Gold Coin", 910),
    Item.createItem("Green Dragonscale Cape", 1),
    Item.createItem("Dragon Mucus Tincture", 1),
    Item.createItem("Second Seal", 1),
    ],[4,8,12,16,20,10,20,2,1,1]
);

const blackDrakeLootTable = new LootTable([
    Item.createItem("Dragon Scale", 11),
    Item.createItem("Dragon Scale", 10),
    Item.createItem("Dragon Scale", 9),
    Item.createItem("Dragon Scale", 8),
    Item.createItem("Dragon Scale", 7),
    Item.createItem("Gold Coin", 860),
    Item.createItem("Gold Coin", 990),
    Item.createItem("Black Dragonscale Cape", 1),
    Item.createItem("Dragon Mucus Tincture", 1),
    Item.createItem("Second Seal", 1),
    ],[4,8,12,16,20,10,20,2,1,1]
);

const blueDrakeLootTable = new LootTable([
    Item.createItem("Dragon Scale", 12),
    Item.createItem("Dragon Scale", 11),
    Item.createItem("Dragon Scale", 10),
    Item.createItem("Dragon Scale", 9),
    Item.createItem("Dragon Scale", 8),
    Item.createItem("Gold Coin", 900),
    Item.createItem("Gold Coin", 1031),
    Item.createItem("Blue Dragonscale Cape", 1),
    Item.createItem("Dragon Mucus Tincture", 1),
    Item.createItem("Second Seal", 1),
    ],[4,8,12,16,20,10,20,2,1,1]
);

const redDrakeLootTable = new LootTable([
    Item.createItem("Dragon Scale", 13),
    Item.createItem("Dragon Scale", 12),
    Item.createItem("Dragon Scale", 11),
    Item.createItem("Dragon Scale", 10),
    Item.createItem("Dragon Scale", 9),
    Item.createItem("Gold Coin", 919),
    Item.createItem("Gold Coin", 1108),
    Item.createItem("Red Dragonscale Cape", 1),
    Item.createItem("Dragon Mucus Tincture", 1),
    Item.createItem("Second Seal", 1),
    ],[4,8,12,16,20,10,20,2,1,1]
);

const giantAnacondaLootTable = new LootTable([
    Item.createItem("Grody Man-meat", 7),
    Item.createItem("Grody Man-meat", 3),
    Item.createItem("Grody Man-meat", 2),
    Item.createItem("Gold Coin", 101),
    Item.createItem("Gold Coin", 203),
    Item.createItem("Gold Coin", 341),
    Item.createItem("Gold Coin", 391),
    Item.createItem("Gold Coin", 431),
    Item.createItem("Gold Coin", 781),
    Item.createItem("Gold Coin", 919),
    Item.createItem("Gold Coin", 1108),
    Item.createItem("Rotten Meat", 1),
    Item.createItem("Snake-eye Chain", 1),
    Item.createItem("Second Seal", 1),
    Item.createItem("Platinum Coin", 1),
    ],[4,8,12,13,12,11,10,9,8,7,6,2,1,1,1]
);

const vaingloriousDragonHunter = new LootTable([
    Item.createItem("Dragon Scale", 4),
    Item.createItem("Dragon Scale", 3),
    Item.createItem("Dragon Scale", 2),
    Item.createItem("Gold Coin", 354),
    Item.createItem("Gold Coin", 300),
    Item.createItem("Dragonheart Piercer", 1),
    Item.createItem("Devastating Crossbow", 1),
    Item.createItem("Platinum Coin", 1),
    Item.createItem("Second Seal", 1),
    ],[4,8,12,16,20,6,3,1,1]
);

// GOLD WORLD

const bossGoblinLootTable = new LootTable([
    Item.createItem("Gold Coin", 1770),
    Item.createItem("Gold Coin", 2080),
    Item.createItem("Broken Rubber Band", 1),
    Item.createItem("Ring of Greed", 1),
    Item.createItem("Boss Goblin's Gilded Fountain Pen", 1),
    Item.createItem("First Seal", 1),
    ],[50,39,8,2,1,1]
);

const goblinLoanmasterLootTable = new LootTable([
    Item.createItem("Gold Coin", 1420),
    Item.createItem("Gold Coin", 1790),
    Item.createItem("Broken Rubber Band", 1),
    Item.createItem("Ring of Greed", 1),
    Item.createItem("Goblin Ledger", 1),
    Item.createItem("First Seal", 1),
    ],[50,39,8,2,1,1]
);

const goblinHeadcrackerLootTable = new LootTable([
    Item.createItem("Gold Coin", 1020),
    Item.createItem("Gold Coin", 1330),
    Item.createItem("Broken Tire Iron", 1),
    Item.createItem("Ring of Greed", 1),
    Item.createItem("Headcracker Mitts", 1),
    Item.createItem("First Seal", 1),
    ],[50,39,8,2,1,1]
);

const goldGoblinGolemLootTable = new LootTable([
    Item.createItem("Gold Coin", 2040),
    Item.createItem("Gold Coin", 2680),
    Item.createItem("Gold Coin", 3120),
    Item.createItem("Gold Coin", 3810),
    Item.createItem("Gold Coin", 4250),
    Item.createItem("Gold Coin", 4600),
    Item.createItem("Gold Coin", 6400),
    Item.createItem("Gold Coin", 9800),
    Item.createItem("First Seal", 1),
    ],[50,45,40,35,30,25,10,5,1]
);

// DEFAULT WORLD PART 2

const uncommonBanditLootTable = new LootTable([
    Item.createItem("Epic Sword", 1),
    Item.createItem("Deadly Poison", 1),
    Item.createItem("Gold Coin", 12),
    Item.createItem("Gold Coin", 8),
    Item.createItem("Gold Coin", 4),
    Item.createItem("Lame Rocks", 16),
    Item.createItem("Lame Rocks", 8),
    Item.createItem("Lame Rocks", 4),
    Item.createItem("Devious Dagger", 1),
    Item.createItem("Ratkickers", 1)
    ],[1,2,4,6,8,10,14,16,2,41]
);

const filthyGoblinLootTable = new LootTable([
    Item.createItem("Rotten Food", 2),
    Item.createItem("Gold Coin", 16),
    Item.createItem("Gold Coin", 8),
    Item.createItem("Lame Rocks", 16),
    Item.createItem("Lame Rocks", 8),
    Item.createItem("Lame Rocks", 4),
    Item.createItem("Devious Dagger", 1),
    Item.createItem("Ratkickers", 1),
    Item.createItem("Greedy Goldgrubber Grips",1)
    ],[2,6,8,10,14,16,2,1,1]
);

const overgrownVoleLootTable = new LootTable([
    Item.createItem("Fur Scrap", 2),
    Item.createItem("Fur Scrap", 1),
    Item.createItem("Bitter Morsel", 1),
    Item.createItem("Big Tooth", 1),
    Item.createItem("Pilfered Shiny", 1),
    Item.createItem("Greedy Goldgrubber Grips",1)
    ],[12,24,7,2,1,1]
);

// SPECIAL SPAWN

const treasureGoblinLootTable = new LootTable([
    Item.createItem("Gold Coin", 1),
    Item.createItem("Gold Coin", 10),
    Item.createItem("Gold Coin", 100),
    Item.createItem("Gold Coin", 1000),
    Item.createItem("Gold Cloak", 1),
    ],[80,40,20,10,1]
);

// ARCANE WORLD

const keeperOfSealsLootTable = new LootTable([
    Item.createItem("Magical Essence", 13),
    Item.createItem("Magical Essence", 15),
    Item.createItem("Magical Essence", 17),
    Item.createItem("Magical Essence", 19),
    Item.createItem("Third Seal", 1),
    Item.createItem("Fourth Seal", 1),
    Item.createItem("Fifth Seal", 1),
    Item.createItem("Sixth Seal", 1),
    Item.createItem("Seventh Seal", 1),
    Item.createItem("Helmet of Arcane Protection", 1),
    Item.createItem("Vest of Arcane Devotion", 1),
    Item.createItem("Gauntlets of Arcane Postmultiplication", 1),
    Item.createItem("Treads of Arcane Stabilization", 1),
    Item.createItem("Staff of Arcane Domination", 1),
    ],[120,100,80,60,4,4,4,4,4,1,1,1,1,1]
);

// ARCANE WORLD PART 2

const arcaneSoulStitcherLootTable = new LootTable([
    Item.createItem("Arcane Star Jar", 1),
    Item.createItem("Magical Essence", 15),
    Item.createItem("Magical Essence", 17),
    Item.createItem("Magical Essence", 19),
    Item.createItem("Gauntlets of Arcane Postmultiplication", 1),
    Item.createItem("Arcane Phylactery", 1),
    ],[2,50,40,30,1,1]
);

const arcaneKnightLootTable = new LootTable([
    Item.createItem("Arcane Star Jar", 1),
    Item.createItem("Magical Essence", 17),
    Item.createItem("Magical Essence", 19),
    Item.createItem("Magical Essence", 21),
    Item.createItem("Helmet of Arcane Protection", 1),
    Item.createItem("Arcane Shield", 1),
    ],[2,50,40,30,1,1]
);

const arcaneDevoteeLootTable = new LootTable([
    Item.createItem("Arcane Star Jar", 1),
    Item.createItem("Magical Essence", 13),
    Item.createItem("Magical Essence", 15),
    Item.createItem("Magical Essence", 17),
    Item.createItem("Vest of Arcane Devotion", 1),
    Item.createItem("Arcane Iris", 1),
    ],[2,50,40,30,1,1]
);

const arcaneBattlemageLootTable = new LootTable([
    Item.createItem("Arcane Star Jar", 1),
    Item.createItem("Magical Essence", 15),
    Item.createItem("Magical Essence", 17),
    Item.createItem("Magical Essence", 19),
    Item.createItem("Staff of Arcane Domination", 1),
    Item.createItem("Arcane Focusing Gem", 1),
    ],[2,50,40,30,1,1]
);

const arcaneGolemLootTable = new LootTable([
    Item.createItem("Arcane Star Jar", 1),
    Item.createItem("Magical Essence", 19),
    Item.createItem("Magical Essence", 21),
    Item.createItem("Magical Essence", 23),
    Item.createItem("Treads of Arcane Stabilization", 1),
    Item.createItem("Arcane Circuitboard", 1),
    ],[2,50,40,30,1,1]
);

// SPACE WORLD

const moonRockGolemLootTable = new LootTable([
    Item.createItem("Useless Moon Rock", 7),
    Item.createItem("Useless Moon Rock", 6),
    Item.createItem("Useless Moon Rock", 5),
    Item.createItem("Useless Moon Rock", 4),
    Item.createItem("Useless Moon Rock", 3),
    Item.createItem("Useless Moon Rock", 2),
    Item.createItem("Useless Moon Rock", 1),
    Item.createItem("Moon Blasting Super Smashers", 1),
    Item.createItem("Nebula Gemstone", 1),
    ],[4,8,12,16,20,24,28,1,1]
);

const livingCometLootTable = new LootTable([
    Item.createItem("Useless Moon Rock", 7),
    Item.createItem("Useless Moon Rock", 6),
    Item.createItem("Useless Moon Rock", 5),
    Item.createItem("Useless Moon Rock", 4),
    Item.createItem("Useless Moon Rock", 3),
    Item.createItem("Useless Moon Rock", 2),
    Item.createItem("Useless Moon Rock", 1),
    Item.createItem("Astral Hammer", 1),
    Item.createItem("Nebula Gemstone", 1),
    ],[4,8,12,16,20,24,28,1,1]
);

const greyLaserAlienLootTable = new LootTable([
    Item.createItem("Broken Laser Gun", 1),
    Item.createItem("Alien Sludge", 1),
    Item.createItem("Universal Credit", 1),
    Item.createItem("Grey Laser Blaster", 1),
    Item.createItem("Laser Gigawatt Charger", 1),
    ],[78,12,12,3,1]
);

const greenLaserAlienLootTable = new LootTable([
    Item.createItem("Broken Laser Gun", 1),
    Item.createItem("Alien Sludge", 1),
    Item.createItem("Universal Credit", 1),
    Item.createItem("Green Laser Blaster", 1),
    Item.createItem("Laser Gigawatt Charger", 1),
    ],[78,12,12,3,1]
);

const uglyBugAlienLootTable = new LootTable([
    Item.createItem("Bug Part", 101),
    Item.createItem("Alien Sludge", 1),
    Item.createItem("Universal Credit", 1),
    Item.createItem("Freaky Bug Eye", 1),
    Item.createItem("Laser Gigawatt Charger", 1),
    ],[78,12,12,3,1]
);

const superstellarSpaceRaiderLootTable = new LootTable([
    Item.createItem("Random Alien Junk", 1),
    Item.createItem("Freaky Moon Boots", 1),
    Item.createItem("Keys to the Galaxy", 1),
    Item.createItem("Alien Sludge", 1),
    Item.createItem("Universal Credit", 1),
    Item.createItem("Universal Credit", 2),
    Item.createItem("Laser-powered Goblin Smasher", 1),
    Item.createItem("Laser Gigawatt Charger", 1),
    ],[50,23,15,13,10,4,1,1]
);

// VOLCANO PLANET WORLD

const obsidianSphereLootTable = new LootTable([
    Item.createItem("Rapidly Cooled Rock", 1),
    Item.createItem("Rapidly Cooled Rock", 2),
    Item.createItem("Rapidly Cooled Rock", 3),
    Item.createItem("Trace Metal Ore", 1),
    Item.createItem("Universal Credit", 4),
    Item.createItem("The Obsidian Band", 1),
    Item.createItem("Volcano Badge", 1),
    Item.createItem("Deep Black Mask", 1),
    ],[50,25,15,5,3,2,1,1]
);

const lavaScorpionLootTable = new LootTable([
    Item.createItem("Molten Shell Fragment", 1),
    Item.createItem("Molten Shell Fragment", 2),
    Item.createItem("Molten Shell Fragment", 3),
    Item.createItem("Molted Shell Fragment", 1),
    Item.createItem("Universal Credit", 4),
    Item.createItem("Amulet of Vitriolic Withering", 1),
    Item.createItem("Volcano Badge", 1),
    Item.createItem("Lava Scorpion Exoskeleton", 1),
    ],[50,25,15,5,3,2,1,1]
);

const magmaDrinkerLootTable = new LootTable([
    Item.createItem("Rapidly Cooled Rock", 2),
    Item.createItem("Rapidly Cooled Rock", 3),
    Item.createItem("Rapidly Cooled Rock", 4),
    Item.createItem("Permineralization Skull Fragment", 1),
    Item.createItem("Universal Credit", 4),
    Item.createItem("Horn of Doom", 1),
    Item.createItem("Volcano Badge", 1),
    Item.createItem("Sulfur Respirator", 1),
    ],[50,25,15,5,3,2,1,1]
);

const basaltGolemLootTable = new LootTable([
    Item.createItem("Rapidly Cooled Rock", 3),
    Item.createItem("Rapidly Cooled Rock", 4),
    Item.createItem("Rapidly Cooled Rock", 5),
    Item.createItem("Basaltic Fragment", 1),
    Item.createItem("Universal Credit", 4),
    Item.createItem("Signet of Trembling", 1),
    Item.createItem("Volcano Badge", 1),
    Item.createItem("Destroyer Greaves", 1),
    ],[50,25,15,5,3,2,1,1]
);

const fieryDreadbeastLootTable = new LootTable([
    Item.createItem("Molten Shell Fragment", 1),
    Item.createItem("Molten Shell Fragment", 2),
    Item.createItem("Molten Shell Fragment", 3),
    Item.createItem("Dripping Fang", 1),
    Item.createItem("Universal Credit", 4),
    Item.createItem("Steps of Worldshaking", 1),
    Item.createItem("Volcano Badge", 1),
    Item.createItem("Dreadbeast Trophy", 1),
    ],[100,50,30,10,6,4,2,1]
);

const moltenGiantLootTable = new LootTable([
    Item.createItem("Rapidly Cooled Rock", 4),
    Item.createItem("Rapidly Cooled Rock", 5),
    Item.createItem("Rapidly Cooled Rock", 6),
    Item.createItem("Eye of Molten Giant", 1),
    Item.createItem("Universal Credit", 4),
    Item.createItem("Heart of Molten Giant", 1),
    Item.createItem("Volcano Badge", 1),
    Item.createItem("Kor'As, Obliteration Blade", 1),
    ],[50,25,15,5,3,2,1,1]
);

// PLEASURE WORLD

const underworldGangsterLootTable = new LootTable([
    Item.createItem("Cloth Scrap", 113),
    Item.createItem("Cloth Scrap", 135),
    Item.createItem("Cloth Scrap", 190),
    Item.createItem("Universal Credit", 6),
    Item.createItem("Reworked Goblin Tech", 1),
    Item.createItem("Mysterious Pleasure Juice", 1),
    Item.createItem("Badass Cloak", 1),
    ],[50,25,15,3,2,1,1]
);

const uncompromisingHedonistLootTable = new LootTable([
    Item.createItem("Spoils of the Flesh", 1),
    Item.createItem("Spoils of the Flesh", 2),
    Item.createItem("Spoils of the Flesh", 3),
    Item.createItem("Secret Tool", 1),
    Item.createItem("Universal Credit", 6),
    Item.createItem("Flesh Den Entry Token", 1),
    Item.createItem("Mysterious Pleasure Juice", 1),
    Item.createItem("Overtuned Grippers", 1),
    ],[50,25,15,5,3,2,1,1]
);

const alienPimpLootTable = new LootTable([
    Item.createItem("Spoils of the Flesh", 2),
    Item.createItem("Spoils of the Flesh", 3),
    Item.createItem("Spoils of the Flesh", 4),
    Item.createItem("Secret Tool", 1),
    Item.createItem("Universal Credit", 6),
    Item.createItem("Off-world Beast Fur Shawl", 1),
    Item.createItem("Mysterious Pleasure Juice", 1),
    Item.createItem("Dual-purpose Cane", 1),
    ],[50,25,15,5,3,2,1,1]
);

const subterraneanLootTable = new LootTable([
    Item.createItem("Neutralized Anti-matter", 3),
    Item.createItem("Neutralized Anti-matter", 4),
    Item.createItem("Neutralized Anti-matter", 5),
    Item.createItem("Sigil of the Survivor", 1),
    Item.createItem("Universal Credit", 6),
    Item.createItem("Ambush Sensor", 1),
    Item.createItem("Mysterious Pleasure Juice", 1),
    Item.createItem("Hyper Cutter", 1),
    ],[50,25,15,5,3,2,1,1]
);

const veiledDreadbeastLootTable = new LootTable([
    Item.createItem("Essence of Twisting Nether", 31),
    Item.createItem("Essence of Twisting Nether", 37),
    Item.createItem("Essence of Twisting Nether", 41),
    Item.createItem("Shadow Fang", 1),
    Item.createItem("Universal Credit", 6),
    Item.createItem("Universal Credit", 8),
    Item.createItem("Cape of Cunning", 1),
    Item.createItem("Mysterious Pleasure Juice", 1),
    Item.createItem("Dreadbeast Trophy", 1),
    ],[100,50,30,10,6,3,4,2,1]
);

const chaosInfiltratorLootTable = new LootTable([
    Item.createItem("Essence of Twisting Nether", 41),
    Item.createItem("Essence of Twisting Nether", 43),
    Item.createItem("Essence of Twisting Nether", 47),
    Item.createItem("Chaos Blade", 1),
    Item.createItem("Universal Credit", 6),
    Item.createItem("Universal Credit", 8),
    Item.createItem("Chaos Vambrace", 1),
    Item.createItem("Mysterious Pleasure Juice", 1),
    Item.createItem("Ak'Olp, Incineration Wand", 1),
    ],[50,25,15,5,3,3,2,1,1]
);

// A.M. WORLD

const clangingMechanotentacleLootTable = new LootTable([
    Item.createItem("Random Mechanojunk", 1),
    Item.createItem("Random Mechanojunk", 2),
    Item.createItem("Random Mechanojunk", 3),
    Item.createItem("Perpetual Dynamo", 1),
    Item.createItem("Universal Credit", 20),
    Item.createItem("Strangler Mitts", 1),
    Item.createItem("Electric Eye", 1),
    Item.createItem("Repurposed Digital Gauge", 1),
    ],[50,25,15,5,3,2,1,1]
);

const razorSpitterLootTable = new LootTable([
    Item.createItem("Random Mechanojunk", 2),
    Item.createItem("Random Mechanojunk", 3),
    Item.createItem("Random Mechanojunk", 4),
    Item.createItem("Perpetual Dynamo", 1),
    Item.createItem("Universal Credit", 20),
    Item.createItem("Slicing Gloves", 1),
    Item.createItem("Electric Eye", 1),
    Item.createItem("Damaged Exosuit", 1),
    ],[50,25,15,5,3,2,1,1]
);

const resurrectedMeatSludgeLootTable = new LootTable([
    Item.createItem("Destroyed Flesh", 2),
    Item.createItem("Destroyed Flesh", 3),
    Item.createItem("Destroyed Flesh", 4),
    Item.createItem("Still-beating Heart", 1),
    Item.createItem("Universal Credit", 20),
    Item.createItem("Inexplicable Ribs", 1),
    Item.createItem("Electric Eye", 1),
    Item.createItem("Butcher's Apron", 1),
    ],[50,25,15,5,3,2,1,1]
);

const warpedManLootTable = new LootTable([
    Item.createItem("Destroyed Flesh", 3),
    Item.createItem("Destroyed Flesh", 4),
    Item.createItem("Destroyed Flesh", 5),
    Item.createItem("Soul Remnant", 1),
    Item.createItem("Universal Credit", 20),
    Item.createItem("Symbol of Everlasting Humanity", 1),
    Item.createItem("Electric Eye", 1),
    Item.createItem("Ring of the Unbroken Stare", 1),
    ],[50,25,15,5,3,2,1,1]
);

const hairyDreadbeastLootTable = new LootTable([
    Item.createItem("Pile of Beast Fur", 31),
    Item.createItem("Pile of Beast Fur", 37),
    Item.createItem("Pile of Beast Fur", 41),
    Item.createItem("Brutal Fang", 1),
    Item.createItem("Universal Credit", 20),
    Item.createItem("Universal Credit", 24),
    Item.createItem("Perfect Diamond Amulet", 1),
    Item.createItem("Electric Eye", 1),
    Item.createItem("Dreadbeast Trophy", 1),
    ],[100,50,30,10,6,3,4,2,1]
);

const amPlaythingLootTable = new LootTable([
    Item.createItem("Broken Circuitry", 111),
    Item.createItem("Broken Circuitry", 133),
    Item.createItem("Broken Circuitry", 177),
    Item.createItem("Cage of Inexorable Torment", 1),
    Item.createItem("Universal Credit", 10),
    Item.createItem("Universal Credit", 12),
    Item.createItem("Tabis of Inexorable Torment", 1),
    Item.createItem("Electric Eye", 1),
    Item.createItem("Gar'Ahan, Fleshstripper", 1),
    ],[50,25,15,5,3,3,2,1,1]
);

// STELLAR REMNANT WORLD

const impactSurvivorLootTable = new LootTable([
    Item.createItem("Space Junk", 1),
    Item.createItem("Space Junk", 2),
    Item.createItem("Space Junk", 3),
    Item.createItem("Element Collector", 1),
    Item.createItem("Universal Credit", 14),
    Item.createItem("Stolen Hope", 1),
    Item.createItem("Collapse Clasp", 1),
    Item.createItem("Degenerate Star Coat", 1),
    ],[50,25,15,5,3,2,1,1]
);

const ionBreatherLootTable = new LootTable([
    Item.createItem("Solar Debris", 1),
    Item.createItem("Solar Debris", 2),
    Item.createItem("Solar Debris", 3),
    Item.createItem("Element Collector", 1),
    Item.createItem("Universal Credit", 14),
    Item.createItem("Ion Chimes", 1),
    Item.createItem("Collapse Clasp", 1),
    Item.createItem("Degenerate Star Hood", 1),
    ],[50,25,15,5,3,2,1,1]
);

const plasmaJunkerLootTable = new LootTable([
    Item.createItem("Solar Debris", 2),
    Item.createItem("Solar Debris", 3),
    Item.createItem("Solar Debris", 4),
    Item.createItem("Element Collector", 1),
    Item.createItem("Universal Credit", 14),
    Item.createItem("Anti-matter Aegis", 1),
    Item.createItem("Collapse Clasp", 1),
    Item.createItem("Degenerate Star Belt", 1),
    ],[50,25,15,5,3,2,1,1]
);

const poststellarScreamerLootTable = new LootTable([
    Item.createItem("Solar Debris", 3),
    Item.createItem("Solar Debris", 4),
    Item.createItem("Solar Debris", 5),
    Item.createItem("Astral Essence", 1),
    Item.createItem("Universal Credit", 14),
    Item.createItem("Impossibly Dense Chain", 1),
    Item.createItem("Collapse Clasp", 1),
    Item.createItem("Degenerate Star Boots", 1),
    ],[50,25,15,5,3,2,1,1]
);

const superDreadbeastLootTable = new LootTable([
    Item.createItem("Solar Debris", 4),
    Item.createItem("Solar Debris", 5),
    Item.createItem("Solar Debris", 6),
    Item.createItem("Supermassive Fang", 1),
    Item.createItem("Universal Credit", 14),
    Item.createItem("Universal Credit", 16),
    Item.createItem("Magnetar Pendant", 1),
    Item.createItem("Collapse Clasp", 1),
    Item.createItem("Dreadbeast Trophy", 1),
    ],[100,50,30,10,6,3,4,2,1]
);

const studentofSyzygyLootTable = new LootTable([
    Item.createItem("Solar Debris", 5),
    Item.createItem("Solar Debris", 6),
    Item.createItem("Solar Debris", 7),
    Item.createItem("Cape of the White Dwarf", 1),
    Item.createItem("Universal Credit", 14),
    Item.createItem("Universal Credit", 16),
    Item.createItem("Cape of the Neutron Star", 1),
    Item.createItem("Collapse Clasp", 1),
    Item.createItem("Degenerate Star Tome", 1),
    ],[50,25,15,5,3,3,2,1,1]
);

// MYTH WORLD

const mythEnemyLootTable = new LootTable([
    Item.createItem("Myth Essence", 1),
    Item.createItem("Greater Myth Essence", 1),
    Item.createItem("Aura Scanner", 1),
    Item.createItem("Gauntlets of Transcendent Faith", 1),
    Item.createItem("Shard of Light", 1),
    Item.createItem("Shard of Darkness", 1),
    Item.createItem("Symbol of Trinity", 1),
    Item.createItem("Singularity of Purpose", 1),
    Item.createItem("Blazer of the Screaming Eagle", 1),
    ],[75,15,5,3,2,1,1,1,1,1]
);

// DEFAULT WORLD PART 3

const defaultWorldPartThreeEnemyLootTable = new LootTable([
    Item.createItem("Life Essence", 1),
    Item.createItem("God Cinch", 1),
    Item.createItem("Chaos Emerald", 1),
    Item.createItem("God Bulwark", 1),
    Item.createItem("God Helm", 1),
    Item.createItem("Spiral Augment", 1),
    Item.createItem("Critical Augment", 1),
    Item.createItem("Charging Augment", 1),
    Item.createItem("Flaring Augment", 1),
    ],[200,1,1,1,1,2,2,2,2]
);

// DEFAULT WORLD PART 4

const defaultWorldPartFourEnemyLootTable = new LootTable([
    Item.createItem("Life Essence", 1),
    Item.createItem("God Plate", 1),
    Item.createItem("Balance Ruby", 1),
    Item.createItem("God Cape", 1),
    Item.createItem("God Gloves", 1),
    Item.createItem("Spiral Augment", 1),
    Item.createItem("Critical Augment", 1),
    Item.createItem("Charging Augment", 1), 
    Item.createItem("Flaring Augment", 1),
    ],[200,1,1,1,1,2,2,2,2]
);

// DESERT WORLD PART 2

const desertWorldPartTwoEnemyLootTable = new LootTable([
    Item.createItem("Life Essence", 1),
    Item.createItem("Truesilver Greathammer", 1),
    Item.createItem("Order Sapphire", 1),
    Item.createItem("Truesilver Greataxe", 1),
    Item.createItem("Truesilver Greatsword", 1),
    Item.createItem("Spiral Augment", 1),
    Item.createItem("Critical Augment", 1),
    Item.createItem("Charging Augment", 1),
    Item.createItem("Flaring Augment", 1),
    ],[200,1,1,1,1,2,2,2,2]
);