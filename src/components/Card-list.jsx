import React from 'react'
import '/Users/divyanshuvarshney/Desktop/reactjs/main-js/src/components/Card-list.css';
import Card from './card';


export default function Cardlist(props) {
  return (
    <div className='Cardlist'>
        {props.monsters.map((monster)=>(<Card key={monster.id} monster={monster}/>))}
    </div>
  )
}
