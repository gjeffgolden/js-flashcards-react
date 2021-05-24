const prototypeMethods = [
    {
        cardType: "Method",
        term: ".substring()",
        definition: "STRING: Returns a section of string, as sliced from index.",
        example: "'string'.substring(0,3) => 'str' "
    },
    {
        cardType: "Method",
        term: ".slice()",
        definition: "ARRAY: Slices out section of array based on index and returns new array (non-destructive).",
        example: "[1, 2, 3].slice(0,2) => [1, 2]"
    },
    {
        cardType: "Method",
        term: ".concat()",
        definition: "ARRAY: Merges two or more arrays and returns new array (non-destructive).",
        example: "[1, 2, 3].concat([4,5])) => [1, 2, 3, 4, 5]"
    },
    {
        cardType: "Method",
        term: ".copyWithin()",
        definition: "ARRAY: Copies part of an array and pastes it to another location in same array without modifying its length (destructive). Three params: (target, start index, end index).",
        example: "[1, 2, 3].copyWithin(0, 1, 2)) => [2, 2, 3]"
    },
    {
        cardType: "Method",
        term: ".entries()",
        definition: "ARRAY: Returns a new Array Iterator object that contains the key/value pairs for each index.",
        example: "['a', 'b', 'c'].entries().next().value => Array [0, 'a']"
    },
    {
        cardType: "Method",
        term: ".every()",
        definition: "ARRAY: Tests whether all elements in an array pass a certain condition, returning a boolean value.",
        example: "[1, 2, 3, 4].every((currentValue) => currentValue < 5) => true"
    },
    {
        cardType: "Method",
        term: ".fill()",
        definition: "ARRAY: Changes all elements in an array to a static value from a start index to an end index, returning modified array (destructive).",
        example: "[1, 2, 3, 4].fill(0, 1, 2) => [1, 0, 0, 4]"
    },
    {
        cardType: "Method",
        term: ".filter()",
        definition: "ARRAY: Checks every element in an array and creates a new array with only elements that pass a certain condition (non-destructive).",
        example: "[1, 2, 3, 4].filter(number => number >= 3) => [3, 4]"
    },
    {
        cardType: "Method",
        term: ".find()",
        definition: "ARRAY: Returns the value of the first element in an array that matches a certain condition. If nothing meets the condition, returns undefined.",
        example: "[1, 2, 3, 4].find(number => number === 3) => 3"
    },
]

export default prototypeMethods;