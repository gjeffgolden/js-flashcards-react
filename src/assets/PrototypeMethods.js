const prototypeMethods = [
    {
        cardType: "Method",
        term: ".substring()",
        definition: "String Method: Returns a section of string, as sliced from index.",
        example: "'string'.substring(0,3) => 'str' "
    },
    {
        cardType: "Method",
        term: ".slice()",
        definition: "Array Method: Slices out section of array based on index and returns new array (non-destructive).",
        example: "[1, 2, 3].slice(0,2) => [1, 2]"
    },
    {
        cardType: "Method",
        term: ".concat()",
        definition: "Array Method: Merges two or more arrays and returns new array (non-destructive).",
        example: "[1, 2, 3].concat([4,5])) => [1, 2, 3, 4, 5]"
    },
    {
        cardType: "Method",
        term: ".copyWithin()",
        definition: "Array Method: Copies part of an array and pastes it to another location in same array without modifying its length (destructive). Three params: (target, start index, end index).",
        example: "[1, 2, 3].copyWithin(0, 1, 2)) => [2, 2, 3]"
    },
]

export default prototypeMethods;