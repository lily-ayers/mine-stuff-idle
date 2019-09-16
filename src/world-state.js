var WorldState = [
    {
        name: "Modern Era",
        // An Era's Color Pallet consists of an array, with Primary at index 0, secondary at index 1, tertiary (like borders) at index 2, and text at index 3
        colorPallet: ["slategrey", "darkblue", "yellow", "red"],
        ascensionMultiplier: 0,
        // Unlocks ascension
        triggerTimeMachine: false,
        // modern: tutorial1, tutorial2, Boat, Rapture, Spaceship, Flint
        //TODO-Return the variables back to false when done
        triggerMines: [true, true, true, true, true, true],
        // modern: tutorial1, tutorial2, forest, colloseum
        triggerDungeons: [true, false, false, false],
        warehouses: 0,
        shopUpgrades: [0, 0, 0, 0, 0, 0],
        // 1:road, 2:stand, 3:small, 4:liscence, 5:large
        shopLevel: 1,
        // equipment format: ["name", {Power, Damage, Defense, Weight}]
        equippableItems: [],
        equippedItems: [],
        // format: ["name", {stats}, "assignedJob", "assignedLocation"]
        workers: [],
        mines: [
            {
                name: "Isla Nubar Quarry",
                discoveryMessage: "You come across a mine on the island. More of a quarry, really. Yeah, let's go with Quarry.",
                // refresh rate math: (# of materials missing from the mine / 100) / refreshRate = Amount of each material regenerated every minute
                //refreshrate of zero means no refresh
                refreshRate: 0,
                // Materials are stored in an array of arrays, each interior array has the 
                // Material name at index 0, starting amount at index 1, current amount at index 2, difficulty at index 3, held amount at index 4
                materials: [
                    ["Floatstone", "20", "20", "1"],
                    ["Lightweight Glue", "5", "5", "2"]
                ]
            },
            {
                name: "John's Mineshaft",
                discoveryMessage: "John was nice enough to let you use his personal mineshaft until you get back on your feet! There's probably wonderous things inside!",
                refreshRate: 0,
                materials: [
                    ["Planks of Wood", "40", "40", "2"],
                    ["Actually Iron", "20", "20", "3"],
                    ["Rope?", "15", "15", "2"]
                ]
            },
            {
                name: "'Not India' Mineshaft",
                discoveryMessage: "The locals show you to a dark cave and beckon you inside. It's a new mineshaft!",
                refreshRate: 5,
                materials: [
                    ["Stone", "1000", "1000", "2"],
                    ["Dirt", "5000", "5000", "1"],
                    ["Tin", "750", "750", "3"],
                    ["Iron", "600", "600", "4"],
                    ["Saltpeter", "200", "200", "2"]
                ]
            },
            {
                name: "Bottom of the Specific Ocean Mineshaft",
                discoveryMessage: "Andrew Ryan would be proud if you even knew who that was.",
                refreshRate: 7,
                materials: [
                    ["Clay", "1000", "1000", "2"],
                    ["Diamond", "50", "50", "20"],
                    ["Quartz", "200", "200", "4"],
                    ["Copper", "400", "400", "3"],
                    ["Calcite", "350", "350", "6"]
                ]
            },
            {
                name: "Asteroid Suspenders",
                discoveryMessage: "These Asteroids do wonders for keeping the universe's pants on!",
                refreshRate: 10,
                materials: [
                    ["Sulfer", "500", "500", "4"],
                    ["Silicon", "1000", "1000", "3"],
                    ["Palladium", "300", "300", "7"],
                    ["Ruthenium", "90", "90", "8"],
                    ["Osmium", "75", "75", "9"]
                ]
            }
        ],
        dungeons: [
            {
                name: "Abandoned Theme Park",
                discoveryMessage: "You come across a weird park on the island. What could be inside?",
                // respawn rate math: enemy health / respawnRate = seconds to respawn, 0 means no respawn
                respawnRate: 0,
                // Enemies are stored in an array of arrays, each interior array has the 
                // Enemy name at index 0, Health at index 1, Damage at index 2, Defense at index 3, Drops at index 4
                enemies: [
                    ["Dinosaur Mascot Costume", "5", "1", "1", "PickAxe"]
                ]
            },
            {
                name: "John's Basement",
                discoveryMessage: "John offers you a reward for each can you crush (he just took up recycling).",
                // respawn rate math: (# of materials missing from the mine / 100) / refreshRate = Amount of each material regenerated every minute
                respawnRate: 1,
                // Enemies are stored in an array of arrays, each interior array has the 
                // Enemy name at index 0, Health at index 1, Damage at index 2, Defense at index 3, Drops at index 4
                enemies: [
                    ["Pepsi Can", "8", "1", "1", "Cotton"]
                ]
            },
            {
                name: "'Not India' Forest",
                discoveryMessage: "This place (that is clearly not India) has a lush forest. You're sure there are treasures and loot to be had galore in there...",
                // respawn rate math: (# of materials missing from the mine / 100) / refreshRate = Amount of each material regenerated every minute
                respawnRate: 2,
                // Enemies are stored in an array of arrays, each interior array has the 
                // Enemy name at index 0, Health at index 1, Damage at index 2, Defense at index 3, Drops at index 4
                enemies: [
                    ["Angsty Lemur", "10", "5", "3", "Berries"],
                    ["Tall Goat", "14", "5", "8", "Half-Chewed Grass"],
                    ["Bear", "20", "8", "10", "Bear Claws"]
                ]
            },
            {
                name: "'Not India' Colloseum",
                discoveryMessage: "The natives seem to like beating the crap out of eachother in a stone ampitheatre. Might as well give it a shot!",
                // respawn rate math: (# of materials missing from the mine / 100) / refreshRate = Amount of each material regenerated every minute
                respawnRate: 5,
                // Enemies are stored in an array of arrays, each interior array has the 
                // Enemy name at index 0, Health at index 1, Damage at index 2, Defense at index 3, Drops at index 4
                enemies: [
                    ["Mike (the owner's son)", "15", "3", "20", "Overpriced Armor"],
                    ["Kevin (he lifts weights)", "23", "12", "14", "One Dumbell"],
                    ["Literally Just A Horse", "30", "17", "20", "Horseshoe"],
                    ["El Guapo", "40", "23", "23", "A Sweater"]
                ]
            }
        ]
    },
    {
        name: "Industrial Era",
        colorPallet: ["tan", "brown", "black", "yellow"],
        ascensionMultiplier: 0,
        // Unlocks ascension
        triggerTimeMachine: false,
        // industrial: east, Midwest, wild west
        triggerMines: [true, false, false],
        warehouses: 0,
        shopUpgrades: [0, 0, 0, 0, 0, 0],
        // 1:road, 2:stand, 3:small, 4:liscence, 5:large
        shopLevel: 1,
        // equipment format: ["name", {Power, Damage, Defense, Weight}]
        equippableItems: [],
        equippedItems: [],
        // format: ["name", {stats}, "assignedJob", "assignedLocation"]
        workers: [],
        mines: [
            {
                name: "Relatively Tame East Mine",
                discoveryMessage: "This place really is quite peaceful. You're not sure if that's because everyone left to find decent ore and the mines are nearly useless to commonfolk now.",
                refreshRate: 15,
                materials: [
                    ["Mac N Cheese Crayon", "5000", "5000", "2"],
                    ["Grey Crayon", "10000", "10000", "2"],
                    ["Coal", "3000", "3000", "3"],
                    ["Cement", "3000", "3000", "4"],
                    ["Uranium", "400", "400", "7"]
                ]
            },
            {
                name: "Slightly Misbehaved Midwest Mine",
                discoveryMessage: "Despite their calm demeanor, the people around here can let loose to some extent. You'd put them at about 50% less tamed than the last batch!",
                refreshRate: 20,
                materials: [
                    ["Pyrite", "2500", "2500", "4"],
                    ["Nickel", "5000", "5000", "4"],
                    ["Gravel", "10000", "10000", "2"],
                    ["Zinc", "900", "900", "3"],
                    ["Bauxite", "750", "750", "5"]
                ]
            },
            {
                name: "Wild Wild West Mine",
                discoveryMessage: "They're out of control here. It's unsafe. Anarchy seems to reign. This may be your last mining expedition.",
                refreshRate: 25,
                materials: [
                    ["GOLD", "250", "250", "5"],
                    ["Silver", "500", "500", "5"],
                    ["Molybdenum", "750", "750", "6"],
                    ["Phosphate", "400", "400", "7"],
                    ["Feldspar", "150", "150", "6"]
                ]
            }
        ]
    },
    {
        name: "Prehistoric Era",
        colorPallet: ["green", "blue", "tan", "orange"],
        ascensionMultiplier: 0,
        // Unlocks ascension
        triggerTimeMachine: false,
        // Prehistoric: tarPits, MountOogabooga, LiterallyAVolcano
        triggerMines: [true, false, false],
        warehouses: 0,
        shopUpgrades: [0, 0, 0, 0, 0, 0],
        // 1:road, 2:stand, 3:small, 4:liscence, 5:large
        shopLevel: 1,
        // equipment format: ["name", {Power, Damage, Defense, Weight}]
        equippableItems: [],
        equippedItems: [],
        // format: ["name", {stats}, "assignedJob", "assignedLocation"]
        workers: [],
        mines: [
            {
                name: "Tar Swamps",
                discoveryMessage: "You've seen nicer places. You're not sure if you've seen nastier ones.",
                refreshRate: 30,
                materials: [
                    ["Tar, duh", "8000", "8000", "2"],
                    ["Dino Bone", "300", "300", "4"],
                    ["Prehistoric Moss", "500", "500", "2"],
                    ["Lithium", "200", "200", "5"],
                    ["Crystal Shard", "100", "100", "7"]
                ]
            },
            {
                name: "Mount Oogabooga",
                discoveryMessage: "You're sure that name means something, but you care less and less what that something is.",
                refreshRate: 45,
                materials: [
                    ["Limestone", "4000", "4000", "3"],
                    ["Beryllium", "900", "900", "6"],
                    ["Amber", "1700", "1700", "4"],
                    ["Flint", "700", "700", "5"],
                    ["Chalk", "1000", "1000", "2"]
                ]
            },
            {
                name: "Literally a Volcano",
                discoveryMessage: "Looking down into the fiery depths of the hollow volcanic mountain, you reconsider your entry point, and dig in from the side.",
                refreshRate: 50,
                materials: [
                    ["Obviously Lava", "3000", "3000", "8"],
                    ["Obsidian", "800", "800", "9"],
                    ["Volcanic Rock", "900", "900", "5"],
                    ["Glass", "500", "500", "6"],
                    ["Basalt", "1000", "1000", "5"]
                ]
            }
        ]
    },
    {
        name: "Planetarial Era",
        colorPallet: ["black", "cadetblue", "pink", "white"],
        ascensionMultiplier: 0,
        // Unlocks ascension
        triggerTimeMachine: false,
        // planetarial: planet, star, neutronStar
        triggerMines: [true, false, false],
        warehouses: 0,
        shopUpgrades: [0, 0, 0, 0, 0, 0],
        // 1:road, 2:stand, 3:small, 4:liscence, 5:large
        shopLevel: 1,
        // equipment format: ["name", {Power, Damage, Defense, Weight}]
        equippableItems: [],
        equippedItems: [],
        // format: ["name", {stats}, "assignedJob", "assignedLocation"]
        workers: [],
        mines: [
            {
                name: "Celestial Body B-99695",
                discoveryMessage: "Celestial Body R2D2 was already taken.",
                refreshRate: 60,
                materials: [
                    ["Titanium", "900", "900", "8"],
                    ["Iridium", "200", "200", "6"],
                    ["Platinum", "400", "400", "5"],
                    ["Painite", "150", "150", "7"],
                    ["Plutonium", "200", "200", "6"]
                ]
            },
            {
                name: "Irrelevant Sun",
                discoveryMessage: "This Solar System is abandoned, so the sun is free for you to mine!",
                refreshRate: 70,
                materials: [
                    ["Osmium", "350", "350", "10"],
                    ["Californium", "400", "400", "8"],
                    ["Lots of Carbon", "10000", "10000", "6"],
                    ["Rhodium", "500", "500", "7"],
                    ["Magnesium", "1200", "1200", "7"]
                ]
            },
            {
                name: "Calvera",
                discoveryMessage: "A Neutron star. you can't begin to understand the science behind it, but who cares, you're gonna mine that sucker!",
                refreshRate: 80,
                materials: [
                    ["Quantum Stuff", "300", "300", "8"],
                    ["Neutronic Chunk", "250", "250", "8"],
                    ["Nuclear Pasta", "70", "70", "10"],
                    ["Thoughts and Prayers of a Dead Star's Loved Ones", "20", "20", "11"],
                    ["Bite-Sized Star Core", "1", "1", "15"]
                ]
            }
        ]
    },
    {
        name: "Absent Era",
        colorPallet: ["white", "white", "black", "black"],
        ascensionMultiplier: 0,
        // Unlocks ascension
        triggerTimeMachine: false,
        // absent: singularity, cyclicalSingularity
        triggerMines: [true, false],
        warehouses: 0,
        shopUpgrades: [0, 0, 0, 0, 0, 0],
        // 1:road, 2:stand, 3:small, 4:liscence, 5:large
        shopLevel: 1,
        // equipment format: ["name", {Power, Damage, Defense, Weight}]
        equippableItems: [],
        equippedItems: [],
        mines: [
            {
                name: "The Singularity",
                discoveryMessage: "Here, at the end of time and space, you can find the things that were never meant to be within the reach of man.",
                refreshRate: 5,
                materials: [
                    ["Janet Marble", "1", "1", "25"],
                    ["Time", "1", "1", "40"],
                    ["Space", "1", "1", "65"],
                    ["Questionable Spaghetti", "1", "1", "90"],
                    ["Radiohead CD", "1", "1", "125"]
                ]
            },
            {
                name: "Cyclical Singularity",
                discoveryMessage: "This one is round, you wonder if it contains anything that might, I dunno, break the laws of physics even more?",
                refreshRate: 100,
                materials: [
                    ["Mobius Strip with Space on One Side and Time on the Same Side", "1", "1", "250"]
                ]
            }
        ]
    }
]

export default WorldState;