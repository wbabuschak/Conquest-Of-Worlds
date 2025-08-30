const knownWorlds = new Set([]);

function worldsKnown(worldName){
    return knownWorlds.has(worldName);
}

const WORLD_DEFS = {
    "Default World": {
        name: "Default World",
        worldColor: "#cdffccff",
        enemies: [
            "Common Thief",
            "Dirty Goblin",
            "Mysterious Villain",
        ]
    },
    "Spirit World": {
        name: "Spirit World",
        worldColor: "#ebcaffff",
        enemies: [
            "Spectral Fiend",
            "Spirit Eater",
            "Ghastly Horror",
        ]
    },
    "Desert World": {
        name: "Desert World",
        worldColor: "#ffe4aaff",
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
        enemies: [
            "Iceologer",
            "Spooky Revenant",
            "Ice Bear",
            "Animated Weapon",
            "Foul Necromancer",
        ]
    },
    "Dragon Swamp World": {
        name: "Dragon Swamp World",
        worldColor: "#93ffd2ff",
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
        enemies: [
            "Keeper of Seals",
        ]
    },
    "Arcane World (Part 2)": {
        name: "Arcane World (Part 2)",
        worldColor: "#cdbaffff",
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
        worldColor: "#632d2dff",
        enemies: [
            "Iucophage, Bulwark Titan"
        ]
    },
}