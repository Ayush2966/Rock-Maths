//----> Backend
export const skill = {
    add: {
        stage: {
            1: [1, 'add', 1], // Level 1
            2: [2, 'add', 1], // Level 2
            3: [2, 'add', 2], // Level 2
            4: [3, 'add', 2], // Level 3
            5: [3, 'add', 3], // Level 4
            6: [4, 'add', 3], // Level 5
            7: [4, 'add', 4], // Level 6
            8: [5, 'add', 3], // Level 6
            9: [5, 'add', 4], // Level 7
            10: [5, 'add', 5] // Level 7
        }
    },
    subtract: {
        stage: {
            1: [1, 'subtract', 1], // Level 1
            2: [2, 'subtract', 1], // Level 2
            3: [2, 'subtract', 2], // Level 3
            4: [3, 'subtract', 2], // Level 3
            5: [3, 'subtract', 3], // Level 4
            6: [4, 'subtract', 3], // Level 5
            7: [4, 'subtract', 4], // Level 5
            8: [5, 'subtract', 3], // Level 6
            9: [5, 'subtract', 4], // Level 7
            10: [5, 'subtract', 5] // Level 7
        }
    },
    multiply: {
        stage: {
            1: [1, 'multiply', 1], // Level 2
            2: [2, 'multiply', 1], // Level 3
            3: [2, 'multiply', 2], // Level 4
            4: [3, 'multiply', 2], // Level 5
            5: [3, 'multiply', 3], // Level 5
            6: [4, 'multiply', 3], // Level 6
            7: [4, 'multiply', 4], // Level 7
            8: [5, 'multiply', 3], // Level 8
            9: [5, 'multiply', 4], // Level 9
            10: [5, 'multiply', 5] // Level 10
        }
    },
    divide: {
        stage: {
            1: [1, 'divide', 1], // Level 3
            2: [2, 'divide', 1], // Level 3
            3: [3, 'divide', 1], // Level 4
            4: [3, 'divide', 2], // Level 4
            5: [4, 'divide', 1], // Level 5
            6: [4, 'divide', 2], // Level 6
            7: [4, 'divide', 4], // Level 7
            8: [5, 'divide', 3], // Level 8
            9: [5, 'divide', 4], // Level 9
            10: [5, 'divide', 5] // Level 10
        }
    }
};

export const level = {
    1: {
        add: { min: 1, max: 1 },
        subtract: { min: 1, max: 1 },
        multiply: { min: 0, max: 0 },
        divide: { min: 0, max: 0 }
    },
    2: {
        add: { min: 2, max: 3 },
        subtract: { min: 2, max: 2 },
        multiply: { min: 1, max: 1 },
        divide: { min: 0, max: 0 }
    },
    3: {
        add: { min: 4, max: 4 },
        subtract: { min: 3, max: 4 },
        multiply: { min: 2, max: 2 },
        divide: { min: 1, max: 2 }
    },
    4: {
        add: { min: 5, max: 5 },
        subtract: { min: 5, max: 5 },
        multiply: { min: 3, max: 3 },
        divide: { min: 2, max: 3 }
    },
    5: {
        add: { min: 4, max: 6 },
        subtract: { min: 6, max: 7 },
        multiply: { min: 4, max: 5 },
        divide: { min: 5, max: 5 }
    },
    6: {
        add: { min: 4, max: 8 },
        subtract: { min: 6, max: 8 },
        multiply: { min: 4, max: 6 },
        divide: { min: 5, max: 6 }
    },
    7: {
        add: { min: 8, max: 10 },
        subtract: { min: 8, max: 10 },
        multiply: { min: 5, max: 7 },
        divide: { min: 5, max: 7 }
    },
    8: {
        add: { min: 9, max: 10 },
        subtract: { min: 9, max: 10 },
        multiply: { min: 8, max: 8 },
        divide: { min: 8, max: 8 }
    },
    9: {
        add: { min: 0, max: 0 },
        subtract: { min: 0, max: 0 },
        multiply: { min: 9, max: 5 },
        divide: { min: 9, max: 9 }
    },
    10: {
        add: { min: 0, max: 0 },
        subtract: { min: 0, max: 0 },
        multiply: { min: 10, max: 10 },
        divide: { min: 10, max: 10 }
    }
};
