import React from 'react'

export default function Card({ content, example }) {

    return (
        <div className="card">
            <h1>{content}</h1>
            {example ? <h4>{example}</h4> : null }
        </div>
    )
}
