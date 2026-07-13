const knownWorlds = new Set([]);

function worldsKnown(worldName){
    return knownWorlds.has(worldName);
}

const WORLD_DEFS = {
    "Rivertown Shire": {
        name: "Rivertown Shire",
        worldColor: "#aa7777",
        act: 1,
        enemyList: [
            ["Dirty Goblin", 1],
            ["Dirty Goblin", 2],
            ["Common Thief", 1],
            ["Common Thief", 2],
            ["Common Thief", 3],
            ["Mysterious Villain", 2],
            ["Mysterious Villain", 3],
            ["Mysterious Villain", 4],
        ]
    },
    "Greater Rivertown": {
        name: "Greater Rivertown",
        worldColor: "#aa7777",
        act: 1,
        enemyList: [
            ["Mysterious Villain", 4],
            ["Mysterious Villain", 5],
            ["Forest Bandit", 5],
            ["Forest Bandit", 6],
            ["Creek Hunter", 5],
            ["Creek Hunter", 6],
            ["Creek Hunter", 7],
            ["Woods Lurker", 6],
            ["Woods Lurker", 7],
        ]
    },
    "The Longroad": {
        name: "The Longroad",
        worldColor: "#aa7777",
        act: 1,
        enemyList: [
            ["Longroad Wild Dog", 6],
            ["Longroad Wild Dog", 7],
            ["Highwayman", 6],
            ["Highwayman", 7],
            ["Highwayman", 8],
            ["Footpad", 6],
            ["Footpad", 7],
            ["Footpad", 8],
            ["Longroad Alpha Dog", 8],
            ["Longroad Alpha Dog", 9],
            ["Gnoll Gang Road Stalker", 9],
            ["Gnoll Gang Road Stalker", 10],
            ["Gnoll Gang Footsoldier", 10],
            ["Gnoll Gang Footsoldier", 11],
            ["Gnoll Gang Boss", 11],
        ]
    },
    "Black Swamp": {
        name: "Black Swamp",
        worldColor: "#aa7777",
        act: 1,
        enemyList: [
            ["Black Magician", 7],
            ["Black Magician", 8],
            ["Black Magician", 9],
            ["Woods Lurker", 7],
            ["Soul Unionist", 9],
            ["Soul Unionist", 10],
            ["Dark Brotherhood Commander", 10],
            ["Dark Brotherhood Commander", 11],
        ]
    },
    "Spirit Realm Threshold": {
        name: "Spirit Realm Threshold",
        worldColor: "#aa7777",
        act: 1,
        enemyList: [
            ["Realm Keeper", 10],
            ["Realm Keeper", 11],
            ["Shadow Soldier", 11],
            ["Shadow Soldier", 12],
            ["Death Viewer", 12],
            ["Death Viewer", 13],
        ]
    },
    "Faraway Kingdom": {
        name: "Faraway Kingdom",
        worldColor: "#aa7777",
        act: 1,
        enemyList: [
            ["Faraway Scoundrel", 12],
            ["Faraway Scoundrel", 13],
            ["Faraway Scoundrel", 14],
            ["Frozen Invader", 12],
            ["Frozen Invader", 13],
            ["Faraway Archvillain", 14],
            ["Faraway Archvillain", 15],
            ["Frozen Lieutenant", 14],
            ["Frozen Lieutenant", 15],
        ]
    },
    "Mountainland Foothills": {
        name: "Mountainland Foothills",
        worldColor: "#aa7777",
        act: 1,
        enemyList: [
            ["Dirt Dwarf Brute", 13],
            ["Dirt Dwarf Brute", 14],
            ["Dirt Dwarf Ambusher", 13],
        ]
    },
    "Mountainland Underworld": {
        name: "Mountainland Underworld",
        worldColor: "#aa7777",
        act: 1,
        enemyList: [
            ["Dirt Dwarf Ambusher", 15],
            ["Fire Cult Sapper", 15],
            ["Fire Cult Sapper", 16],
            ["Fire Cult Slave", 15],
            ["Fire Cult Scientist", 16],
        ]
    },
    "Mountainland City": {
        name: "Mountainland City",
        worldColor: "#aa7777",
        act: 1,
        enemyList: [
            ["Fire Cult Sapper", 17],
            ["Doom Maniac", 17],
            ["Doom Maniac", 18],
            ["Doom Maniac", 19],
            ["Doom Maniac", 20],
            ["Doom Maniac", 21],
            ["Doom Maniac", 22],
            ["Doom Maniac", 23],
            ["Doom Maniac", 24],
            ["Living Fire", 18],
            ["Living Fire", 19],
            ["Living Fire", 20],
            ["Living Fire", 21],
            ["Living Fire", 22],
            ["Living Fire", 23],
            ["Living Fire", 24],
            ["Farside Communer", 19],
            ["Farside Communer", 20],
            ["Farside Communer", 21],
            ["Farside Communer", 22],
            ["Farside Communer", 23],
            ["Farside Communer", 24],
            ["Dark Brotherhood Insider", 20],
            ["Dark Brotherhood Insider", 21],
            ["Dark Brotherhood Insider", 22],
            ["Dark Brotherhood Insider", 23],
            ["Dark Brotherhood Insider", 24],
            ["Magma Being", 21],
            ["Magma Being", 22],
            ["Magma Being", 23],
            ["Magma Being", 24],
            ["Disguised Yetimage", 22],
            ["Disguised Yetimage", 23],
            ["Disguised Yetimage", 24],
            ["Golem Carver", 23],
            ["Golem Carver", 24],
            ["Mountain King Double-Agent", 24],
        ]
    },
    "Farside Hideout": {
        name: "Farside Hideout",
        worldColor: "#aa7777",
        act: 1,
        enemyList: [
            ["Farside Communer", 20],
            ["Farside Communer", 21],
            ["Farside Communer", 22],
            ["Farside Scientist", 20],
            ["Farside Scientist", 21],
            ["Farside Scientist", 22],
            ["Farside Scientist", 23],
            ["Farside Officer", 23],
        ]
    },
}