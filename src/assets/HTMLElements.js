const HTMLElements = [
    {
        cardType: "Semantic HTML",
        term: "<blockquote>",
        definition: "Quote that requires citation.",
        example: "Includes indentation."
    },
    {
        cardType: "Semantic HTML",
        term: "<article>",
        definition: "Independent, unique, reusable content.",
        example: "Product card, blog content, news article, bio, etc."
    },
    {
        cardType: "Semantic HTML",
        term: "<nav>",
        definition: "Navigational elements.",
        example: "Should have links as direct children."
    },
    {
        cardType: "Semantic HTML",
        term: "<aside>",
        definition: "Content indirectly related to document's main content.",
        example: "Widely used for sidebars and call-out boxes."
    },
    {
        cardType: "Semantic HTML",
        term: "<details>",
        definition: "Information only visible when toggled to an open state, aka a 'twistie'.",
        example: "Must include a nested <summary> tag."
    },
    {
        cardType: "Semantic HTML",
        term: "<figure>",
        definition: "Represents self-contained content, such as an image with a caption.",
        example: "Nest an <img> and <figcaption> inside a <figure>."
    },
    {
        cardType: "Semantic HTML",
        term: "<figcaption>",
        definition: "A caption for another element inside a <figure> element.",
        example: "An <img> and <figcaption> are nested together inside a <figure>."
    },
    {
        cardType: "Semantic HTML",
        term: "<footer>",
        definition: "A footer for an existing content section.",
        example: "Typically contains contact info, copyright data, links, etc."
    },
    {
        cardType: "Semantic HTML",
        term: "<header>",
        definition: "Introductory content, typically including navigation.",
        example: "May contain a logo, search form, nav links, etc."
    },
    {
        cardType: "Semantic HTML",
        term: "<main>",
        definition: "The dominant content inside a <body> element.",
        example: "Directly related to the central topic or functionality of a page."
    },
    {
        cardType: "Semantic HTML",
        term: "<mark>",
        definition: "Marked or highlighted text within a passage.",
        example: "<p>The word <mark>highlighted</mark> is highlighted.</p>"
    },
    {
        cardType: "Semantic HTML",
        term: "<section>",
        definition: "A generic standalone grouping without a more specific tag.",
        example: "Should always include a heading element, with very few exceptions."
    },
    {
        cardType: "Semantic HTML",
        term: "<summary>",
        definition: "Placed inside a <details> element, it's the text that's always shown.",
        example: "Summary text will always be visible and should lead toward the hidden content in <details>."
    },
    {
        cardType: "Semantic HTML",
        term: "<time>",
        definition: "Represents a specific period in time, such as a time or date. May include datetime attribute.",
        example: "<time datetime='2018-07-07'>July 7</time>"
    },
]

export default HTMLElements;