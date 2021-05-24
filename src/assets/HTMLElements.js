const htmlElements = [
    {
        cardType: "HTML",
        term: "<section>",
        definition: "General content grouping that doesn't fit more specific tags.",
        example: "Do not nest inside another section (top-level element)."
    },
    {
        cardType: "HTML",
        term: "<blockquote>",
        definition: "Quote that requires citation.",
        example: "Includes indentation."
    },
    {
        cardType: "HTML",
        term: "<article>",
        definition: "Independent, unique, reusable content.",
        example: "Product card, blog content, news article, bio, etc."
    },
    {
        cardType: "HTML",
        term: "<nav>",
        definition: "Navigational elements.",
        example: "Should have links as direct children."
    },
    {
        cardType: "HTML",
        term: "<aside>",
        definition: "Content indirectly related to document's main content.",
        example: "Widely used for sidebars and call-out boxes."
    },
    {
        cardType: "HTML",
        term: "<details>",
        definition: "Information only visible when toggled to an open state, aka a 'twistie'.",
        example: "Must include a nested <summary> tag."
    },
]

export default htmlElements;