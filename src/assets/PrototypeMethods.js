const prototypeMethods = [
    {
        cardType: "JavaScript Methods",
        term: ".substring()",
        definition: "STRING: Returns a section of string, as sliced from index.",
        example: "'string'.substring(0,3) => 'str' "
    },
    {
        cardType: "JavaScript Methods",
        term: ".slice()",
        definition: "ARRAY: Slices out section of array based on index and returns new array (non-destructive).",
        example: "[1, 2, 3].slice(0,2) => [1, 2]"
    },
    {
        cardType: "JavaScript Methods",
        term: "array.concat()",
        definition: "ARRAY: Merges two or more arrays and returns new array (non-destructive).",
        example: "[1, 2, 3].concat([4,5])) => [1, 2, 3, 4, 5]"
    },
    {
        cardType: "JavaScript Methods",
        term: ".copyWithin()",
        definition: "ARRAY: Copies part of an array and pastes it to another location in same array without modifying its length (destructive). Three params: (target, start index, end index).",
        example: "[1, 2, 3].copyWithin(0, 1, 2)) => [2, 2, 3]"
    },
    {
        cardType: "JavaScript Methods",
        term: ".entries()",
        definition: "ARRAY: Returns a new Array Iterator object that contains the key/value pairs for each index.",
        example: "['a', 'b', 'c'].entries().next().value => Array [0, 'a']"
    },
    {
        cardType: "JavaScript Methods",
        term: ".every()",
        definition: "ARRAY: Tests whether all elements in an array pass a certain condition, returning a boolean value.",
        example: "[1, 2, 3, 4].every((currentValue) => currentValue < 5) => true"
    },
    {
        cardType: "JavaScript Methods",
        term: ".fill()",
        definition: "ARRAY: Changes all elements in an array to a static value from a start index to an end index, returning modified array (destructive).",
        example: "[1, 2, 3, 4].fill(0, 1, 2) => [1, 0, 0, 4]"
    },
    {
        cardType: "JavaScript Methods",
        term: ".filter()",
        definition: "ARRAY: Checks every element in an array and creates a new array with only elements that pass a certain condition (non-destructive).",
        example: "[1, 2, 3, 4].filter(number => number >= 3) => [3, 4]"
    },
    {
        cardType: "JavaScript Methods",
        term: ".find()",
        definition: "ARRAY: Returns the value of the first element in an array that matches a certain condition. If nothing meets the condition, returns undefined.",
        example: "[1, 2, 3, 4].find(number => number === 3) => 3"
    },
    {
        cardType: "JavaScript Methods",
        term: ".findIndex()",
        definition: "ARRAY: Returns the index of the first element in an array that matches a certain condition. If nothing meets the condition, returns -1.",
        example: "[1, 2, 3, 4].findIndex(number => number === 3) => 2"
    },
    {
        cardType: "JavaScript Methods",
        term: ".flat()",
        definition: "ARRAY: Creates a new array of two concatenated arrays, with an optional argument to specify array depth.",
        example: "[1, 2, 3, [4, 5]].flat() => [1, 2, 3, 4, 5]"
    },
    {
        cardType: "JavaScript Methods",
        term: ".flatMap()",
        definition: "ARRAY: Identical to calling .map() followed by .flat(). Returns a new one-dimensional array with mapped values.",
        example: "[1, 2, 3, [4, 5]].flatMap(number => number * 2) => [2, 4, 6, 8, 10]"
    },
    {
        cardType: "JavaScript Methods",
        term: ".repeat()",
        definition: "STRING: Repeats a string x amount of times, with x as the argument.",
        example: "'example'.repeat(3) => 'exampleexampleexample'"
    },
    {
        cardType: "JavaScript Methods",
        term: ".sort()",
        definition: "ARRAY: Sorts indexes in an array, using a function as an argument to define condition.",
        example: "[2, 8, 1].sort((a, b) => a - b) => [1, 2, 8]"
    },
    {
        cardType: "JavaScript Methods",
        term: ".splice()",
        definition: "ARRAY: Changes contents of original array by removing or replacing items (destructive). Args = (startIndex, numberOfItemsToDelete, itemToAdd, ItemToAdd2++)",
        example: "['Cat', 'Dog', 'Horse'].splice(1, 0, 'Rabbit') => ['Cat', 'Rabbit', 'Dog', 'Horse']"
    },
    {
        cardType: "JavaScript Methods",
        term: ".reduce()",
        definition: "ARRAY: Distills all elements in an array to a single output value, using a reducer function.",
        example: "[1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue) => 6"
    },
    {
        cardType: "JavaScript Methods",
        term: ".reverse()",
        definition: "ARRAY: Flips the order of indexes in an array and returns same array (destructive).",
        example: "[1, 2, 3].reverse() => [3, 2, 1]"
    },
]

export default prototypeMethods;