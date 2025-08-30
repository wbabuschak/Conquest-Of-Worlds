const ENEMY_DEFS = {
    "Common Thief": {
        name: "Common Thief",
        mobLevel: 1,
        lootTable: commonThiefLootTable
    },
    "Mysterious Villain": {
        name: "Mysterious Villain",
        mobLevel: 2,
        lootTable: mysteriousVillainLootTable
    },
    "Dirty Goblin": {
        name: "Dirty Goblin",
        mobLevel: 1,
        lootTable: dirtyGoblinLootTable
    },
    "Spectral Fiend": {
        name: "Spectral Fiend",
        mobLevel: 3,
        lootTable: spectralFiendLootTable
    },
    "Spirit Eater": {
        name: "Spirit Eater",
        mobLevel: 4,
        lootTable: spiritEaterLootTable
    },
    "Ghastly Horror": {
        name: "Ghastly Horror",
        mobLevel: 5,
        lootTable: ghastlyHorrorLootTable
    },
    "Desert Wraith": {
        name: "Desert Wraith",
        mobLevel: 6,
        lootTable: desertWraithLootTable
    },
    "Bile Spitter": {
        name: "Bile Spitter",
        mobLevel: 6,
        lootTable: bileSpitterLootTable
    },
    "Desert Zealot": {
        name: "Desert Zealot",
        mobLevel: 7,
        lootTable: desertZealotLootTable
    },
    "Sandstone Golem": {
        name: "Sandstone Golem",
        mobLevel: 8,
        lootTable: sandstoneGolemLootTable
    },
    "Blazing Bovine": {
        name: "Blazing Bovine",
        mobLevel: 13,
        lootTable: blazingBovineLootTable
    },
    "Infernal Insect": {
        name: "Infernal Insect",
        mobLevel: 13,
        lootTable: infernalInsectLootTable
    },
    "Sinful Succubus": {
        name: "Sinful Succubus",
        mobLevel: 13,
        lootTable: sinfulSuccubusLootTable
    },
    "Fiery Fangtooth": {
        name: "Fiery Fangtooth",
        mobLevel: 13,
        lootTable: fieryFangtoothLootTable
    },
    "Dreadful Dino": {
        name: "Dreadful Dino",
        mobLevel: 13,
        lootTable: dreadfulDinoLootTable
    },
    "Vile Vulture": {
        name: "Vile Vulture",
        mobLevel: 13,
        lootTable: vileVultureLootTable
    },
    "Iceologer": {
        name: "Iceologer",
        mobLevel: 16,
        lootTable: iceologerLootTable
    },
    "Spooky Revenant": {
        name: "Spooky Revenant",
        mobLevel: 14,
        lootTable: spookyRevenantLootTable
    },
    "Ice Bear": {
        name: "Ice Bear",
        mobLevel: 15,
        lootTable: iceBearLootTable
    },
    "Animated Weapon": {
        name: "Animated Weapon",
        mobLevel: 12,
        lootTable: animatedWeaponLootTable
    },
    "Foul Necromancer": {
        name: "Foul Necromancer",
        mobLevel: 17,
        lootTable: foulNecromancerLootTable
    },
    "Juvenile Green Drake": {
        name: "Juvenile Green Drake",
        mobLevel: 19,
        lootTable: juvenileDrakeLootTable
    },
    "Juvenile Black Drake": {
        name: "Juvenile Black Drake",
        mobLevel: 20,
        lootTable: juvenileDrakeLootTable
    },
    "Juvenile Blue Drake": {
        name: "Juvenile Blue Drake",
        mobLevel: 21,
        lootTable: juvenileDrakeLootTable
    },
    "Juvenile Red Drake": {
        name: "Juvenile Red Drake",
        mobLevel: 22,
        lootTable: juvenileDrakeLootTable
    },
    "Adolescent Green Drake": {
        name: "Adolescent Green Drake",
        mobLevel: 23,
        lootTable: adolescentDrakeLootTable
    },
    "Adolescent Black Drake": {
        name: "Adolescent Black Drake",
        mobLevel: 24,
        lootTable: adolescentDrakeLootTable
    },
    "Adolescent Blue Drake": {
        name: "Adolescent Blue Drake",
        mobLevel: 25,
        lootTable: adolescentDrakeLootTable
    },
    "Adolescent Red Drake": {
        name: "Adolescent Red Drake",
        mobLevel: 26,
        lootTable: adolescentDrakeLootTable
    },
    "Green Drake": {
        name: "Green Drake",
        mobLevel: 28,
        lootTable: greenDrakeLootTable
    },
    "Black Drake": {
        name: "Black Drake",
        mobLevel: 29,
        lootTable: blackDrakeLootTable
    },
    "Blue Drake": {
        name: "Blue Drake",
        mobLevel: 30,
        lootTable: blueDrakeLootTable
    },
    "Red Drake": {
        name: "Red Drake",
        mobLevel: 31,
        lootTable: redDrakeLootTable
    },
    "Giant Anaconda": {
        name: "Giant Anaconda",
        mobLevel: 24,
        lootTable: giantAnacondaLootTable
    },
    "Vainglorious Dragon Hunter": {
        name: "Vainglorious Dragon Hunter",
        mobLevel: 29,
        lootTable: vaingloriousDragonHunter
    },
    "Boss Goblin": {
        name: "Boss Goblin",
        mobLevel: 29,
        lootTable: bossGoblinLootTable
    },
    "Goblin Loanmaster": {
        name: "Goblin Loanmaster",
        mobLevel: 23,
        lootTable: goblinLoanmasterLootTable
    },
    "Goblin Headcracker": {
        name: "Goblin Headcracker",
        mobLevel: 22,
        lootTable: goblinHeadcrackerLootTable
    },
    "Gold Goblin Golem": {
        name: "Gold Goblin Golem",
        mobLevel: 30,
        lootTable: goldGoblinGolemLootTable,
    },
    "Uncommon Bandit": {
        name: "Uncommon Bandit",
        mobLevel: 3,
        lootTable: uncommonBanditLootTable
    },
    "Overgrown Vole": {
        name: "Overgrown Vole",
        mobLevel: 4,
        lootTable: overgrownVoleLootTable
    },
    "Filthy Goblin": {
        name: "Filthy Goblin",
        mobLevel: 3,
        lootTable: filthyGoblinLootTable
    },
    "Treasure Goblin": {
        name: "Treasure Goblin",
        mobLevel: 11,
        lootTable: treasureGoblinLootTable
    },
    "Keeper of Seals": {
        name: "Keeper of Seals", 
        mobLevel: 40,
        lootTable: keeperOfSealsLootTable
    },
    "Arcane Soul Stitcher": {
        name: "Arcane Soul Stitcher",
        mobLevel: 43,
        lootTable: arcaneSoulStitcherLootTable
    },
    "Arcane Knight": {
        name: "Arcane Knight",
        mobLevel: 42,
        lootTable: arcaneKnightLootTable
    },
    "Arcane Devotee": {
        name: "Arcane Devotee",
        mobLevel: 38,
        lootTable: arcaneDevoteeLootTable
    },
    "Arcane Battlemage": {
        name: "Arcane Battlemage",
        mobLevel: 41,
        lootTable: arcaneBattlemageLootTable
    },
    "Arcane Golem": {
        name: "Arcane Golem",
        mobLevel: 44,
        lootTable: arcaneGolemLootTable
    },
    "Green Laser Alien": {
        name: "Green Laser Alien",
        mobLevel: 51,
        lootTable: greenLaserAlienLootTable
    },
    "Grey Laser Alien": {
        name: "Grey Laser Alien",
        mobLevel: 51,
        lootTable: greyLaserAlienLootTable
    },
    "Ugly Bug Alien": {
        name: "Ugly Bug Alien",
        mobLevel: 49,
        lootTable: uglyBugAlienLootTable
    },
    "Superstellar Space Raider": {
        name: "Superstellar Space Raider",
        mobLevel: 56,
        lootTable: superstellarSpaceRaiderLootTable
    },
    "Living Comet": {
        name: "Living Comet",
        mobLevel: 59,
        lootTable: livingCometLootTable
    },
    "Moon Rock Golem": {
        name: "Moon Rock Golem",
        mobLevel: 72,
        lootTable: moonRockGolemLootTable
    },

    "Obsidian Sphere": {
        name: "Obsidian Sphere",
        mobLevel: 80,
        lootTable: obsidianSphereLootTable
    },
    "Lava Scorpion": {
        name: "Lava Scorpion",
        mobLevel: 81,
        lootTable: lavaScorpionLootTable
    },
    "Magma Drinker": {
        name: "Magma Drinker",
        mobLevel: 83,
        lootTable: magmaDrinkerLootTable
    },
    "Basalt Golem": {
        name: "Basalt Golem",
        mobLevel: 86,
        lootTable: basaltGolemLootTable
    },
    "Fiery Dreadbeast": {
        name: "Fiery Dreadbeast",
        mobLevel: 90,
        lootTable: fieryDreadbeastLootTable
    },
    "Molten Giant": {
        name: "Molten Giant",
        mobLevel: 95,
        lootTable: moltenGiantLootTable
    },

    "Underworld Gangster": {
        name: "Underworld Gangster",
        mobLevel: 90,
        lootTable: underworldGangsterLootTable
    },
    "Subterranean": {
        name: "Subterranean",
        mobLevel: 91,
        lootTable: subterraneanLootTable
    },
    "Alien Pimp": {
        name: "Alien Pimp",
        mobLevel: 93,
        lootTable: alienPimpLootTable
    },
    "Uncompromising Hedonist": {
        name: "Uncompromising Hedonist",
        mobLevel: 96,
        lootTable: uncompromisingHedonistLootTable
    },
    "Veiled Dreadbeast": {
        name: "Veiled Dreadbeast",
        mobLevel: 100,
        lootTable: veiledDreadbeastLootTable
    },
    "Chaos Infiltrator": {
        name: "Chaos Infiltrator",
        mobLevel: 105,
        lootTable: chaosInfiltratorLootTable
    },

    "Clanging Mechanotentacle": {
        name: "Clanging Mechanotentacle",
        mobLevel: 100,
        lootTable: clangingMechanotentacleLootTable
    },
    "Razor Spitter": {
        name: "Razor Spitter",
        mobLevel: 101,
        lootTable: razorSpitterLootTable
    },
    "Resurrected Meat-sludge": {
        name: "Resurrected Meat-sludge",
        mobLevel: 103,
        lootTable: resurrectedMeatSludgeLootTable
    },
    "Warped Man": {
        name: "Warped Man",
        mobLevel: 106,
        lootTable: warpedManLootTable
    },
    "Hairy Dreadbeast": {
        name: "Hairy Dreadbeast",
        mobLevel: 110,
        lootTable: hairyDreadbeastLootTable
    },
    "A.M. Plaything": {
        name: "A.M. Plaything",
        mobLevel: 115,
        lootTable: amPlaythingLootTable
    },

    "Impact Survivor": {
        name: "Impact Survivor",
        mobLevel: 110,
        lootTable: impactSurvivorLootTable
    },
    "Ion Breather": {
        name: "Ion Breather",
        mobLevel: 111,
        lootTable: ionBreatherLootTable
    },
    "Plasma Junker": {
        name: "Plasma Junker",
        mobLevel: 113,
        lootTable: plasmaJunkerLootTable
    },
    "Post-stellar Screamer": {
        name: "Post-stellar Screamer",
        mobLevel: 116,
        lootTable: poststellarScreamerLootTable
    },
    "Super Dreadbeast": {
        name: "Super Dreadbeast",
        mobLevel: 120,
        lootTable: superDreadbeastLootTable
    },
    "Student of Syzygy": {
        name: "Student of Syzygy",
        mobLevel: 125,
        lootTable: studentofSyzygyLootTable
    },

    "Echo of Roc": {
        name: "Echo of Roc",
        mobLevel: 140,
        lootTable: mythEnemyLootTable,
        armorClass: 0.011
    },
    "Echo of Medusa": {
        name: "Echo of Medusa",
        mobLevel: 141,
        lootTable: mythEnemyLootTable,
        armorClass: 0.012
    },
    "Echo of Minotaur": {
        name: "Echo of Minotaur",
        mobLevel: 142,
        lootTable: mythEnemyLootTable,
        armorClass: 0.013
    },
    "Echo of Cerberus": {
        name: "Echo of Cerberus",
        mobLevel: 143,
        lootTable: mythEnemyLootTable,
        armorClass: 0.014
    },
    "Echo of Basilisk": {
        name: "Echo of Basilisk",
        mobLevel: 144,
        lootTable: mythEnemyLootTable,
        armorClass: 0.015
    },
    "Echo of Chimera": {
        name: "Echo of Chimera",
        mobLevel: 145,
        lootTable: mythEnemyLootTable,
        armorClass: 0.016
    },
    "Echo of Hydra": {
        name: "Echo of Hydra",
        mobLevel: 146,
        lootTable: mythEnemyLootTable,
        armorClass: 0.017
    },
    "Echo of Kraken": {
        name: "Echo of Kraken",
        mobLevel: 147,
        lootTable: mythEnemyLootTable,
        armorClass: 0.018
    },
    "Echo of Fenrir": {
        name: "Echo of Fenrir",
        mobLevel: 148,
        lootTable: mythEnemyLootTable,
        armorClass: 0.019
    },
    "Echo of Jörmungandr": {
        name: "Echo of Jörmungandr",
        mobLevel: 149,
        lootTable: mythEnemyLootTable,
        armorClass: 0.02
    },
    "Iucophage, Bulwark Titan": {
        name: "Iucophage, Bulwark Titan",
        mobLevel: 150,
        lootTable: bulwarkTitanLootTable,
        armorClass: 0.1
    }

};

function spawnEnemy(enemyName) {
    const template = ENEMY_DEFS[enemyName];
    if (!template) {
        console.error("Unknown enemy: ", enemyName);
        return null;
    }

    return new Entity(
        template.name,
        template.mobLevel,
        template.lootTable,
        template.armorClass
    );
}