var Crafting = [
    
    //MATERIALS
    {
        name: "Engraved Monolith",
        requiredMaterials: [
            {
                name: "Shadowstone",
                amount: 200
            },
            {
                name: "Ancient Epitaphs",
                amount: 90
            },
            {
                name: "Remains of an Edgelord",
                amount: 30
            }
        ]
    },
    {
        name: "El Dorado",
        requiredMaterials: [
            {
                name: "GOLD",
                amount: 500
            },
            {
                name: "Silver",
                amount: 1000
            }
        ]
    },
    {
        name: "Relic",
        requiredMaterials: [
            {
                name: "Obviously Lava",
                amount: 200
            },
            {
                name: "Volcanic Rock",
                amount: 90
            },
            {
                name: "Glass",
                amount: 70
            }
        ]
    },
    {
        name: "Son",
        requiredMaterials: [
            {
                name: "Lots of Carbon",
                amount: 200
            },
            {
                name: "Osmium",
                amount: 90
            },
            {
                name: "Quantum Stuff",
                amount: 30
            }
        ]
    },
    {
        name: "1 Second of Omnipotence",
        requiredMaterials: [
            {
                name: "Janet Marbles",
                amount: 20
            },
            {
                name: "Time",
                amount: 10
            },
            {
                name: "Radiohead CD",
                amount: 5
            }
        ]
    },
    //GATES
    {
        name: "Questionable Raft",
        requiredMaterials: [
            {
                name: "Floatstone",
                amount: 20
            },
            {
                name: "Lightweight Glue",
                amount: 5
            }
        ],
        eraAvailable: 0
    },
    {
        name: "Semi-Sturdy Boat",
        requiredMaterials: [
            {
                name: "Planks of Wood",
                amount: 40
            },
            {
                name: "Actually Iron",
                amount: 20
            },
            {
                name: "Rope?",
                amount: 15
            },
            {
                name: "Cotton Soaked in Pepsi",
                amount: 20
            }
        ],
        eraAvailable: 0
    },
    {
        name: "'The Rapture' Diving Suit",
        requiredMaterials: [
            {
                name: "Tin",
                amount: 300
            },
            {
                name: "Iron",
                amount: 200
            },
            {
                name: "Saltpeter",
                amount: 90
            }
        ],
        eraAvailable: 0
    },
    {
        name: "Starship Kerbal",
        requiredMaterials: [
            {
                name: "Clay",
                amount: 700
            },
            {
                name: "Diamond",
                amount: 1
            },
            {
                name: "Copper",
                amount: 200
            },
            {
                name: "Iron",
                amount: 500
            }
        ],
        eraAvailable: 0
    },
    {
        name: "Literally Just a Simple Torch",
        requiredMaterials: [
            {
                name: "Flint",
                amount: 1
            },
            {
                name: "Dino Bone",
                amount: 1
            },
            {
                name: "Coal",
                amount: 1
            },
            {
                name: "Saltpeter",
                amount: 5
            }
        ],
        eraAvailable: 0
    },
    // ASCENSION: tier 1 Using A time machine triggers Ascension, which does two things: It unlocks the next era, or if it is unlocked, it ASCENDS the CURRENT and NEXT era, increasing the ascension multipliers on ALL of them
    {
        name: "Phone Booth Time Machine",
        requiredMaterials: [
            {
                name: "Osmium",
                amount: 5
            },
            {
                name: "Ruthenium",
                amount: 10
            },
            {
                name: "Palladium",
                amount: 20
            },
            {
                name: "Diamond",
                amount: 5
            },
            {
                name: "Copper",
                amount: 100
            },
        ],
        eraAvailable: 0
    },
    {
        name: "Steam Train Time Machine",
        requiredMaterials: [
            {
                name: "Uranium",
                amount: 20
            },
            {
                name: "Feldspar",
                amount: 10
            },
            {
                name: "GOLD",
                amount: 5
            },
            {
                name: "Silver",
                amount: 10
            },
            {
                name: "Nickel",
                amount: 100
            },
        ],
        eraAvailable: 1
    },
    {
        name: "Stegosaurus Time Machine",
        requiredMaterials: [
            {
                name: "Glass",
                amount: 20
            },
            {
                name: "Obsidian",
                amount: 10
            },
            {
                name: "Obviously Lava",
                amount: 5
            },
            {
                name: "Beryllium",
                amount: 10
            },
            {
                name: "Crystal Shard",
                amount: 100
            },
        ],
        eraAvailable: 2
    },
    {
        name: "Worm Hole Time Machine",
        requiredMaterials: [
            {
                name: "Quantum Stuff",
                amount: 300
            },
            {
                name: "Neutronic Chunk",
                amount: 250
            },
            {
                name: "Nuclear Pasta",
                amount: 70
            },
            {
                name: "Thoughts and Prayers of a Dead Star's Loved Ones",
                amount: 20
            },
            {
                name: "Bite-Sized Star Core",
                amount: 1
            },
        ],
        eraAvailable: 3
    },
    // TRANSCENSION: tier 2 A Reboot of every Era, ressetting unlocked Eras and Ascension multipliers. Your Transcension Amount adds an exponent to all gains in all eras
    {
        name: "Universal Reboot",
        requiredMaterials: [
            {
                name: "Mobius Strip with Space on One Side and Time on the Same Side",
                amount: 1
            },
        ],
        eraAvailable: 4
    },
    // PRESCIENCE: tier 3 Dreams about an era that give your stores, stats, and conscience gains a permanent boost and unlock new areas, only in the era you Dream about. THE ERA's ASCENSION AND GLOBAL TRANSCENSION WILL RESET
    {
        name: "Dream About Today",
        requiredMaterials: [
            {
                name: "Mobius Strip with Space on One Side and Time on the Same Side",
                amount: 5
            },
        ],
        eraAvailable: 4
    },
    {
        name: "Dream About Yesterday",
        requiredMaterials: [
            {
                name: "Mobius Strip with Space on One Side and Time on the Same Side",
                amount: 5
            },
        ],
        eraAvailable: 4
    },
    {
        name: "Dream About Last Year",
        requiredMaterials: [
            {
                name: "Mobius Strip with Space on One Side and Time on the Same Side",
                amount: 5
            },
        ],
        eraAvailable: 4
    },
    {
        name: "Dream About Tomorrow",
        requiredMaterials: [
            {
                name: "Mobius Strip with Space on One Side and Time on the Same Side",
                amount: 5
            },
        ],
        eraAvailable: 4
    },
    {
        name: "Lucid Dream",
        requiredMaterials: [
            {
                name: "Mobius Strip with Space on One Side and Time on the Same Side",
                amount: 10
            },
        ],
        eraAvailable: 4
    },
    // CONSCIENCE: tier 1.5 Conscience will reset your era to the beginning of the current ascension, and you will gain points based off your "knowledge" that can be spent on perks. Perks persist through Ascensions and Transcensions, but not PRESCIENCIONS
    {
        name: "Knowledge of Stocks",
        requiredMaterials: [
            {
                name: "Engraved Monolith",
                amount: 5
            }
        ],
        eraAvailable: 0
    },
    {
        name: "Knowledge of Industry",
        requiredMaterials: [
            {
                name: "El Dorado",
                amount: 5
            }
        ],
        eraAvailable: 1
    },
    {
        name: "Knowledge of Tribes",
        requiredMaterials: [
            {
                name: "Relic",
                amount: 5
            }
        ],
        eraAvailable: 2
    },
    {
        name: "Knowledge of Star Patterns",
        requiredMaterials: [
            {
                name: "Son",
                amount: 5
            }
        ],
        eraAvailable: 3
    },
    {
        name: "Knowledge of One",
        requiredMaterials: [
            {
                name: "1 Second of Omnipresence",
                amount: 5
            }
        ],
        eraAvailable: 4
    },
]

export default Crafting;