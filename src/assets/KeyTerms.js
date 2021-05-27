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
]

    export default keyTerms;