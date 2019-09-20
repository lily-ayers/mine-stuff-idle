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
        type: "Gate",
        amountHeld: 1,
        // triggers: [[mine index top be activated], [mine index to be deactivated], [dungeons to be activated], [dungeons to dactivate]]
        triggers: [[1], [0], [1], [0]]
    },
    {
        name: "Semi-Sturdy Boat",
        type: "Gate",
        amountHeld: 1,
        triggers: [[2], [1], [2], [1]]
    },
    {
        name: "'The Rapture' Diving Suit",
        type: "Gate",
        amountHeld: 1,
        triggers: [[3], [], [], []]
    },
    {
        name: "Starship Kerbal",
        type: "Gate",
        amountHeld: 1,
        triggers: [[4], [], [], []]
    },
    {
        name: "Literally Just a Simple Torch",
        type: "Gate",
        amountHeld: 1,
        triggers: [[5], [], [], []]
    },
    // ASCENSION
    {
        name: "Phone Booth Time Machine",
        type: "Ascension",
        amountHeld: 1,
        // Ascension Triggers: [[eras to ascend], [eras to unlock]]
        triggers: [[0, 1], [0, 1]]
    },
    {
        name: "Steam Train Time Machine",
        type: "Ascension",
        amountHeld: 1,
        // Ascension Triggers: [[eras to ascend], [eras to unlock]]
        triggers: [[1, 2], [0, 1, 2]]
    },
    {
        name: "Stegosaurus Time Machine",
        type: "Ascension",
        amountHeld: 1,
        // Ascension Triggers: [[eras to ascend], [eras to unlock]]
        triggers: [[2, 3], [0, 1, 2, 3]]
    },
    {
        name: "Wormhole Time Machine",
        type: "Ascension",
        amountHeld: 1,
        // Ascension Triggers: [[eras to ascend], [eras to unlock]]
        triggers: [[3, 4], [0, 1, 2, 3, 4]]
    },
    // TRANSCENSION
    {
        name: "Universal Reboot",
        type: "Transcension",
        amountHeld: 1,
        // TRANSCENSION Triggers: [[eras to transcend], [eras to leave active]]
        triggers: [[0, 1, 2, 3, 4], [0]]
    },
    // PRESCIENCE
    {
        name: "Dream About Today",
        type: "Prescience",
        amountHeld: 1,
        // PRESCIENCE Triggers: [[eras to permanently boost], [eras to leave active]]
        triggers: [[0], [0]]
    },
    {
        name: "Dream About Yesterday",
        type: "Prescience",
        amountHeld: 1,
        // PRESCIENCE Triggers: [[eras to permanently boost], [eras to leave active]]
        triggers: [[1], [0]]
    },
    {
        name: "Dream About Last Year",
        type: "Prescience",
        amountHeld: 1,
        // PRESCIENCE Triggers: [[eras to permanently boost], [eras to leave active]]
        triggers: [[2], [0]]
    },
    {
        name: "Dream About Tomorrow",
        type: "Prescience",
        amountHeld: 1,
        // PRESCIENCE Triggers: [[eras to permanently boost], [eras to leave active]]
        triggers: [[3], [0]]
    },
    {
        name: "Lucid Dream",
        type: "Prescience",
        amountHeld: 1,
        // PRESCIENCE Triggers: [[eras to permanently boost], [eras to leave active]]
        triggers: [[4], [0]]
    },
    // CONSCIENCE
    {
        name: "Knowledge of Stocks",
        type: "Conscience",
        amountHeld: 1,
        // CONSCIENCE Triggers: [[eras to add KP to], [eras to leave active]]
        triggers: [[0], [0]]
    },
    {
        name: "Knowledge of Industry",
        type: "Conscience",
        amountHeld: 1,
        // CONSCIENCE Triggers: [[eras to add KP to], [eras to leave active]]
        triggers: [[1], [0]]
    },
    {
        name: "Knowledge of Tribes",
        description: "",
        type: "Conscience",
        amountHeld: 1,
        // CONSCIENCE Triggers: [[eras to add KP to], [eras to leave active]]
        triggers: [[2], [0]]
    },
    {
        name: "Knowledge of Star Patterns",
        type: "Conscience",
        amountHeld: 1,
        // CONSCIENCE Triggers: [[eras to add KP to], [eras to leave active]]
        triggers: [[3], [0]]
    },
    {
        name: "Knowledge of One",
        type: "Conscience",
        amountHeld: 1,
        // CONSCIENCE Triggers: [[eras to add KP to], [eras to leave active]]
        triggers: [[4], [0]]
    },
]

export default Items;