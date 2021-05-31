const keyTerms = [
    {
        cardType: "Key Term",
        term: "Hoisting",
        definition: "All declarations moved to top of scope at run time.",
        example: "Allows for declaring variables before they're assigned a value."
    },
    {
        cardType: "Key Term",
        term: "Promise",
        definition: "Object that represents future outcome of async operation: Pending, Fulfilled, Rejected.",
        example: "A fetch call followed by .then()-type statements is a promise chain."
    }, 
    {
        cardType: "Key Term",
        term: "IIFE",
        definition: "Immediately Invoked Function Expression.",
        example: "(() => console.log('Hi'))();"
    },
    {
        cardType: "Key Term",
        term: "Template Literal",
        definition: "Strings denoted with backticks (``) that allow for embedded expressions and multi-line strings.",
        example: "`My name is ${name}`"
    },
    {
        cardType: "Key Term",
        term: "Ternary Operator",
        definition: "A syntactical shortcut for an if statement.",
        example: "condition ? expressionIfTrue : expressionIfFalse"
    },
    {
        cardType: "Key Term",
        term: "Falsy",
        definition: "A value that is considered false in a boolean context.",
        example: "false, 0, -0, 0n, '', null, undefined, NaN are all falsy by default."
    },
    {
        cardType: "Key Term",
        term: "Truthy",
        definition: "A value that is considered true in a boolean context.",
        example: "All values in JavaScript are truthy unless defined as falsy, such as null and NaN."
    },
    {
        cardType: "Key Term",
        term: "Client-Side Rendering",
        definition: "A method based on loading a page with a singular bare-bones HTML file, with JavaScript handling most of the rendering through the user's browser.",
        example: "Used in Single Page Application libraries like React and Vue. Slower initial load than server-side rendering, but faster after. SEO can take a hit."
    },
    {
        cardType: "Key Term",
        term: "Server-Side Rendering",
        definition: "The user's browser sends a request for a new HTML file on every page load, instead of only once at the beginning like in client-side rendering.",
        example: "The traditional way of rendering websites. Faster initial load, slower after. Good for SEO and static sites."
    },
    {
        cardType: "Key Term",
        term: "Const vs. Let",
        definition: "Let variables can be reassigned but not redeclared; const variables can't be reassigned or redeclared.",
        example: "Both are block scoped and recommended in place of var as of ES6(2015)."
    },
    {
        cardType: "Key Term",
        term: "event.target() vs. event.currentTarget()",
        definition: "event.target() = HTML element where action (i.e. click) took place; event.currentTarget() = HTML element with event listener.",
        example: "Think event delegation! If an event listener is on a parent div and a user clicks on a child button, the currentTarget is the div and the target is the button."
    },
    {
        cardType: "Key Term",
        term: "Callback Function",
        definition: "Function executed after another function is called. Can be passed as param to other functions, allowing synchronous execution.",
        example: "const myCallback = (() => {this is the callback function}) => {do stuff}"
    },
    {
        cardType: "Key Term",
        term: "Unary Plus (+)",
        definition: "Preceding an operand, converts that operand to number data type.",
        example: "+'1' => 1"
    },
    {
        cardType: "Key Term",
        term: "Pure Function",
        definition: "A function that will always return the same output given the same input. No side effects or reliance on third-party data.",
        example: "const pureFunction = (a, b) => return a + b"
    },
    {
        cardType: "Key Term",
        term: "Destructuring",
        definition: "Breaking down an object to allow easier access to inner properties.",
        example: "const person = {name: 'Jessica', age: 29}; let { name, age } = person; console.log(name) => 'Jessica'"
    },
    {
        cardType: "Key Term",
        term: "Closure",
        definition: "An inner function has access to variables and params of outer function.",
        example: "Inner scope 'remembers' outer scope and associated data."
    },
    {
        cardType: "Key Term",
        term: "Undefined vs. Null",
        definition: "Null is an assigned, intentionally placed lack of value, while undefined is an unassigned variable or a function that doesn't return a value.",
        example: "let example1; => undefined // let example2 = null => null"
    },
    {
        cardType: "Key Term",
        term: "Async/await",
        definition: "Tells the program to stop and wait until something is resolved, such as a fetch call.",
        example: "const getUsers = async () => {const response = await fetch('url')}"
    },
    {
        cardType: "Key Term",
        term: "Static Generation (SSG)",
        definition: "Pre-rendering method that generates HTML at build time, instead of on each server request.",
        example: "Use if page can be preloaded without user input."
    },
]

    export default keyTerms;