var WorldState = [
    {
        name: "Modern Era",
        // An Era's Color Pallet consists of an array, with Primary at index 0, secondary at index 1, tertiary (like borders) at index 2, and text at index 3
        eraUnlocked: true,
        colorPallet: ["slategrey", "darkblue", "yellow", "red"],
        currency: "Ruples",
        ascensionMultiplier: 0,
        // 0:MaxHealth, 1:Health. 2:Power, 3:Damage, 4:Defense, 5:Money
        stats: [10, 10, 1, 1, 1, 0],
        // Unlocks ascension
        triggerTimeMachine: false,
        // modern: tutorial1, tutorial2, Boat, Rapture, Spaceship, Flint
        //TODO-Return the variables back to false when done
        triggerMines: [true, false, false, false, false, false],
        // modern: tutorial1, tutorial2, forest, colloseum
        triggerDungeons: [true, false, false, false],
        warehouses: 0,
        shopUpgrades: [0, 0, 0, 0, 0, 0],
        // 1:road, 2:stand, 3:small, 4:liscence, 5:large
        shopLevel: 1,
        // 0:head, 1:chest, 2:weapon, 3:legs
        // equipment format: ["name", {Power, Damage, Defense, Weight}]
        equippableItems: [[], [], [], []],
        // 0:head, 1:chest, 2:weapon, 3:legs
        equippedItems: [{name: "empty", power: 0, defense: 0, damage: 0, weight: 0}, {name: "empty", power: 0, defense: 0, damage: 0, weight: 0}, {name: "empty", power: 0, defense: 0, damage: 0, weight: 0}, {name: "empty", power: 0, defense: 0, damage: 0, weight: 0}],
        // consumables format: ["name", "amount held", "affect", "affectAmount"]
        consumables: [],
        // otherMaterials format: ["name", "amount held"]
        otherMaterials: [],
        // format: ["name", {stats}, "assignedJob", "assignedLocation"]
        workers: [],
        mines: [
            {
                name: "Isla Nubar Quarry",
                discoveryMessage: "You come across a mine on the island. More of a quarry, really. Yeah, let's go with Quarry.",
                // refresh rate math: (# of materials missing from the mine / 100) / refreshRate = Amount of each material regenerated every minute
                //refreshrate of zero means no refresh
                refreshRate: 1,
                // Materials are stored in an array of arrays, each interior array has the 
                // Material name at index 0, starting amount at index 1, current amount at index 2, difficulty at index 3, held amount at index 4, sellPrice at index 5
                materials: [
                    { name:"Floatstone", capacity: 20, remaining: 20, difficulty: 1, amountHeld: 0, price: 1 },
                    { name:"Lightweight Glue", capacity: 5, remaining: 5, difficulty: 2, amountHeld: 0, price: 2 }
                ]
            },
            {
                name: "John's Mineshaft",
                discoveryMessage: "John was nice enough to let you use his personal mineshaft until you get back on your feet! There's probably wonderous things inside!",
                refreshRate: 2,
                materials: [
                    { name:"Planks of Wood", capacity: 40, remaining: 40, difficulty: 2, amountHeld: 0, price: 3 },
                    { name:"Actually Iron", capacity: 20, remaining: 20, difficulty: 3, amountHeld: 0, price: 6 },
                    { name:"Rope?", capacity: "15", remaining: 15, difficulty: 2, amountHeld: 0, price: 2 }
                ]
            },
            {
                name: "'Not India' Mineshaft",
                discoveryMessage: "The locals show you to a dark cave and beckon you inside. It's a new mineshaft!",
                refreshRate: 5,
                materials: [
                    { name:"Stone", capacity: "1000", remaining: 1000, difficulty: 2, amountHeld: 0, capacity: 4, price: 20 },
                    { name:"Dirt", capacity: "5000", remaining: 5000, difficulty: 1, amountHeld: 0, capacity: 2, price: 20 },
                    { name:"Tin", capacity: "750", remaining: 750, difficulty: 3, amountHeld: 0, capacity: 4, price: 20 },
                    { name:"Iron", capacity: "600", remaining: 600, difficulty: 4, amountHeld: 0, capacity: 9, price: 20 },
                    { name:"Saltpeter", capacity: "200", remaining: 200, difficulty: 2, amountHeld: 0, capacity: 7, price: 20 }
                ]
            },
            {
                name: "Bottom of the Specific Ocean Mineshaft",
                discoveryMessage: "Andrew Ryan would be proud if you even knew who that was.",
                refreshRate: 7,
                materials: [
                    { name:"Clay", capacity: "1000", remaining: 1000, difficulty: 2, amountHeld: 0, capacity: 3, price: 20 },
                    { name:"Diamond", capacity: "50", remaining: 50, difficulty: 20, amountHeld: 0, capacity: 75, price: 20 },
                    { name:"Quartz", capacity: "200", remaining: 200, difficulty: 4, amountHeld: 0, capacity: 30, price: 20 },
                    { name:"Copper", capacity: "400", remaining: 400, difficulty: 3, amountHeld: 0, capacity: 25, price: 20 },
                    { name:"Calcite", capacity: "350", remaining: 350, difficulty: 6, amountHeld: 0, capacity: 20, price: 20 }
                ]
            },
            {
                name: "Asteroid Suspenders",
                discoveryMessage: "These Asteroids do wonders for keeping the universe's pants on!",
                refreshRate: 10,
                materials: [
                    { name:"Sulfer", capacity: "500", remaining: 500, difficulty: 4, amountHeld: 0, capacity: 15, price: 20 },
                    { name:"Silicon", capacity: "1000", remaining: 1000, difficulty: 3, amountHeld: 0, capacity: 20, price: 20 },
                    { name:"Palladium", capacity: "300", remaining: 300, difficulty: 7, amountHeld: 0, capacity: 40, price: 20 },
                    { name:"Ruthenium", capacity: "90", remaining: 90, difficulty: 8, amountHeld: 0, capacity: 80, price: 20 },
                    { name:"Osmium", capacity: "75", remaining: 75, difficulty: 9, amountHeld: 0, capacity: 130, price: 20 }
                ]
            }
        ],
        dungeons: [
            {
                name: "Abandoned Theme Park",
                discoveryMessage: "You come across a weird park on the island. What could be inside?",
                // respawn rate math: enemy health / respawnRate = seconds to respawn, 0 means no respawn
                respawnRate: 1,
                // Enemies are stored in an array of arrays, each interior array has the 
                // Enemy name at index 0, Max Health at index 1, Current Health at index 2, Damage at index 3, Defense at index 4, Drops at index 5, Alive(bool) at index 6
                enemies: [
                    ["Dinosaur Mascot Costume", "5", "5", "2", "1", "Useless Pickaxe", true, "0"]
                ]
            },
            {
                name: "John's Basement",
                discoveryMessage: "John offers you a reward for each can you crush (he just took up recycling).",
                respawnRate: 2,
                // Enemies are stored in an array of arrays, each interior array has the 
                enemies: [
                    ["Pepsi Can", "8", "8", "4", "1", "Cotton", true, "0"]
                ]
            },
            {
                name: "'Not India' Forest",
                discoveryMessage: "This place (that is clearly not India) has a lush forest. You're sure there are treasures and loot to be had galore in there...",
                respawnRate: 4,
                enemies: [
                    ["Angsty Lemur", "10", "10", "5", "3", "Berries", true, "0"],
                    ["Tall Goat", "14", "14", "5", "8", "Half-Chewed Grass", true, "0"],
                    ["Bear", "20", "20", "8", "10", "Bear Claws", true, "0"]
                ]
            },
            {
                name: "'Not India' Colloseum",
                discoveryMessage: "The natives seem to like beating the crap out of eachother in a stone ampitheatre. Might as well give it a shot!",
                respawnRate: 8,
                enemies: [
                    ["Mike (the owner's son)", "15", "15", "3", "20", "Overpriced Armor", true, "0"],
                    ["Kevin (he lifts weights)", "23", "23", "12", "14", "One Dumbell", true, "0"],
                    ["Literally Just A Horse", "30", "30", "17", "20", "Horseshoe", true, "0"],
                    ["El Guapo", "40", "40", "23", "23", "A Sweater", true, "0"]
                ]
            }
        ]
    },
    {
        name: "Industrial Era",
        eraUnlocked: false,
        colorPallet: ["tan", "brown", "black", "yellow"],
        currency: "Whiskey",
        ascensionMultiplier: 0,
        // 0:MaxHealth, 1:Health. 2:Power, 3:Damage, 4:Defense, 6:Money
        stats: [10, 10, 1, 1, 1, 0],
        // Unlocks ascension
        triggerTimeMachine: false,
        // industrial: east, Midwest, wild west
        triggerMines: [true, false, false],
        // industrial: raid town, Frontier
        triggerDungeons: [true, false],
        warehouses: 0,
        shopUpgrades: [0, 0, 0, 0, 0, 0],
        // 1:road, 2:stand, 3:small, 4:liscence, 5:large
        shopLevel: 1,
        // equipment format: ["name", {Power, Damage, Defense, Weight}]
        equippableItems: [[], [], [], []],
        equippedItems: [{name: "empty", power: 0, defense: 0, damage: 0, weight: 0}, {name: "empty", power: 0, defense: 0, damage: 0, weight: 0}, {name: "empty", power: 0, defense: 0, damage: 0, weight: 0}, {name: "empty", power: 0, defense: 0, damage: 0, weight: 0}],
        // consumables format: ["name", "amount held", "affect", "affectAmount"]
        consumables: [],
        // otherMaterials format: ["name", "amount held"]
        otherMaterials: [],
        // format: ["name", {stats}, "assignedJob", "assignedLocation"]
        workers: [],
        mines: [
            {
                name: "Relatively Tame East Mine",
                discoveryMessage: "This place really is quite peaceful. You're not sure if that's because everyone left to find decent ore and the mines are nearly useless to commonfolk now.",
                refreshRate: 15,
                materials: [
                    { name:"Mac N Cheese Crayon", capacity: 5000, remaining: 5000, difficulty: 2, amountHeld: 0, price: 20 },
                    { name:"Grey Crayon", capacity: 10000, remaining: 10000, difficulty: 2, amountHeld: 0, price: 20 },
                    { name:"Coal", capacity: 3000, remaining: 3000, difficulty: 3, amountHeld: 0, price: 20 },
                    { name:"Cement", capacity: 3000, remaining: 3000, difficulty: 4, amountHeld: 0, price: 20 },
                    { name:"Uranium", capacity: 400, remaining: 400, difficulty: 7, amountHeld: 0, price: 20 }
                ]
            },
            {
                name: "Slightly Misbehaved Midwest Mine",
                discoveryMessage: "Despite their calm demeanor, the people around here can let loose to some extent. You'd put them at about 50% less tamed than the last batch!",
                refreshRate: 20,
                materials: [
                    { name:"Pyrite", capacity: 2500, remaining: 2500, difficulty: 4, amountHeld: 0, price: 20 },
                    { name:"Nickel", capacity: 5000, remaining: 5000, difficulty: 4, amountHeld: 0, price: 20 },
                    { name:"Gravel", capacity: 10000, remaining: 10000, difficulty: 2, amountHeld: 0, price: 20 },
                    { name:"Zinc", capacity: 900, remaining: 900, difficulty: 3, amountHeld: 0, price: 20 },
                    { name:"Bauxite", capacity: 750, remaining: 750, difficulty: 5, amountHeld: 0, price: 20 }
                ]
            },
            {
                name: "Wild Wild West Mine",
                discoveryMessage: "They're out of control here. It's unsafe. Anarchy seems to reign. This may be your last mining expedition.",
                refreshRate: 25,
                materials: [
                    { name:"GOLD", capacity: 250, remaining: 250, difficulty: 5, amountHeld: 0, price: 20 },
                    { name:"Silver", capacity: 500, remaining: 500, difficulty: 5, amountHeld: 0, price: 20 },
                    { name:"Molybdenum", capacity: 750, remaining: 750, difficulty: 6, amountHeld: 0, price: 20 },
                    { name:"Phosphate", capacity: 400, remaining: 400, difficulty: 7, amountHeld: 0, price: 20 },
                    { name:"Feldspar", capacity: 150, remaining: 150, difficulty: 6, amountHeld: 0, price: 20 }
                ]
            }
        ],
        dungeons: [
            {
                name: "Abandoned Theme Park",
                discoveryMessage: "You come across a weird park on the island. What could be inside?",
                // respawn rate math: enemy health / respawnRate = seconds to respawn, 0 means no respawn
                respawnRate: 1,
                // Enemies are stored in an array of arrays, each interior array has the 
                // Enemy name at index 0, Max Health at index 1, Current Health at index 2, Damage at index 3, Defense at index 4, Drops at index 5
                enemies: [
                    ["Dinosaur Mascot Costume", "5", "5", "2", "1", "Useless Pickaxe"]
                ]
            },
            {
                name: "John's Basement",
                discoveryMessage: "John offers you a reward for each can you crush (he just took up recycling).",
                // respawn rate math: (# of materials missing from the mine / 100) / refreshRate = Amount of each material regenerated every minute
                respawnRate: 2,
                // Enemies are stored in an array of arrays, each interior array has the 
                enemies: [
                    ["Pepsi Can", "8", "8", "4", "1", "Cotton"]
                ]
            },
            {
                name: "'Not India' Forest",
                discoveryMessage: "This place (that is clearly not India) has a lush forest. You're sure there are treasures and loot to be had galore in there...",
                // respawn rate math: (# of materials missing from the mine / 100) / refreshRate = Amount of each material regenerated every minute
                respawnRate: 4,
                enemies: [
                    ["Angsty Lemur", "10", "10", "5", "3", "Berries"],
                    ["Tall Goat", "14", "14", "5", "8", "Half-Chewed Grass"],
                    ["Bear", "20", "20", "8", "10", "Bear Claws"]
                ]
            },
            {
                name: "'Not India' Colloseum",
                discoveryMessage: "The natives seem to like beating the crap out of eachother in a stone ampitheatre. Might as well give it a shot!",
                // respawn rate math: (# of materials missing from the mine / 100) / refreshRate = Amount of each material regenerated every minute
                respawnRate: 8,
                enemies: [
                    ["Mike (the owner's son)", "15", "15", "3", "20", "Overpriced Armor"],
                    ["Kevin (he lifts weights)", "23", "23", "12", "14", "One Dumbell"],
                    ["Literally Just A Horse", "30", "30", "17", "20", "Horseshoe"],
                    ["El Guapo", "40", "40", "23", "23", "A Sweater"]
                ]
            }
        ]
    },
    {
        name: "Prehistoric Era",
        eraUnlocked: false,
        colorPallet: ["green", "blue", "tan", "orange"],
        currency: "Shiny Rocks",
        ascensionMultiplier: 0,
        // Unlocks ascension
        triggerTimeMachine: false,
        // 0:MaxHealth, 1:Health. 2:Power, 3:Damage, 4:Defense, 6:Money
        stats: [10, 10, 1, 1, 1, 0],
        // Prehistoric: tarPits, MountOogabooga, LiterallyAVolcano
        triggerMines: [true, false, false],
        // Prehistoric: stomping grounds, tribal proving grounds
        triggerDungeons: [true, false],
        warehouses: 0,
        shopUpgrades: [0, 0, 0, 0, 0, 0],
        // 1:road, 2:stand, 3:small, 4:liscence, 5:large
        shopLevel: 1,
        // equipment format: ["name", {Power, Damage, Defense, Weight}]
        equippableItems: [[], [], [], []],
        equippedItems: [{name: "empty", power: 0, defense: 0, damage: 0, weight: 0}, {name: "empty", power: 0, defense: 0, damage: 0, weight: 0}, {name: "empty", power: 0, defense: 0, damage: 0, weight: 0}, {name: "empty", power: 0, defense: 0, damage: 0, weight: 0}],
        // consumables format: ["name", "amount held", "affect", "affectAmount"]
        consumables: [],
        // otherMaterials format: ["name", "amount held"]
        otherMaterials: [],
        // format: ["name", {stats}, "assignedJob", "assignedLocation"]
        workers: [],
        mines: [
            {
                name: "Tar Swamps",
                discoveryMessage: "You've seen nicer places. You're not sure if you've seen nastier ones.",
                refreshRate: 30,
                materials: [
                    { name:"Tar, duh", capacity: 8000, remaining: 8000, difficulty: 2, amountHeld: 0, price: 20 },
                    { name:"Dino Bone", capacity: 300, remaining: 300, difficulty: 4, amountHeld: 0, price: 20 },
                    { name:"Prehistoric Moss", capacity: 500, remaining: 500, difficulty: 2, amountHeld: 0, price: 20 },
                    { name:"Lithium", capacity: 200, remaining: 200, difficulty: 5, amountHeld: 0, price: 20 },
                    { name:"Crystal Shard", capacity: 100, remaining: 100, difficulty: 7, amountHeld: 0, price: 20 }
                ]
            },
            {
                name: "Mount Oogabooga",
                discoveryMessage: "You're sure that name means something, but you care less and less what that something is.",
                refreshRate: 45,
                materials: [
                    { name:"Limestone", capacity: 4000, remaining: 4000, difficulty: 3, amountHeld: 0, price: 20 },
                    { name:"Beryllium", capacity: 900, remaining: 900, difficulty: 6, amountHeld: 0, price: 20 },
                    { name:"Amber", capacity: 1700, remaining: 1700, difficulty: 4, amountHeld: 0, price: 20 },
                    { name:"Flint", capacity: 700, remaining: 700, difficulty: 5, amountHeld: 0, price: 20 },
                    { name:"Chalk", capacity: 1000, remaining: 1000, difficulty: 2, amountHeld: 0, price: 20 }
                ]
            },
            {
                name: "Literally a Volcano",
                discoveryMessage: "Looking down into the fiery depths of the hollow volcanic mountain, you reconsider your entry point, and dig in from the side.",
                refreshRate: 50,
                materials: [
                    { name:"Obviously Lava", capacity: 3000, remaining: 3000, difficulty: 8, amountHeld: 0, price: 20 },
                    { name:"Obsidian", capacity: 800, remaining: 800, difficulty: 9, amountHeld: 0, price: 20 },
                    { name:"Volcanic Rock", capacity: 900, remaining: 900, difficulty: 5, amountHeld: 0, price: 20 },
                    { name:"Glass", capacity: 500, remaining: 500, difficulty: 6, amountHeld: 0, price: 20 },
                    { name:"Basalt", capacity: 1000, remaining: 1000, difficulty: 5, amountHeld: 0, price: 20 }
                ]
            }
        ],
        dungeons: [
            {
                name: "Abandoned Theme Park",
                discoveryMessage: "You come across a weird park on the island. What could be inside?",
                // respawn rate math: enemy health / respawnRate = seconds to respawn, 0 means no respawn
                respawnRate: 1,
                // Enemies are stored in an array of arrays, each interior array has the 
                // Enemy name at index 0, Max Health at index 1, Current Health at index 2, Damage at index 3, Defense at index 4, Drops at index 5
                enemies: [
                    ["Dinosaur Mascot Costume", "5", "5", "2", "1", "Useless Pickaxe"]
                ]
            },
            {
                name: "John's Basement",
                discoveryMessage: "John offers you a reward for each can you crush (he just took up recycling).",
                // respawn rate math: (# of materials missing from the mine / 100) / refreshRate = Amount of each material regenerated every minute
                respawnRate: 2,
                // Enemies are stored in an array of arrays, each interior array has the 
                enemies: [
                    ["Pepsi Can", "8", "8", "4", "1", "Cotton"]
                ]
            },
            {
                name: "'Not India' Forest",
                discoveryMessage: "This place (that is clearly not India) has a lush forest. You're sure there are treasures and loot to be had galore in there...",
                // respawn rate math: (# of materials missing from the mine / 100) / refreshRate = Amount of each material regenerated every minute
                respawnRate: 4,
                enemies: [
                    ["Angsty Lemur", "10", "10", "5", "3", "Berries"],
                    ["Tall Goat", "14", "14", "5", "8", "Half-Chewed Grass"],
                    ["Bear", "20", "20", "8", "10", "Bear Claws"]
                ]
            },
            {
                name: "'Not India' Colloseum",
                discoveryMessage: "The natives seem to like beating the crap out of eachother in a stone ampitheatre. Might as well give it a shot!",
                // respawn rate math: (# of materials missing from the mine / 100) / refreshRate = Amount of each material regenerated every minute
                respawnRate: 8,
                enemies: [
                    ["Mike (the owner's son)", "15", "15", "3", "20", "Overpriced Armor"],
                    ["Kevin (he lifts weights)", "23", "23", "12", "14", "One Dumbell"],
                    ["Literally Just A Horse", "30", "30", "17", "20", "Horseshoe"],
                    ["El Guapo", "40", "40", "23", "23", "A Sweater"]
                ]
            }
        ]
    },
    {
        name: "Planetarial Era",
        eraUnlocked: false,
        colorPallet: ["black", "cadetblue", "pink", "white"],
        currency: "Doge Coins",
        ascensionMultiplier: 0,
        // 0:MaxHealth, 1:Health. 2:Power, 3:Damage, 4:Defense, 6:Money
        stats: [10, 10, 1, 1, 1, 0],
        // Unlocks ascension
        triggerTimeMachine: false,
        // planetarial: planet, star, neutronStar
        triggerMines: [true, false, false],
        // planetarial: Battelion, outer ring
        triggerDungeons: [true, false],
        warehouses: 0,
        shopUpgrades: [0, 0, 0, 0, 0, 0],
        // 1:road, 2:stand, 3:small, 4:liscence, 5:large
        shopLevel: 1,
        // equipment format: ["name", {Power, Damage, Defense, Weight}]
        equippableItems: [[], [], [], []],
        equippedItems: [{name: "empty", power: 0, defense: 0, damage: 0, weight: 0}, {name: "empty", power: 0, defense: 0, damage: 0, weight: 0}, {name: "empty", power: 0, defense: 0, damage: 0, weight: 0}, {name: "empty", power: 0, defense: 0, damage: 0, weight: 0}],
        // consumables format: ["name", "amount held", "affect", "affectAmount"]
        consumables: [],
        // otherMaterials format: ["name", "amount held"]
        otherMaterials: [],
        // format: {"name", "power", "damage", "assignedJob"string, "assignedLocation"string, "assignment":indexOfMat/Enemy, "currentProgress":"#", "heldMaterial":mat[], "returning":boolean}
        workers: [],
        mines: [
            {
                name: "Celestial Body B-99695",
                discoveryMessage: "Celestial Body R2D2 was already taken.",
                refreshRate: 60,
                materials: [
                    { name:"Titanium", capacity: 900, remaining: 900, difficulty: 8, amountHeld: 0, price: 20 },
                    { name:"Iridium", capacity: 200, remaining: 200, difficulty: 6, amountHeld: 0, price: 20 },
                    { name:"Platinum", capacity: 400, remaining: 400, difficulty: 5, amountHeld: 0, price: 20 },
                    { name:"Painite", capacity: 150, remaining: 150, difficulty: 7, amountHeld: 0, price: 20 },
                    { name:"Plutonium", capacity: 200, remaining: 200, difficulty: 6, amountHeld: 0, price: 20 }
                ]
            },
            {
                name: "Irrelevant Sun",
                discoveryMessage: "This Solar System is abandoned, so the sun is free for you to mine!",
                refreshRate: 70,
                materials: [
                    { name:"Osmium", capacity: 350, remaining: 350, difficulty: 10, amountHeld: 0, price: 20 },
                    { name:"Californium", capacity: 400, remaining: 400, difficulty: 8, amountHeld: 0, price: 20 },
                    { name:"Lots of Carbon", capacity: 10000, remaining: 10000, difficulty: 6, amountHeld: 0, price: 20 },
                    { name:"Rhodium", capacity: 500, remaining: 500, difficulty: 7, amountHeld: 0, price: 20 },
                    { name:"Magnesium", capacity: 1200, remaining: 1200, difficulty: 7, amountHeld: 0, price: 20 }
                ]
            },
            {
                name: "Calvera",
                discoveryMessage: "A Neutron star. you can't begin to understand the science behind it, but who cares, you're gonna mine that sucker!",
                refreshRate: 80,
                materials: [
                    { name:"Quantum Stuff", capacity: 300, remaining: 300, difficulty: 8, amountHeld: 0, price: 20 },
                    { name:"Neutronic Chunk", capacity: 250, remaining: 250, difficulty: 8, amountHeld: 0, price: 20 },
                    { name:"Nuclear Pasta", capacity: 70, remaining: 70, difficulty: 10, amountHeld: 0, price: 20 },
                    { name:"Thoughts and Prayers of a Dead Star's Loved Ones", capacity: 20, remaining: 20, difficulty: 11, amountHeld: 0, price: 20 },
                    { name:"Bite-Sized Star Core", capacity: 1, remaining: 1, difficulty: 15, amountHeld: 0, price: 20 }
                ]
            }
        ],
        dungeons: [
            {
                name: "Abandoned Theme Park",
                discoveryMessage: "You come across a weird park on the island. What could be inside?",
                // respawn rate math: enemy health / respawnRate = seconds to respawn, 0 means no respawn
                respawnRate: 1,
                // Enemies are stored in an array of arrays, each interior array has the 
                // Enemy name at index 0, Max Health at index 1, Current Health at index 2, Damage at index 3, Defense at index 4, Drops at index 5
                enemies: [
                    ["Dinosaur Mascot Costume", "5", "5", "2", "1", "Useless Pickaxe"]
                ]
            },
            {
                name: "John's Basement",
                discoveryMessage: "John offers you a reward for each can you crush (he just took up recycling).",
                // respawn rate math: (# of materials missing from the mine / 100) / refreshRate = Amount of each material regenerated every minute
                respawnRate: 2,
                // Enemies are stored in an array of arrays, each interior array has the 
                enemies: [
                    ["Pepsi Can", "8", "8", "4", "1", "Cotton"]
                ]
            },
            {
                name: "'Not India' Forest",
                discoveryMessage: "This place (that is clearly not India) has a lush forest. You're sure there are treasures and loot to be had galore in there...",
                // respawn rate math: (# of materials missing from the mine / 100) / refreshRate = Amount of each material regenerated every minute
                respawnRate: 4,
                enemies: [
                    ["Angsty Lemur", "10", "10", "5", "3", "Berries"],
                    ["Tall Goat", "14", "14", "5", "8", "Half-Chewed Grass"],
                    ["Bear", "20", "20", "8", "10", "Bear Claws"]
                ]
            },
            {
                name: "'Not India' Colloseum",
                discoveryMessage: "The natives seem to like beating the crap out of eachother in a stone ampitheatre. Might as well give it a shot!",
                // respawn rate math: (# of materials missing from the mine / 100) / refreshRate = Amount of each material regenerated every minute
                respawnRate: 8,
                enemies: [
                    ["Mike (the owner's son)", "15", "15", "3", "20", "Overpriced Armor"],
                    ["Kevin (he lifts weights)", "23", "23", "12", "14", "One Dumbell"],
                    ["Literally Just A Horse", "30", "30", "17", "20", "Horseshoe"],
                    ["El Guapo", "40", "40", "23", "23", "A Sweater"]
                ]
            }
        ]
    },
    {
        name: "Absent Era",
        eraUnlocked: false,
        colorPallet: ["white", "white", "black", "black"],
        currency: "Condensed Universe",
        ascensionMultiplier: 0,
        // 0:MaxHealth, 1:Health. 2:Power, 3:Damage, 4:Defense, 6:Money
        stats: [10, 10, 1, 1, 1, 0],
        // Unlocks ascension
        triggerTimeMachine: false,
        // absent: singularity, cyclicalSingularity
        triggerMines: [true, false],
        // absent: The Plurality
        triggerDungeons: [true],
        warehouses: 0,
        shopUpgrades: [0, 0, 0, 0, 0, 0],
        // 1:road, 2:stand, 3:small, 4:liscence, 5:large
        shopLevel: 1,
        // equipment format: ["name", {Power, Damage, Defense, Weight}]
        equippableItems: [[], [], [], []],
        equippedItems: [{name: "empty", power: 0, defense: 0, damage: 0, weight: 0}, {name: "empty", power: 0, defense: 0, damage: 0, weight: 0}, {name: "empty", power: 0, defense: 0, damage: 0, weight: 0}, {name: "empty", power: 0, defense: 0, damage: 0, weight: 0}],
        // consumables format: ["name", "amount held", "affect", "affectAmount"]
        consumables: [],
        // otherMaterials format: ["name", "amount held"]
        otherMaterials: [],
        workers: [],
        mines: [
            {
                name: "The Singularity",
                discoveryMessage: "Here, at the end of time and space, you can find the things that were never meant to be within the reach of man.",
                refreshRate: 5,
                materials: [
                    { name:"Janet Marble", capacity: 1, remaining: 1, difficulty: 25, amountHeld: 0, price: 20 },
                    { name:"Time", capacity: 1, remaining: 1, difficulty: 40, amountHeld: 0, price: 20 },
                    { name:"Space", capacity: 1, remaining: 1, difficulty: 65, amountHeld: 0, price: 20 },
                    { name:"Questionable Spaghetti", capacity: 1, remaining: 1, difficulty: 90, amountHeld: 0, price: 20 },
                    { name:"Radiohead CD", capacity: 1, remaining: 1, difficulty: 125, amountHeld: 0, price: 20 }
                ]
            },
            {
                name: "Cyclical Singularity",
                discoveryMessage: "This one is round, you wonder if it contains anything that might, I dunno, break the laws of physics even more?",
                refreshRate: 100,
                materials: [
                    { name:"Mobius Strip with Space on One Side and Time on the Same Side", capacity: 1, remaining: 1, difficulty: 250, amountHeld: 0, price: 20 }
                ]
            }
        ],
        dungeons: [
            {
                name: "Abandoned Theme Park",
                discoveryMessage: "You come across a weird park on the island. What could be inside?",
                // respawn rate math: enemy health / respawnRate = seconds to respawn, 0 means no respawn
                respawnRate: 1,
                // Enemies are stored in an array of arrays, each interior array has the 
                // Enemy name at index 0, Max Health at index 1, Current Health at index 2, Damage at index 3, Defense at index 4, Drops at index 5
                enemies: [
                    ["Dinosaur Mascot Costume", "5", "5", "2", "1", "Useless Pickaxe"]
                ]
            },
            {
                name: "John's Basement",
                discoveryMessage: "John offers you a reward for each can you crush (he just took up recycling).",
                // respawn rate math: (# of materials missing from the mine / 100) / refreshRate = Amount of each material regenerated every minute
                respawnRate: 2,
                // Enemies are stored in an array of arrays, each interior array has the 
                enemies: [
                    ["Pepsi Can", "8", "8", "4", "1", "Cotton"]
                ]
            },
            {
                name: "'Not India' Forest",
                discoveryMessage: "This place (that is clearly not India) has a lush forest. You're sure there are treasures and loot to be had galore in there...",
                // respawn rate math: (# of materials missing from the mine / 100) / refreshRate = Amount of each material regenerated every minute
                respawnRate: 4,
                enemies: [
                    ["Angsty Lemur", "10", "10", "5", "3", "Berries"],
                    ["Tall Goat", "14", "14", "5", "8", "Half-Chewed Grass"],
                    ["Bear", "20", "20", "8", "10", "Bear Claws"]
                ]
            },
            {
                name: "'Not India' Colloseum",
                discoveryMessage: "The natives seem to like beating the crap out of eachother in a stone ampitheatre. Might as well give it a shot!",
                // respawn rate math: (# of materials missing from the mine / 100) / refreshRate = Amount of each material regenerated every minute
                respawnRate: 8,
                enemies: [
                    ["Mike (the owner's son)", "15", "15", "3", "20", "Overpriced Armor"],
                    ["Kevin (he lifts weights)", "23", "23", "12", "14", "One Dumbell"],
                    ["Literally Just A Horse", "30", "30", "17", "20", "Horseshoe"],
                    ["El Guapo", "40", "40", "23", "23", "A Sweater"]
                ]
            }
        ]
    }
]

export default WorldState;