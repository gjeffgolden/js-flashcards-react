import React from 'react'

export default function Card({ content, example }) {

    return (
        <article className="card">
            {example ? <h2>{content}</h2> : <h1>{content}</h1>}
            {example ? <h4>{example}</h4> : null}
        </article>
    )
}
