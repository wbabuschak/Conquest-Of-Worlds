const ENEMY_DEFS = {
    "Common Thief": {
        name: "Common Thief",
        maxHealth: 10,
        lootTable: commonThiefLootTable
    },
    "Mysterious Villain": {
        name: "Mysterious Villain",
        maxHealth: 16,
        lootTable: mysteriousVillainLootTable
    },
    "Dirty Goblin": {
        name: "Dirty Goblin",
        maxHealth: 7,
        lootTable: dirtyGoblinLootTable
    },
    "Spectral Fiend": {
        name: "Spectral Fiend",
        maxHealth: 21,
        lootTable: spectralFiendLootTable
    },
    "Spirit Eater": {
        name: "Spirit Eater",
        maxHealth: 29,
        lootTable: spiritEaterLootTable
    },
    "Ghastly Horror": {
        name: "Ghastly Horror",
        maxHealth: 35,
        lootTable: ghastlyHorrorLootTable
    },
    "Desert Wraith": {
        name: "Desert Wraith",
        maxHealth: 47,
        lootTable: desertWraithLootTable
    },
    "Bile Spitter": {
        name: "Bile Spitter",
        maxHealth: 41,
        lootTable: bileSpitterLootTable
    },
    "Desert Zealot": {
        name: "Desert Zealot",
        maxHealth: 61,
        lootTable: desertZealotLootTable
    },
    "Sandstone Golem": {
        name: "Sandstone Golem",
        maxHealth: 100,
        lootTable: sandstoneGolemLootTable
    },
    "Blazing Bovine": {
        name: "Blazing Bovine",
        maxHealth: 666,
        lootTable: blazingBovineLootTable
    },
    "Infernal Insect": {
        name: "Infernal Insect",
        maxHealth: 333,
        lootTable: infernalInsectLootTable
    },
    "Sinful Succubus": {
        name: "Sinful Succubus",
        maxHealth: 333,
        lootTable: sinfulSuccubusLootTable
    },
    "Fiery Fangtooth": {
        name: "Fiery Fangtooth",
        maxHealth: 333,
        lootTable: fieryFangtoothLootTable
    },
    "Dreadful Dino": {
        name: "Dreadful Dino",
        maxHealth: 666,
        lootTable: dreadfulDinoLootTable
    },
    "Vile Vulture": {
        name: "Vile Vulture",
        maxHealth: 666,
        lootTable: vileVultureLootTable
    },
    "Iceologer": {
        name: "Iceologer",
        maxHealth: 1090,
        lootTable: iceologerLootTable
    },
    "Spooky Revenant": {
        name: "Spooky Revenant",
        maxHealth: 744,
        lootTable: spookyRevenantLootTable
    },
    "Ice Bear": {
        name: "Ice Bear",
        maxHealth: 960,
        lootTable: iceBearLootTable
    },
    "Animated Weapon": {
        name: "Animated Weapon",
        maxHealth: 541,
        lootTable: animatedWeaponLootTable
    },
    "Foul Necromancer": {
        name: "Foul Necromancer",
        maxHealth: 1377,
        lootTable: foulNecromancerLootTable
    },
    "Juvenile Green Drake": {
        name: "Juvenile Green Drake",
        maxHealth: 910,
        lootTable: juvenileDrakeLootTable
    },
    "Juvenile Black Drake": {
        name: "Juvenile Black Drake",
        maxHealth: 930,
        lootTable: juvenileDrakeLootTable
    },
    "Juvenile Blue Drake": {
        name: "Juvenile Blue Drake",
        maxHealth: 950,
        lootTable: juvenileDrakeLootTable
    },
    "Juvenile Red Drake": {
        name: "Juvenile Red Drake",
        maxHealth: 970,
        lootTable: juvenileDrakeLootTable
    },
    "Adolescent Green Drake": {
        name: "Adolescent Green Drake",
        maxHealth: 1130,
        lootTable: adolescentDrakeLootTable
    },
    "Adolescent Black Drake": {
        name: "Adolescent Black Drake",
        maxHealth: 1160,
        lootTable: adolescentDrakeLootTable
    },
    "Adolescent Blue Drake": {
        name: "Adolescent Blue Drake",
        maxHealth: 1190,
        lootTable: adolescentDrakeLootTable
    },
    "Adolescent Red Drake": {
        name: "Adolescent Red Drake",
        maxHealth: 1220,
        lootTable: adolescentDrakeLootTable
    },
    "Green Drake": {
        name: "Green Drake",
        maxHealth: 1440,
        lootTable: greenDrakeLootTable
    },
    "Black Drake": {
        name: "Black Drake",
        maxHealth: 1550,
        lootTable: blackDrakeLootTable
    },
    "Blue Drake": {
        name: "Blue Drake",
        maxHealth: 1660,
        lootTable: blueDrakeLootTable
    },
    "Red Drake": {
        name: "Red Drake",
        maxHealth: 1770,
        lootTable: redDrakeLootTable
    },
    "Giant Anaconda": {
        name: "Giant Anaconda",
        maxHealth: 690,
        lootTable: giantAnacondaLootTable
    },
    "Vainglorious Dragon Hunter": {
        name: "Vainglorious Dragon Hunter",
        maxHealth: 991,
        lootTable: vaingloriousDragonHunter
    },
    "Boss Goblin": {
        name: "Boss Goblin",
        maxHealth: 900,
        lootTable: bossGoblinLootTable
    },
    "Goblin Loanmaster": {
        name: "Goblin Loanmaster",
        maxHealth: 600,
        lootTable: goblinLoanmasterLootTable
    },
    "Goblin Headcracker": {
        name: "Goblin Headcracker",
        maxHealth: 700,
        lootTable: goblinHeadcrackerLootTable
    },
    "Gold Goblin Golem": {
        name: "Gold Goblin Golem",
        maxHealth: 3100,
        lootTable: goldGoblinGolemLootTable,
    },
    "Uncommon Bandit": {
        name: "Uncommon Bandit",
        maxHealth: 30,
        lootTable: uncommonBanditLootTable
    },
    "Overgrown Vole": {
        name: "Overgrown Vole",
        maxHealth: 48,
        lootTable: overgrownVoleLootTable
    },
    "Filthy Goblin": {
        name: "Filthy Goblin",
        maxHealth: 21,
        lootTable: filthyGoblinLootTable
    },
    "Treasure Goblin": {
        name: "Treasure Goblin",
        maxHealth: 100,
        lootTable: treasureGoblinLootTable
    },
    "Keeper of Seals": {
        name: "Keeper of Seals", 
        maxHealth: 4000,
        lootTable: keeperOfSealsLootTable
    },
    "Arcane Soul Stitcher": {
        name: "Arcane Soul Stitcher",
        maxHealth: 4333,
        lootTable: arcaneSoulStitcherLootTable
    },
    "Arcane Knight": {
        name: "Arcane Knight",
        maxHealth: 5109,
        lootTable: arcaneKnightLootTable
    },
    "Arcane Devotee": {
        name: "Arcane Devotee",
        maxHealth: 3481,
        lootTable: arcaneDevoteeLootTable
    },
    "Arcane Battlemage": {
        name: "Arcane Battlemage",
        maxHealth: 4218,
        lootTable: arcaneBattlemageLootTable
    },
    "Arcane Golem": {
        name: "Arcane Golem",
        maxHealth: 6100,
        lootTable: arcaneGolemLootTable
    },
    "Green Laser Alien": {
        name: "Green Laser Alien",
        maxHealth: 5115,
        lootTable: greenLaserAlienLootTable
    },
    "Grey Laser Alien": {
        name: "Grey Laser Alien",
        maxHealth: 5115,
        lootTable: greyLaserAlienLootTable
    },
    "Ugly Bug Alien": {
        name: "Ugly Bug Alien",
        maxHealth: 4554,
        lootTable: uglyBugAlienLootTable
    },
    "Superstellar Space Raider": {
        name: "Superstellar Space Raider",
        maxHealth: 7117,
        lootTable: superstellarSpaceRaiderLootTable
    },
    "Living Comet": {
        name: "Living Comet",
        maxHealth: 13031,
        lootTable: livingCometLootTable
    },
    "Moon Rock Golem": {
        name: "Moon Rock Golem",
        maxHealth: 14241,
        lootTable: moonRockGolemLootTable
    },

    "Obsidian Sphere": {
        name: "Obsidian Sphere",
        maxHealth: 24000,
        lootTable: obsidianSphereLootTable
    },
    "Lava Scorpion": {
        name: "Lava Scorpion",
        maxHealth: 26000,
        lootTable: lavaScorpionLootTable
    },
    "Magma Drinker": {
        name: "Magma Drinker",
        maxHealth: 29000,
        lootTable: magmaDrinkerLootTable
    },
    "Basalt Golem": {
        name: "Basalt Golem",
        maxHealth: 33000,
        lootTable: basaltGolemLootTable
    },
    "Fiery Dreadbeast": {
        name: "Fiery Dreadbeast",
        maxHealth: 38000,
        lootTable: fieryDreadbeastLootTable
    },
    "Molten Giant": {
        name: "Molten Giant",
        maxHealth: 48000,
        lootTable: moltenGiantLootTable
    },

    "Underworld Gangster": {
        name: "Underworld Gangster",
        maxHealth: 33600,
        lootTable: underworldGangsterLootTable
    },
    "Subterranean": {
        name: "Subterranean",
        maxHealth: 36400,
        lootTable: subterraneanLootTable
    },
    "Alien Pimp": {
        name: "Alien Pimp",
        maxHealth: 40600,
        lootTable: alienPimpLootTable
    },
    "Uncompromising Hedonist": {
        name: "Uncompromising Hedonist",
        maxHealth: 46200,
        lootTable: uncompromisingHedonistLootTable
    },
    "Veiled Dreadbeast": {
        name: "Veiled Dreadbeast",
        maxHealth: 53200,
        lootTable: veiledDreadbeastLootTable
    },
    "Chaos Infiltrator": {
        name: "Chaos Infiltrator",
        maxHealth: 67200,
        lootTable: chaosInfiltratorLootTable
    },

    "Clanging Mechanotentacle": {
        name: "Clanging Mechanotentacle",
        maxHealth: 47040,
        lootTable: clangingMechanotentacleLootTable
    },
    "Razor Spitter": {
        name: "Razor Spitter",
        maxHealth: 50960,
        lootTable: razorSpitterLootTable
    },
    "Resurrected Meat-sludge": {
        name: "Resurrected Meat-sludge",
        maxHealth: 56840,
        lootTable: resurrectedMeatSludgeLootTable
    },
    "Warped Man": {
        name: "Warped Man",
        maxHealth: 64680,
        lootTable: warpedManLootTable
    },
    "Hairy Dreadbeast": {
        name: "Hairy Dreadbeast",
        maxHealth: 74480,
        lootTable: hairyDreadbeastLootTable
    },
    "A.M. Plaything": {
        name: "A.M. Plaything",
        maxHealth: 94080,
        lootTable: amPlaythingLootTable
    },

    "Impact Survivor": {
        name: "Impact Survivor",
        maxHealth: 65856,
        lootTable: impactSurvivorLootTable
    },
    "Ion Breather": {
        name: "Ion Breather",
        maxHealth: 71344,
        lootTable: ionBreatherLootTable
    },
    "Plasma Junker": {
        name: "Plasma Junker",
        maxHealth: 79576,
        lootTable: plasmaJunkerLootTable
    },
    "Post-stellar Screamer": {
        name: "Post-stellar Screamer",
        maxHealth: 90552,
        lootTable: poststellarScreamerLootTable
    },
    "Super Dreadbeast": {
        name: "Super Dreadbeast",
        maxHealth: 104272,
        lootTable: superDreadbeastLootTable
    },
    "Student of Syzygy": {
        name: "Student of Syzygy",
        maxHealth: 131712,
        lootTable: studentofSyzygyLootTable
    },

    "Echo of Roc": {
        name: "Echo of Roc",
        maxHealth: 220000,
        lootTable: mythEnemyLootTable,
        armor: 160
    },
    "Echo of Medusa": {
        name: "Echo of Medusa",
        maxHealth: 240000,
        lootTable: mythEnemyLootTable,
        armor: 158
    },
    "Echo of Minotaur": {
        name: "Echo of Minotaur",
        maxHealth: 260000,
        lootTable: mythEnemyLootTable,
        armor: 156
    },
    "Echo of Cerberus": {
        name: "Echo of Cerberus",
        maxHealth: 280000,
        lootTable: mythEnemyLootTable,
        armor: 154
    },
    "Echo of Basilisk": {
        name: "Echo of Basilisk",
        maxHealth: 300000,
        lootTable: mythEnemyLootTable,
        armor: 152
    },
    "Echo of Chimera": {
        name: "Echo of Chimera",
        maxHealth: 320000,
        lootTable: mythEnemyLootTable,
        armor: 150
    },
    "Echo of Hydra": {
        name: "Echo of Hydra",
        maxHealth: 340000,
        lootTable: mythEnemyLootTable,
        armor: 148
    },
    "Echo of Kraken": {
        name: "Echo of Kraken",
        maxHealth: 340000,
        lootTable: mythEnemyLootTable,
        armor: 146
    },
    "Echo of Fenrir": {
        name: "Echo of Fenrir",
        maxHealth: 360000,
        lootTable: mythEnemyLootTable,
        armor: 144
    },
    "Echo of Jörmungandr": {
        name: "Echo of Jörmungandr",
        maxHealth: 380000,
        lootTable: mythEnemyLootTable,
        armor: 142
    },

    "Echo of Jörmungandr": {
        name: "Echo of Jörmungandr",
        maxHealth: 380000,
        lootTable: mythEnemyLootTable,
        armor: 142
    },
};

function spawnEnemy(enemyName) {
    const template = ENEMY_DEFS[enemyName];
    if (!template) {
        console.error("Unknown enemy: ", enemyName);
        return null;
    }

    return new Entity(
        template.name,
        template.maxHealth,
        template.lootTable,
        template.armor
    );
}