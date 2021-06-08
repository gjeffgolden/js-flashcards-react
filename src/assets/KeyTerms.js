const keyTerms = [
    {
        cardType: "JavaScript Key Terms",
        term: "Hoisting",
        definition: "All declarations moved to top of scope at run time.",
        example: "Allows for declaring variables before they're assigned a value."
    },
    {
        cardType: "JavaScript Key Terms",
        term: "Promise",
        definition: "Object that represents future outcome of async operation: Pending, Fulfilled, Rejected.",
        example: "A fetch call followed by .then()-type statements is a promise chain."
    }, 
    {
        cardType: "JavaScript Key Terms",
        term: "IIFE",
        definition: "Immediately Invoked Function Expression.",
        example: "(() => console.log('Hi'))();"
    },
    {
        cardType: "JavaScript Key Terms",
        term: "Template Literal",
        definition: "Strings denoted with backticks (``) that allow for embedded expressions and multi-line strings.",
        example: "`This string is in backtacks.`"
    },
    {
        cardType: "JavaScript Key Terms",
        term: "Ternary Operator",
        definition: "A syntactical shortcut for an if statement.",
        example: "condition ? expressionIfTrue : expressionIfFalse"
    },
    {
        cardType: "JavaScript Key Terms",
        term: "Falsy",
        definition: "A value that is considered false in a boolean context.",
        example: "false, 0, -0, 0n, '', null, undefined, NaN are all falsy by default."
    },
    {
        cardType: "JavaScript Key Terms",
        term: "Truthy",
        definition: "A value that is considered true in a boolean context.",
        example: "All values in JavaScript are truthy unless defined as falsy, such as null and NaN."
    },
    {
        cardType: "JavaScript Key Terms",
        term: "Client-Side Rendering",
        definition: "Page loads with a singular bare-bones HTML file, with JavaScript handling most of the rendering through the user's browser.",
        example: "Slower initial load than server-side rendering, but faster after. SEO can take a hit."
    },
    {
        cardType: "JavaScript Key Terms",
        term: "Server-Side Rendering",
        definition: "The user's browser sends a request for a new HTML file on every page load.",
        example: "The traditional way of rendering websites. Faster initial load, slower after. Good for SEO and static sites."
    },
    {
        cardType: "JavaScript Key Terms",
        term: "Const vs. Let",
        definition: "Let variables can be reassigned but not redeclared; const variables can't be reassigned or redeclared.",
        example: "Both are block scoped and recommended in place of var as of ES6(2015)."
    },
    {
        cardType: "JavaScript Key Terms",
        term: "event.target()",
        definition: "HTML element where action (i.e. click) took place.",
        example: "If you click on a button, that element is the target."
    },
    {
        cardType: "JavaScript Key Terms",
        term: "event.currentTarget()",
        definition: "HTML element with attached event listener, regardless if action took place on a child.",
        example: "If an event listener is on a parent div and a user clicks on a child button, the currentTarget is the div."
    },
    {
        cardType: "JavaScript Key Terms",
        term: "Callback Function",
        definition: "Function executed after another function is called. Can be passed as param to other functions.",
        example: "const example = () => callbackFunction()"
    },
    {
        cardType: "JavaScript Key Terms",
        term: "Unary Plus (+)",
        definition: "Preceding an operand, converts that operand to number data type.",
        example: "+'1' => 1"
    },
    {
        cardType: "JavaScript Key Terms",
        term: "Pure Function",
        definition: "A function that will always return the same output given the same input. No side effects.",
        example: "const pureFunction = (a, b) => return a + b"
    },
    {
        cardType: "JavaScript Key Terms",
        term: "Destructuring",
        definition: "Breaking down an object to allow easier access to inner properties.",
        example: "const person = {name: 'Jessica', age: 29}; let { name, age } = person; console.log(name) => 'Jessica'"
    },
    {
        cardType: "JavaScript Key Terms",
        term: "Closure",
        definition: "An inner function has access to variables and params of outer function.",
        example: "Inner scope 'remembers' outer scope and associated data."
    },
    {
        cardType: "JavaScript Key Terms",
        term: "Undefined vs. Null",
        definition: "An unassigned variable or a function that doesn't return a value.",
        example: "let example; console.log(example) => undefined"
    },
    {
        cardType: "JavaScript Key Terms",
        term: "Null",
        definition: "An assigned, intentionally placed lack of value.",
        example: "let example = null; => null"
    },
    {
        cardType: "JavaScript Key Terms",
        term: "Async/Await",
        definition: "Tells the program to stop and wait until something is resolved, such as a fetch call.",
        example: "const getUsers = async () => {const response = await fetch('url')}"
    },
    {
        cardType: "JavaScript Key Terms",
        term: "Static Generation (SSG)",
        definition: "Pre-rendering method that generates HTML at build time, instead of on each server request.",
        example: "Use if page can be preloaded without user input."
    },
]

    export default keyTerms;