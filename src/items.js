var Items = [
    // EQUIPPABLES:
    // HEAD:
    {
        name: "Aluminum Shades",
        type: "Equippable",
        slot: "Head",
        amountHeld: 1,
        power: 0,
        damage: 1,
        defense: 1,
        price: 10
    },
    // CHEST:

    // WEAPON:
    {
        name: "Useless Pickaxe",
        type: "Equippable",
        slot: "Weapon",
        amountHeld: 1,
        power: 1,
        damage: 1,
        defense: 0,
        price: 5
    },
    // LEGS:
    {
        name: "Pop Tab Moccasins",
        type: "Equippable",
        slot: "Legs",
        amountHeld: 1,
        power: 0,
        damage: 0,
        defense: 1,
        price: 15
    },
    // CONSUMABLES:

    // SPECIAL MATERIALS:

    // OTHER MATERIALS:
    {
        name: "Cotton Soaked in Pepsi",
        type: "Other",
        amountHeld: 1,
    },
    // GATES:
    {
        name: "Questionable Raft",
        type: "Other",
        amountHeld: 1,
        // triggers: [[mine index top be activated], [mine index to be deactivated], [dungeons to be activated], [dungeons to dactivate]]
        triggers: [[1], [0], [1], [0]]
    },
    {
        name: "Semi-Sturdy Boat",
        type: "Other",
        amountHeld: 1,
        triggers: [[2], [1], [2], [1]]
    },
    {
        name: "'The Rapture' Diving Suit",
        type: "Other",
        amountHeld: 1,
        triggers: [[3], [], [], []]
    },
    {
        name: "Starship Kerbal",
        type: "Other",
        amountHeld: 1,
        triggers: [[4], [], [], []]
    },
    {
        name: "Literally Just a Simple Torch",
        type: "Other",
        amountHeld: 1,
        triggers: [[5], [], [], []]
    }
]

export default Items;