const knownWorlds = new Set([]);

function worldsKnown(worldName){
    return knownWorlds.has(worldName);
}

const WORLD_DEFS = {
    "Default World": {
        name: "Default World",
        worldColor: "#cdffccff",
        act: 1,
        enemies: [
            "Common Thief",
            "Dirty Goblin",
            "Mysterious Villain",
            
        ]
    },
    "Spirit World": {
        name: "Spirit World",
        worldColor: "#ebcaffff",
        act: 1,
        enemies: [
            "Spectral Fiend",
            "Spirit Eater",
            "Ghastly Horror",
            "Banshee Screamer",
        ]
    },
    "Desert World": {
        name: "Desert World",
        worldColor: "#ffe4aaff",
        act: 1,
        enemies: [
            "Desert Wraith",
            "Bile Spitter",
            "Sandstone Golem",
            "Desert Zealot",
        ]
    },
    "Hell World": {
        name: "Hell World",
        worldColor: "#ffceceff",
        act: 1,
        enemies: [
            "Blazing Bovine",
            "Infernal Insect",
            "Fiery Fangtooth",
            "Sinful Succubus",
            "Dreadful Dino",
            "Vile Vulture",
        ]
    },
    "Ice World": {
        name: "Ice World",
        worldColor: "#bbf1ffff",
        act: 2,
        enemies: [
            "Iceologer",
            "Spooky Revenant",
            "Ice Bear",
            "Animated Weapon",
            "Foul Necromancer",
            "Boss Yeti"
        ]
    },
    "Yeti Cave World": {
        name: "Yeti Cave World",
        worldColor: "rgb(77, 158, 179)",
        act: 2,
        enemies: [
            "Alpha Yeti",
            "Alpha Yeti Underling",
            "Alpha Yeti Underling",
            "Alpha Yeti Underling",
            "Alpha Yeti Underling",
            "Alpha Yeti Underling",
            "Alpha Yeti Underling",
            "Alpha Yeti Underling",
            "Alpha Yeti Underling",
            "Alpha Yeti Underling",
        ]
    },
    "Dragon Swamp World": {
        name: "Dragon Swamp World",
        worldColor: "#93ffd2ff",
        act: 2,
        enemies: [
            "Juvenile Green Drake",
            "Juvenile Red Drake",
            "Juvenile Blue Drake",
            "Juvenile Black Drake",
            "Adolescent Green Drake",
            "Adolescent Red Drake",
            "Adolescent Blue Drake",
            "Adolescent Black Drake",
            "Green Drake",
            "Red Drake",
            "Blue Drake",
            "Black Drake",
            "Giant Anaconda",
            "Vainglorious Dragon Hunter",
        ]
    },
    "Gold World": {
        name: "Gold World",
        worldColor: "#eff8a0ff",
        act: 2,
        enemies: [
            "Boss Goblin",
            "Goblin Loanmaster",
            "Goblin Headcracker",
            "Gold Goblin Golem",
        ]
    },
    "Arcane World": {
        name: "Arcane World",
        worldColor: "#dbceffff",
        act: 3,
        enemies: [
            "Keeper of Seals",
        ]
    },
    "Arcane World (Part 2)": {
        name: "Arcane World (Part 2)",
        worldColor: "#cdbaffff",
        act: 3,
        enemies: [
            "Arcane Soul Stitcher",
            "Arcane Knight",
            "Arcane Devotee",
            "Arcane Battlemage",
            "Arcane Golem",
        ]
    },
    "Space World": {
        name: "Space World",
        worldColor: "#9791a7ff",
        act: 3,
        enemies: [
            "Green Laser Alien",
            "Grey Laser Alien",
            "Ugly Bug Alien",
            "Superstellar Space Raider",
            "Living Comet",
            "Moon Rock Golem",
        ]
    },
    "Volcano Planet World": {
        name: "Volcano Planet World",
        worldColor: "#bb7a6aff",
        act: 4,
        enemies: [
            "Obsidian Sphere",
            "Lava Scorpion",
            "Magma Drinker",
            "Basalt Golem",
            "Fiery Dreadbeast",
            "Molten Giant",
        ]
    },
    "Pleasure World": {
        name: "Pleasure World",
        worldColor: "#ee94c8ff",
        act: 4,
        enemies: [
            "Underworld Gangster",
            "Subterranean",
            "Chaos Infiltrator",
            "Alien Pimp",
            "Veiled Dreadbeast",
            "Uncompromising Hedonist",
        ]
    },
    "A.M. World": {
        name: "A.M. World",
        worldColor: "#b8d5e9ff",
        act: 4,
        enemies: [
            "Razor Spitter",
            "Warped Man",
            "Clanging Mechanotentacle",
            "Resurrected Meat-sludge",
            "Hairy Dreadbeast",
            "A.M. Plaything",
        ]
    },
    "Stellar Remnant World": {
        name: "Stellar Remnant World",
        worldColor: "#bca3ccff",
        act: 4,
        enemies: [
            "Ion Breather",
            "Impact Survivor",
            "Plasma Junker",
            "Post-stellar Screamer",
            "Super Dreadbeast",
            "Student of Syzygy",
        ]
    },
    "Default World (Part 2)": {
        name: "Default World (Part 2)",
        worldColor: "#bfffbeff",
        act: 1,
        enemies: [
            "Uncommon Bandit",
            "Filthy Goblin",
            "Overgrown Vole",
            "Mysterious Villain",
        ]
    },
    "Myth World": {
        name: "Myth World",
        worldColor: "#ccbea3ff",
        act: 5,
        enemies: [
            "Echo of Roc",
            "Echo of Medusa",
            "Echo of Minotaur",
            "Echo of Cerberus",
            "Echo of Basilisk",
            "Echo of Chimera",
            "Echo of Hydra",
            "Echo of Kraken",
            "Echo of Fenrir",
            "Echo of Jörmungandr",
        ]
    },

    "Titan Boss World": {
        name: "Titan Boss World",
        worldColor: "#aa7777",
        act: 5,
        enemies: [
            "Iucophage, Bulwark Titan"
        ]
    },
}