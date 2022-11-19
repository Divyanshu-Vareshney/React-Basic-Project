import React from 'react'
import "/Users/divyanshuvarshney/Desktop/reactjs/main-js/src/components/card.css";

export default function Card(props) {
  return (
    <div className='card-container'>
        <img src="https://robohash.org/1?set=set2&size=150x150" alt="monster" />
        <h1>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
    </div>
  )
}
