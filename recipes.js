const recipes = [
    
    // DEFAULT WORLD
    new Recipe([
    Item.createItem("Dirty Shoes", 1),
    Item.createItem("Gold Coin", 5),
    ], Item.createItem("Shined Shoes", 1)),

    new Recipe([
    Item.createItem("Gold Coin", 180),
    Item.createItem("Common Dagger"),
    ], Item.createItem("Gilded Dagger", 1)),

    new Recipe([
    Item.createItem("Cloth Scrap", 14),
    Item.createItem("Spectral Essence"),
    ], Item.createItem("Spectral Cowl", 1)),

    // SPIRIT WORLD
    
    new Recipe([
    Item.createItem("Shined Shoes", 1),
    Item.createItem("Bone Chip", 2),
    Item.createItem("Greater Spectral Essence"),
    ], Item.createItem("Skullstompers", 1)),

    // DESERT WORLD

    new Recipe([
    Item.createItem("Zealot Essence", 3),
    Item.createItem("Shattered Havoc Hilt"),
    Item.createItem("Broken Havoc Blade"),
    ], Item.createItem("Havoc Blade", 1)),

    new Recipe([
    Item.createItem("Token of Faith", 1),
    Item.createItem("Water Jar", 1),
    Item.createItem("Venomous Gland", 1),
    Item.createItem("Drained Spirit", 1),
    ], Item.createItem("Symbol of the Desert", 1)),

    // ICE WORLD

    new Recipe([
    Item.createItem("Cracked Gemstone Amulet"),
    Item.createItem("Greater Spectral Essence"),
    Item.createItem("Frozen Essence"),
    ], Item.createItem("Activated Gemstone Amulet", 1)),

    new Recipe([
    Item.createItem("Magical Essence", 30),
    Item.createItem("Nature's Wrath"),
    ], Item.createItem("Nature's Fury", 1)),

    // DRAGON SWAMP WORLD

    new Recipe([
    Item.createItem("Dragon Scale", 400),
    Item.createItem("Green Cape"),
    ], Item.createItem("Green Dragonscale Cape", 1)),
    
    new Recipe([
    Item.createItem("Dragon Scale", 600),
    Item.createItem("Black Cape"),
    ], Item.createItem("Black Dragonscale Cape", 1)),

    new Recipe([
    Item.createItem("Dragon Scale", 800),
    Item.createItem("Blue Cape"),
    ], Item.createItem("Blue Dragonscale Cape", 1)),

    new Recipe([
    Item.createItem("Dragon Scale", 1000),
    Item.createItem("Red Cape"),
    ], Item.createItem("Red Dragonscale Cape", 1)),

    // ARCANE WORLD

    new Recipe([
    Item.createItem("Magical Essence", 1200),
    Item.createItem("Arcane Treads"),
    ], Item.createItem("Treads of Arcane Stabilization", 1)),

    new Recipe([
    Item.createItem("Magical Essence", 1000),
    Item.createItem("Arcane Gauntlets"),
    ], Item.createItem("Gauntlets of Arcane Postmultiplication", 1)),

    new Recipe([
    Item.createItem("Magical Essence", 800),
    Item.createItem("Arcane Helmet"),
    ], Item.createItem("Helmet of Arcane Protection", 1)),

    new Recipe([
    Item.createItem("Magical Essence", 600),
    Item.createItem("Arcane Vest"),
    ], Item.createItem("Vest of Arcane Devotion", 1)),

    new Recipe([
    Item.createItem("Magical Essence", 400),
    Item.createItem("Arcane Staff"),
    ], Item.createItem("Staff of Arcane Domination", 1)),

    // STELLAR REMNANT WORLD

    new Recipe([
    Item.createItem("Volcano Planet Essence", 8),
    Item.createItem("Pleasure Essence", 4),
    Item.createItem("A.M. Essence", 2),
    Item.createItem("Stellar Remnant Essence", 1),
    Item.createItem("Solar Debris", 999),
    Item.createItem("Essence-Starved Tome", 1),
    ], Item.createItem("Degenerate Star Tome", 1)),

    new Recipe([
    Item.createItem("Volcano Planet Essence", 8),
    Item.createItem("Pleasure Essence", 4),
    Item.createItem("A.M. Essence", 2),
    Item.createItem("Stellar Remnant Essence", 1),
    Item.createItem("Solar Debris", 999),
    Item.createItem("Essence-Starved Boots", 1),
    ], Item.createItem("Degenerate Star Boots", 1)),

    new Recipe([
    Item.createItem("Volcano Planet Essence", 8),
    Item.createItem("Pleasure Essence", 4),
    Item.createItem("A.M. Essence", 2),
    Item.createItem("Stellar Remnant Essence", 1),
    Item.createItem("Solar Debris", 999),
    Item.createItem("Essence-Starved Belt", 1),
    ], Item.createItem("Degenerate Star Belt", 1)),

    new Recipe([
    Item.createItem("Volcano Planet Essence", 8),
    Item.createItem("Pleasure Essence", 4),
    Item.createItem("A.M. Essence", 2),
    Item.createItem("Stellar Remnant Essence", 1),
    Item.createItem("Solar Debris", 999),
    Item.createItem("Essence-Starved Hood", 1),
    ], Item.createItem("Degenerate Star Hood", 1)),

    new Recipe([
    Item.createItem("Volcano Planet Essence", 8),
    Item.createItem("Pleasure Essence", 4),
    Item.createItem("A.M. Essence", 2),
    Item.createItem("Stellar Remnant Essence", 1),
    Item.createItem("Solar Debris", 999),
    Item.createItem("Essence-Starved Coat", 1),
    ], Item.createItem("Degenerate Star Coat", 1)),

    // TITAN BOSS WORLD

    new Recipe([
    Item.createItem("Titan Essence", 6),
    Item.createItem("Wraps of Temptation")
    ], Item.createItem("Wraps of the Great Deceiver", 1)),

    new Recipe([
    Item.createItem("Titan Essence", 6),
    Item.createItem("Treads of Crushing Depths")
    ], Item.createItem("Treads of Unfathomable Pressure", 1)),

]