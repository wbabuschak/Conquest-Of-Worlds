const recipes = [
    
    new Recipe([
    Item.createItem("Ramshackle Shank", 1),
    Item.createItem("Deadly Poison", 2),
    ], Item.createItem("Dirty Dagger", 1)),

    new Recipe([
    Item.createItem("Filthy Boots", 1),
    Item.createItem("Gold Coin", 30),
    ], Item.createItem("Walking Boots", 1)),

    new Recipe([
    Item.createItem("Filthy Boots", 1),
    Item.createItem("Gold Coin", 15),
    Item.createItem("Cloth Scrap", 4),
    ], Item.createItem("Wading Boots", 1)),


    new Recipe([
    Item.createItem("Forest Leather Vest", 1),
    Item.createItem("Cloth Scrap", 30),
    Item.createItem("Fur Scrap", 2),
    ], Item.createItem("Reinforced Leather Vest", 1)),

    new Recipe([
    Item.createItem("Forest Leather Boots", 1),
    Item.createItem("Cloth Scrap", 30),
    Item.createItem("Fur Scrap", 2),
    ], Item.createItem("Reinforced Leather Boots", 1)),

    new Recipe([
    Item.createItem("Forest Leather Gloves", 1),
    Item.createItem("Cloth Scrap", 30),
    Item.createItem("Fur Scrap", 2),
    ], Item.createItem("Reinforced Leather Gloves", 1)),

    new Recipe([
    Item.createItem("Forest Leather Hood", 1),
    Item.createItem("Cloth Scrap", 30),
    Item.createItem("Fur Scrap", 2),
    ], Item.createItem("Reinforced Leather Hood", 1)),

    new Recipe([
    Item.createItem("Spider Fang", 2),
    Item.createItem("Dog Tooth", 48),
    ], Item.createItem("Tooth Necklace", 1)),

    new Recipe([
    Item.createItem("Reaper Cloak", 1),
    Item.createItem("High Quality Cloth Scrap", 42),
    Item.createItem("Spectral Essence", 10),
    Item.createItem("Magical Essence", 20),
    ], Item.createItem("Enchanted Reaper Cloak", 1)),

    new Recipe([
    Item.createItem("Broken Mailparts", 80),
    Item.createItem("Stolen Chestmold", 1),
    Item.createItem("Pilfered Tool", 1),
    ], Item.createItem("Repaired Mail Breastplate", 1)),

    new Recipe([
    Item.createItem("Broken Mailparts", 60),
    Item.createItem("Stolen Handsmold", 1),
    Item.createItem("Pilfered Tool", 1),
    ], Item.createItem("Repaired Mail Gauntlets", 1)),

    new Recipe([
    Item.createItem("Frozen Legion Banner Tatter", 18),
    Item.createItem("Frozen Essence", 12),
    ], Item.createItem("Frozen Legion Banner", 1)),

    new Recipe([
    Item.createItem("Yetimagician Skull Fragment", 100),
    Item.createItem("Frozen Essence", 10),
    ], Item.createItem("Yetimagician Skull", 1)),

    new Recipe([
    Item.createItem("Mussel Shell", 8),
    Item.createItem("Dirt Essence", 6),
    ], Item.createItem("Mussel Shell Helmet", 1)),

    new Recipe([
    Item.createItem("Mussel Shell", 8),
    Item.createItem("Dirt Essence", 6),
    ], Item.createItem("Mussel Shell Vest", 1)),

    new Recipe([
    Item.createItem("Mussel Shell", 8),
    Item.createItem("Dirt Essence", 6),
    ], Item.createItem("Mussel Shell Gauntlets", 1)),

    new Recipe([
    Item.createItem("Mussel Shell", 8),
    Item.createItem("Dirt Essence", 6),
    ], Item.createItem("Mussel Shell Treads", 1)),

    new Recipe([
    Item.createItem("Fire Emblem", 1),
    Item.createItem("Fire Essence", 1000),
    Item.createItem("Forgemaster's Vice", 1),
    ], Item.createItem("Blazing Sigil", 1)),

    new Recipe([
    Item.createItem("Staff of Firebolt", 1),
    Item.createItem("Fire Essence", 2000),
    Item.createItem("Forgemaster's Vice", 2),
    ], Item.createItem("Staff of Fireball", 1)),

    new Recipe([
    Item.createItem("Fragment of Ra'oulgh", 3),
    Item.createItem("Fire Essence", 1),
    ], Item.createItem("Glyph of Ra'oulgh", 1)),

    new Recipe([
    Item.createItem("Glyph of Ra'oulgh", 3),
    Item.createItem("Fire Essence", 1),
    ], Item.createItem("Bolt of Ra'oulgh", 1)),

    new Recipe([
    Item.createItem("Bolt of Ra'oulgh", 3),
    Item.createItem("Fire Essence", 1),
    ], Item.createItem("Node of Ra'oulgh", 1)),

    new Recipe([
    Item.createItem("Node of Ra'oulgh", 3),
    Item.createItem("Fire Essence", 1),
    ], Item.createItem("Icon of Ra'oulgh", 1)),

    new Recipe([
    Item.createItem("Yetimagic Enchantment Rod", 1),
    Item.createItem("Yetimagic Essence", 9),
    ], Item.createItem("Lesser Yetimagic Enchantment", 1)),

    new Recipe([
    Item.createItem("Yetimagic Enchantment Rod", 1),
    Item.createItem("Lesser Yetimagic Enchantment", 9),
    Item.createItem("Yetimagic Essence", 81),
    ], Item.createItem("Lesser Yetimagic Enchantment", 1)),

    new Recipe([
    Item.createItem("Lenscrafter Tool", 1),
    Item.createItem("Lenscrafter Tool Lockout Key", 1),
    Item.createItem("Farside Viewing Lens", 2),
    Item.createItem("Infused Metal Scrap", 10),
    ], Item.createItem("Improved Farside Viewing Lens", 1)),

    new Recipe([
    Item.createItem("Lenscrafter Tool", 1),
    Item.createItem("Lenscrafter Tool Lockout Key", 1),
    Item.createItem("Improved Farside Viewing Lens", 2),
    Item.createItem("Infused Metal Scrap", 100),
    ], Item.createItem("Perfect Farside Viewer", 1)),

    new Recipe([
    Item.createItem("Doom Hood", 1),
    Item.createItem("Greater Magical Essence", 3),
    Item.createItem("Frozen Essence", 3),
    ], Item.createItem("Doomice Hood", 1)),

    new Recipe([
    Item.createItem("Frost Cloak", 1),
    Item.createItem("Greater Magical Essence", 3),
    Item.createItem("Shadow Essence", 3),
    ], Item.createItem("Shadowfrost Cloak", 1)),

    new Recipe([
    Item.createItem("Shadowfrost Wand", 1),
    Item.createItem("Greater Magical Essence", 4),
    Item.createItem("Shadow Essence", 4),
    Item.createItem("Frozen Essence", 4),
    ], Item.createItem("Doomfrost Wand", 1)),

]

