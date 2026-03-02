const GREEN_HUE = '60deg';
const DARK_GREEN_HUE = '100deg';
const BROWN_HUE = '350deg';
const RED_HUE = '320deg';
const YELLOW_HUE = '30deg';
const PURPLE_HUE = '240deg';
const BLUE_HUE = '160deg';
const LIGHT_BLUE_HUE = '130deg';
const DARK_BLUE_HUE = '190deg';
const NO_HUE = null;

const ENEMY_DEFS = {
    "Common Thief": {
        name: "Common Thief",
        mobLevel: 1,
        lootTable: commonThiefLootTable,
        icon: 'thief',
        hue: BROWN_HUE,
        desc: "This unsavory fellow is here to steal your own ill-gotten gains!"
    },
    "Mysterious Villain": {
        name: "Mysterious Villain",
        mobLevel: 2,
        lootTable: mysteriousVillainLootTable,
        hue: PURPLE_HUE,
        desc: "It is said that a stranger is a friend you haven't met; not this one."
    },
    "Dirty Goblin": {
        name: "Dirty Goblin",
        mobLevel: 1,
        lootTable: dirtyGoblinLootTable,
        icon: 'goblin',
        hue: GREEN_HUE,
        desc: "Do you even need a reason to fight this one?"
    },
    "Spectral Fiend": {
        name: "Spectral Fiend",
        mobLevel: 3,
        lootTable: spectralFiendLootTable,
        icon: 'undead',
        hue: PURPLE_HUE,
        desc: "The sprit world is overflowing with trapped souls like these."
    },
    "Spirit Eater": {
        name: "Spirit Eater",
        mobLevel: 4,
        lootTable: spiritEaterLootTable,
        icon: 'wizard',
        hue: PURPLE_HUE,
        desc: "The most tortured souls cling desperately to their tormentors."
    },
    "Ghastly Horror": {
        name: "Ghastly Horror",
        mobLevel: 5,
        lootTable: ghastlyHorrorLootTable,
        icon: 'undead',
        hue: YELLOW_HUE,
        desc: "There is death, life, and this."
    },
    "Banshee Screamer": {
        name: "Banshee Screamer",
        mobLevel: 5,
        lootTable: bansheeScreamerLootTable,
        icon: 'screamer',
        hue: PURPLE_HUE,
        desc: "Believe it or not, she's still more pleasant in death than life!"
    },
    "Desert Wraith": {
        name: "Desert Wraith",
        mobLevel: 6,
        lootTable: desertWraithLootTable,
        icon: 'undead',
        hue: BROWN_HUE,
        desc: "Not quite dead, despite the desert's best efforts."
    },
    "Bile Spitter": {
        name: "Bile Spitter",
        mobLevel: 6,
        lootTable: bileSpitterLootTable,
        icon: 'bug',
        hue: GREEN_HUE,
        desc: "The only green as far as the eye can see."
    },
    "Desert Zealot": {
        name: "Desert Zealot",
        mobLevel: 7,
        lootTable: desertZealotLootTable,
        icon: 'cultist',
        hue: BROWN_HUE,
        desc: "Dogma and faith are like a hammer and a nail- or maybe the other way around."
    },
    "Sandstone Golem": {
        name: "Sandstone Golem",
        mobLevel: 8,
        lootTable: sandstoneGolemLootTable,
        icon: 'golem',
        hue: BROWN_HUE,
        desc: "Whoever constructed this was trying to protect something quite valuable."
    },
    "Blazing Bovine": {
        name: "Blazing Bovine",
        mobLevel: 13,
        lootTable: blazingBovineLootTable,
        icon: 'cow',
        hue: RED_HUE,
        desc: "There must be some secret here."
    },
    "Infernal Insect": {
        name: "Infernal Insect",
        mobLevel: 13,
        lootTable: infernalInsectLootTable,
        icon: 'bug',
        hue: YELLOW_HUE,
        desc: "Plenty of these in hell."
    },
    "Sinful Succubus": {
        name: "Sinful Succubus",
        mobLevel: 15,
        lootTable: sinfulSuccubusLootTable,
        icon:'succubus',
        hue: RED_HUE,
        desc: "Don't get too attached."
    },
    "Fiery Fangtooth": {
        name: "Fiery Fangtooth",
        mobLevel: 13,
        lootTable: fieryFangtoothLootTable,
        icon: 'fish',
        hue: RED_HUE,
        desc: "Smaller than you may think, more dangerous than you'd prefer."
    },
    "Dreadful Dino": {
        name: "Dreadful Dino",
        mobLevel: 13,
        lootTable: dreadfulDinoLootTable,
        icon: 'sauropod',
        hue: BROWN_HUE,
        desc: "Hell is older than creation itself- why are you surprised?"
    },
    "Vile Vulture": {
        name: "Vile Vulture",
        mobLevel: 13,
        lootTable: vileVultureLootTable,
        icon: 'bird',
        hue: BROWN_HUE,
        desc: "Death begets life."
    },
    "Iceologer": {
        name: "Iceologer",
        mobLevel: 16,
        lootTable: iceologerLootTable,
        icon: 'wizard',
        hue: BLUE_HUE,
        desc: "You merely adopted the cold; I was born in it, molded by it."
    },
    "Spooky Revenant": {
        name: "Spooky Revenant",
        mobLevel: 14,
        lootTable: spookyRevenantLootTable,
        icon: 'undead',
        hue: DARK_BLUE_HUE,
        desc: "Ready for round two."
    },
    "Ice Bear": {
        name: "Ice Bear",
        mobLevel: 15,
        lootTable: iceBearLootTable,
        icon: 'bear',
        hue: LIGHT_BLUE_HUE,
        desc: "Not made of ice, just well-accustomed."
    },
    "Animated Weapon": {
        name: "Animated Weapon",
        mobLevel: 12,
        lootTable: animatedWeaponLootTable,
        icon: 'weaponenemy',
        hue: DARK_BLUE_HUE,
        desc: "Freshly detached souls will cling to any vessel."
    },
    "Foul Necromancer": {
        name: "Foul Necromancer",
        mobLevel: 17,
        lootTable: foulNecromancerLootTable,
        icon: 'wizard',
        hue: NO_HUE,
        desc: "Foul is a bit redundant here."
    },
    "Boss Yeti": {
        name: "Boss Yeti",
        mobLevel: 20,
        lootTable: bossYetiLootTable,
        icon: 'yeti',
        hue: BLUE_HUE,
        desc: "Like a boss!"
    },
    "Alpha Yeti Underling": {
        name: "Alpha Yeti Underling",
        mobLevel: 12,
        lootTable: alphaYetiUnderlingTable,
        icon: 'yeti',
        hue: LIGHT_BLUE_HUE,
        desc: "They are underlings to an Alpha Yeti- not the Alpha of yeti underlings."
    },
    "Alpha Yeti": {
        name: "Alpha Yeti",
        mobLevel: 22,
        lootTable: alphaYetiTable,
        icon: 'yeti',
        hue: DARK_BLUE_HUE,
        desc: "Rudolph Conquestberg first described dominance hierarchies in yetis in the 1940s, but his work was based on unrelated adult yetis forced to live together in confined spaces—conditions that do not reflect natural yeti behavior."
    },
    "Juvenile Green Drake": {
        name: "Juvenile Green Drake",
        mobLevel: 19,
        lootTable: juvenileDrakeLootTable,
        icon: 'baby_dragon',
        hue: GREEN_HUE,
        desc: "Baby dragons hatch without vision, flight, or nails. You are a coward."
    },
    "Juvenile Black Drake": {
        name: "Juvenile Black Drake",
        mobLevel: 20,
        lootTable: juvenileDrakeLootTable,
        icon: 'baby_dragon',
        hue: NO_HUE,
        desc: "Baby dragons hatch without vision, flight, or nails. You are a coward."
    },
    "Juvenile Blue Drake": {
        name: "Juvenile Blue Drake",
        mobLevel: 21,
        lootTable: juvenileDrakeLootTable,
        icon: 'baby_dragon',
        hue: BLUE_HUE,
        desc: "Baby dragons hatch without vision, flight, or nails. You are a coward."
    },
    "Juvenile Red Drake": {
        name: "Juvenile Red Drake",
        mobLevel: 22,
        lootTable: juvenileDrakeLootTable,
        icon: 'baby_dragon',
        hue: RED_HUE,
        desc: "Baby dragons hatch without vision, flight, or nails. You are a coward."
    },
    "Adolescent Green Drake": {
        name: "Adolescent Green Drake",
        mobLevel: 23,
        lootTable: adolescentDrakeLootTable,
        icon: 'medium_dragon',
        hue: GREEN_HUE,
        desc: "Though lacking in beauty or grace, adolescent dragons are by far the most aggressive."
    },
    "Adolescent Black Drake": {
        name: "Adolescent Black Drake",
        mobLevel: 24,
        lootTable: adolescentDrakeLootTable,
        icon: 'medium_dragon',
        hue: NO_HUE,
        desc: "Though lacking in beauty or grace, adolescent dragons are by far the most aggressive."
    },
    "Adolescent Blue Drake": {
        name: "Adolescent Blue Drake",
        mobLevel: 25,
        lootTable: adolescentDrakeLootTable,
        icon: 'medium_dragon',
        hue: BLUE_HUE,
        desc: "Though lacking in beauty or grace, adolescent dragons are by far the most aggressive."
    },
    "Adolescent Red Drake": {
        name: "Adolescent Red Drake",
        mobLevel: 26,
        lootTable: adolescentDrakeLootTable,
        icon: 'medium_dragon',
        hue: RED_HUE,
        desc: "Though lacking in beauty or grace, adolescent dragons are by far the most aggressive."
    },
    "Green Drake": {
        name: "Green Drake",
        mobLevel: 28,
        lootTable: greenDrakeLootTable,
        icon: 'big_dragon',
        hue: GREEN_HUE,
        desc: "It is known all throughout that dragons appear closer and closer as they mature."
    },
    "Black Drake": {
        name: "Black Drake",
        mobLevel: 29,
        lootTable: blackDrakeLootTable,
        icon: 'big_dragon',
        hue: NO_HUE,
        desc: "It is known all throughout that dragons appear closer and closer as they mature."
    },
    "Blue Drake": {
        name: "Blue Drake",
        mobLevel: 30,
        lootTable: blueDrakeLootTable,
        icon: 'big_dragon',
        hue: BLUE_HUE,
        desc: "It is known all throughout that dragons appear closer and closer as they mature."
    },
    "Red Drake": {
        name: "Red Drake",
        mobLevel: 31,
        lootTable: redDrakeLootTable,
        icon: 'big_dragon',
        hue: RED_HUE,
        desc: "It is known all throughout that dragons appear closer and closer as they mature."
    },
    "Giant Anaconda": {
        name: "Giant Anaconda",
        mobLevel: 24,
        lootTable: giantAnacondaLootTable,
        icon: 'snake',
        hue: BROWN_HUE,
        desc: "As far as giant anacondas go, this one is quite average."
        
    },
    "Vainglorious Dragon Hunter": {
        name: "Vainglorious Dragon Hunter",
        mobLevel: 29,
        lootTable: vaingloriousDragonHunter,
        icon: 'battlemage',
        hue: BROWN_HUE,
        desc: "As far as dragon hunters go, this one is quite arrogant."
    },
    "Boss Goblin": {
        name: "Boss Goblin",
        mobLevel: 29,
        lootTable: bossGoblinLootTable,
        icon: 'goblin',
        hue: BROWN_HUE,
        desc: "Like a boss!"
    },
    "Goblin Loanmaster": {
        name: "Goblin Loanmaster",
        mobLevel: 23,
        lootTable: goblinLoanmasterLootTable,
        icon: 'goblin',
        hue: YELLOW_HUE,
        desc: "Pay up!"
    },
    "Goblin Headcracker": {
        name: "Goblin Headcracker",
        mobLevel: 22,
        lootTable: goblinHeadcrackerLootTable,
        icon: 'goblin',
        hue: RED_HUE,
        desc: "Headcracking is just a job to him; his real passion is dance."
    },
    "Gold Goblin Golem": {
        name: "Gold Goblin Golem",
        mobLevel: 30,
        lootTable: goldGoblinGolemLootTable,
        icon: 'golem',
        hue: YELLOW_HUE,
        desc: "The apex of goblin engineering."
    },
    "Uncommon Bandit": {
        name: "Uncommon Bandit",
        mobLevel: 3,
        lootTable: uncommonBanditLootTable,
        icon: 'thief',
        hue: RED_HUE
    },
    "Overgrown Vole": {
        name: "Overgrown Vole",
        mobLevel: 4,
        lootTable: overgrownVoleLootTable,
        icon: 'rat_beast',
        hue: BROWN_HUE
    },
    "Filthy Goblin": {
        name: "Filthy Goblin",
        mobLevel: 3,
        lootTable: filthyGoblinLootTable,
        icon: 'goblin',
        hue: DARK_GREEN_HUE
    },
    "Treasure Goblin": {
        name: "Treasure Goblin",
        mobLevel: 11,
        lootTable: treasureGoblinLootTable
    },
    "Keeper of Seals": {
        name: "Keeper of Seals", 
        mobLevel: 40,
        lootTable: keeperOfSealsLootTable,
        icon: 'cultist',
        hue: DARK_BLUE_HUE,
        desc: "♓︎⧫︎ ⬥︎♒︎♓︎♍︎♒︎ 🙵♏︎♏︎◻︎⬧︎ ⧫︎♒︎♏︎ ⬧︎♏︎♋︎●︎⬧︎"
    },
    "Arcane Soul Stitcher": {
        name: "Arcane Soul Stitcher",
        mobLevel: 43,
        lootTable: arcaneSoulStitcherLootTable,
        icon: 'wizard',
        hue: LIGHT_BLUE_HUE,
        desc: "♓︎⧫︎ ⬥︎♒︎♓︎♍︎♒︎ ⬧︎⧫︎♓︎⧫︎♍︎♒︎♏︎⬧︎ ⬧︎□︎◆︎●︎⬧︎"
    },
    "Arcane Knight": {
        name: "Arcane Knight",
        mobLevel: 42,
        lootTable: arcaneKnightLootTable,
        icon: 'knight',
        hue: LIGHT_BLUE_HUE,
        desc: "♓︎⧫︎ ⬥︎♒︎♓︎♍︎♒︎ ◻︎❒︎□︎⧫︎♏︎♍︎⧫︎⬧︎ ⧫︎♒︎♏︎ ♋︎❒︎♍︎♋︎■︎♏︎ ❒︎♏︎♋︎●︎❍︎"
    },
    "Arcane Devotee": {
        name: "Arcane Devotee",
        mobLevel: 38,
        lootTable: arcaneDevoteeLootTable,
        icon: 'cultist',
        hue: LIGHT_BLUE_HUE,
        desc: "♓︎⧫︎ ⬥︎♒︎♓︎♍︎♒︎ ⬧︎♒︎♋︎●︎●︎ ♑︎♓︎❖︎♏︎ ●︎♓︎♐︎♏︎"
    },
    "Arcane Battlemage": {
        name: "Arcane Battlemage",
        mobLevel: 41,
        lootTable: arcaneBattlemageLootTable,
        icon: 'battlemage',
        hue: LIGHT_BLUE_HUE,
        desc: "♓︎⧫︎ ⬥︎♒︎♓︎♍︎♒︎ ♎︎□︎♏︎⬧︎ ♌︎♋︎⧫︎⧫︎●︎♏︎"
    },
    "Arcane Golem": {
        name: "Arcane Golem",
        mobLevel: 44,
        lootTable: arcaneGolemLootTable,
        icon: 'golem',
        hue: LIGHT_BLUE_HUE,
        desc: "♓︎⧫︎ ⬥︎♒︎♓︎♍︎♒︎ ♒︎♋︎⬧︎ ♌︎♏︎♏︎■︎ ♍︎□︎■︎⬧︎⧫︎❒︎◆︎♍︎⧫︎♏︎♎︎ ♓︎■︎ □︎❒︎♎︎♏︎❒︎ ⧫︎□︎ ◻︎❒︎□︎⧫︎♏︎♍︎⧫︎ ⧫︎♒︎♋︎⧫︎ ⬥︎♒︎♓︎♍︎♒︎ ◻︎❒︎□︎⧫︎♏︎♍︎⧫︎⬧︎ ⧫︎♒︎♏︎ ♋︎❒︎♍︎♋︎■︎♏︎ ❒︎♏︎♋︎●︎❍︎"
    },
    "Green Laser Alien": {
        name: "Green Laser Alien",
        mobLevel: 51,
        lootTable: greenLaserAlienLootTable,
        icon: 'alien',
        hue: GREEN_HUE,
        desc: "That is, an alien which possess a green laser."
    },
    "Grey Laser Alien": {
        name: "Grey Laser Alien",
        mobLevel: 51,
        lootTable: greyLaserAlienLootTable,
        icon: 'alien',
        hue: NO_HUE,
        desc: "That is, an alien which possess a grey laser."
    },
    "Ugly Bug Alien": {
        name: "Ugly Bug Alien",
        mobLevel: 49,
        lootTable: uglyBugAlienLootTable,
        icon: 'bug',
        hue: YELLOW_HUE,
        desc: "Is it an alien which happens to be an ugly bug? Or is it a bug alien that happens to be ugly?"
    },
    "Superstellar Space Raider": {
        name: "Superstellar Space Raider",
        mobLevel: 56,
        lootTable: superstellarSpaceRaiderLootTable,
        icon: 'knight',
        hue: RED_HUE,
        desc: "Scoundrels come in every color."
    },
    "Living Comet": {
        name: "Living Comet",
        mobLevel: 59,
        lootTable: livingCometLootTable,
        icon: 'meteor',
        hue: RED_HUE,
        desc: "A fragment of space rock given life- but so are we all."
    },
    "Moon Rock Golem": {
        name: "Moon Rock Golem",
        mobLevel: 72,
        lootTable: moonRockGolemLootTable,
        icon: 'golem',
        hue: NO_HUE,
        desc: "Lunar societies would just refer to this as a \"Rock Golem\"."
    },

    "Obsidian Sphere": {
        name: "Obsidian Sphere",
        mobLevel: 80,
        lootTable: obsidianSphereLootTable,
        icon: 'meteor',
        hue: PURPLE_HUE,
        desc: "Mostly spherical."
    },
    "Lava Scorpion": {
        name: "Lava Scorpion",
        mobLevel: 81,
        lootTable: lavaScorpionLootTable,
        icon: 'bug',
        hue: RED_HUE,
        desc: "These robust critters can withstand temperatures up to 6000°C."
    },
    "Magma Drinker": {
        name: "Magma Drinker",
        mobLevel: 83,
        lootTable: magmaDrinkerLootTable,
        icon: 'undead',
        hue: RED_HUE,
        desc: "Magma is low in calories and quite fulfilling."
    },
    "Basalt Golem": {
        name: "Basalt Golem",
        mobLevel: 86,
        lootTable: basaltGolemLootTable,
        icon: 'golem',
        hue: PURPLE_HUE,
        desc: "An inactive basalt golem is virtually indistinguishable in this environment."
    },
    "Fiery Dreadbeast": {
        name: "Fiery Dreadbeast",
        mobLevel: 90,
        lootTable: fieryDreadbeastLootTable,
        icon: 'dreadbeast',
        hue: RED_HUE,
        desc: "Big, furry, and hot as hell. Wait-"
    },
    "Molten Giant": {
        name: "Molten Giant",
        mobLevel: 95,
        lootTable: moltenGiantLootTable,
        icon: 'giant',
        hue: RED_HUE,
        desc: "You're in over your head."
    },

    "Underworld Gangster": {
        name: "Underworld Gangster",
        mobLevel: 90,
        lootTable: underworldGangsterLootTable,
        icon: 'gangster',
        hue: PURPLE_HUE,
        desc: "Moonlights as a spoken-word DJ."
    },
    "Subterranean": {
        name: "Subterranean",
        mobLevel: 91,
        lootTable: subterraneanLootTable,
        icon: 'defaultEnemy',
        hue: BROWN_HUE,
        desc: "Evil dwells in dark places."
    },
    "Alien Pimp": {
        name: "Alien Pimp",
        mobLevel: 93,
        lootTable: alienPimpLootTable,
        icon: 'gangster',
        hue: BLUE_HUE,
        desc: "Both pimps out aliens and is an alien."
    },
    "Uncompromising Hedonist": {
        name: "Uncompromising Hedonist",
        mobLevel: 96,
        lootTable: uncompromisingHedonistLootTable,
        icon: 'succubus',
        hue: BLUE_HUE,
        desc: "Some people will do anything for a dollar. Some would do it for free."
    },
    "Veiled Dreadbeast": {
        name: "Veiled Dreadbeast",
        mobLevel: 100,
        lootTable: veiledDreadbeastLootTable,
        icon: 'dreadbeast',
        hue: NO_HUE,
        desc: "Sneaky and freaky."
    },
    "Chaos Infiltrator": {
        name: "Chaos Infiltrator",
        mobLevel: 105,
        lootTable: chaosInfiltratorLootTable,
        icon: 'cultist',
        hue: GREEN_HUE,
        desc: "It's always the ones you least expect."
    },

    "Clanging Mechanotentacle": {
        name: "Clanging Mechanotentacle",
        mobLevel: 100,
        lootTable: clangingMechanotentacleLootTable,
        icon: 'tentacle',
        hue: NO_HUE,
        desc: "A.M., worst of all, has a vivid imagination."
    },
    "Razor Spitter": {
        name: "Razor Spitter",
        mobLevel: 101,
        lootTable: razorSpitterLootTable,
        icon: 'screamer',
        hue: RED_HUE,
        desc: "A.M., worst of all, has a vivid imagination."
    },
    "Resurrected Meat-sludge": {
        name: "Resurrected Meat-sludge",
        mobLevel: 103,
        lootTable: resurrectedMeatSludgeLootTable,
        icon: 'slime',
        hue: RED_HUE,
        desc: "A.M., worst of all, has a vivid imagination."
    },
    "Warped Man": {
        name: "Warped Man",
        mobLevel: 106,
        lootTable: warpedManLootTable,
        icon: 'miscreant',
        hue: RED_HUE,
        desc: "A.M., worst of all, has a vivid imagination."
    },
    "Hairy Dreadbeast": {
        name: "Hairy Dreadbeast",
        mobLevel: 110,
        lootTable: hairyDreadbeastLootTable,
        icon: 'dreadbeast',
        hue: BROWN_HUE,
        desc: "Hairy and scary."
    },
    "A.M. Plaything": {
        name: "A.M. Plaything",
        mobLevel: 115,
        lootTable: amPlaythingLootTable,
        icon: 'slime',
        hue: YELLOW_HUE,
        desc: "A.M., worst of all, has a vivid imagination."
    },

    "Impact Survivor": {
        name: "Impact Survivor",
        mobLevel: 110,
        lootTable: impactSurvivorLootTable,
        icon: 'survivor',
        hue: BROWN_HUE,
        desc: "Fiend of a world absent virtue."
    },
    "Ion Breather": {
        name: "Ion Breather",
        mobLevel: 111,
        lootTable: ionBreatherLootTable,
        icon: 'undead',
        hue: YELLOW_HUE,
        desc: "You don't realize what you have until it's gone."
    },
    "Plasma Junker": {
        name: "Plasma Junker",
        mobLevel: 113,
        lootTable: plasmaJunkerLootTable,
        icon: 'knight',
        hue: BROWN_HUE,
        desc: "If it beeps, I can scrap it."
    },
    "Post-stellar Screamer": {
        name: "Post-stellar Screamer",
        mobLevel: 116,
        lootTable: poststellarScreamerLootTable,
        icon: 'screamer',
        hue: DARK_BLUE_HUE,
        desc: "The silence forewarns the screaming."
    },
    "Super Dreadbeast": {
        name: "Super Dreadbeast",
        mobLevel: 120,
        lootTable: superDreadbeastLootTable,
        icon: 'dreadbeast',
        hue: GREEN_HUE,
        desc: "Particularly dreadful as far as dreadbeasts go."
    },
    "Student of Syzygy": {
        name: "Student of Syzygy",
        mobLevel: 125,
        lootTable: studentofSyzygyLootTable,
        icon: 'wizard',
        hue: YELLOW_HUE,
        desc: "He who has given the sun shall take the stars."
    },

    "Echo of Roc": {
        name: "Echo of Roc",
        mobLevel: 140,
        lootTable: mythEnemyLootTable,
        armorClass: 0.022,
        icon: 'bird',
        hue: YELLOW_HUE,
        desc: "(ROC) (Roc) (roc)"
    },
    "Echo of Medusa": {
        name: "Echo of Medusa",
        mobLevel: 141,
        lootTable: mythEnemyLootTable,
        armorClass: 0.024,
        icon: 'succubus',
        hue: DARK_GREEN_HUE,
        desc: "(MEDUSA) (Medusa) (medusa)"
    },
    "Echo of Minotaur": {
        name: "Echo of Minotaur",
        mobLevel: 142,
        lootTable: mythEnemyLootTable,
        armorClass: 0.026,
        icon: 'cow',
        hue: BROWN_HUE,
        desc: "(MINOTAUR) (Minotaur) (minotaur)"
    },
    "Echo of Cerberus": {
        name: "Echo of Cerberus",
        mobLevel: 143,
        lootTable: mythEnemyLootTable,
        armorClass: 0.028,
        desc: "(CERBERUS) (Cerberus) (cerberus)",
        icon: 'wolf',
        hue: RED_HUE
    },
    "Echo of Basilisk": {
        name: "Echo of Basilisk",
        mobLevel: 144,
        lootTable: mythEnemyLootTable,
        armorClass: 0.030,
        desc: "(BASILISK) (Basilisk) (basilisk)",
        icon: 'medium_dragon',
        hue: BLUE_HUE
    },
    "Echo of Chimera": {
        name: "Echo of Chimera",
        mobLevel: 145,
        lootTable: mythEnemyLootTable,
        armorClass: 0.032,
        desc: "(CHIMERA) (Chimera) (chimera)",
        icon: 'cat',
        hue: YELLOW_HUE
    },
    "Echo of Hydra": {
        name: "Echo of Hydra",
        mobLevel: 146,
        lootTable: mythEnemyLootTable,
        armorClass: 0.034,
        desc: "(HYDRA) (Hydra) (hydra)",
        icon: 'hydra',
        hue: GREEN_HUE
    },
    "Echo of Kraken": {
        name: "Echo of Kraken",
        mobLevel: 147,
        lootTable: mythEnemyLootTable,
        armorClass: 0.036,
        desc: "(KRAKEN) (Kraken) (kraken)",
        icon: 'tentacle',
        hue: LIGHT_BLUE_HUE
    },
    "Echo of Fenrir": {
        name: "Echo of Fenrir",
        mobLevel: 148,
        lootTable: mythEnemyLootTable,
        armorClass: 0.038,
        desc: "(FENRIR) (Fenrir) (fenrir)",
        icon: 'wolf',
        hue: NO_HUE
    },
    "Echo of Jörmungandr": {
        name: "Echo of Jörmungandr",
        mobLevel: 149,
        lootTable: mythEnemyLootTable,
        armorClass: 0.04,
        desc: "(JÖRMUNGANDR) (Jörmungandr) (jörmungandr)",
        icon: 'sea_beast',
        hue: DARK_BLUE_HUE
        
    },
    "Iucophage, Bulwark Titan": {
        name: "Iucophage, Bulwark Titan",
        mobLevel: 150,
        lootTable: bulwarkTitanLootTable,
        armorClass: 0.1,
        desc: "The youngest of all titans, wrought by the Maker to protect the others.",
        icon: 'iucophage',
        hue: BROWN_HUE
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
        template.armorClass,
        template.icon,
        template.hue,
        template.desc
    );
}