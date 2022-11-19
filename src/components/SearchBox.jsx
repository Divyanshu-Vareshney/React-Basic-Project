import "/Users/divyanshuvarshney/Desktop/reactjs/main-js/src/components/SearchBox.css";
 import React from 'react'
 
 export default function SearchBox({placeholder,Change}) {
   return (
        <input
        className="search"
       type='search' 
       placeholder={placeholder} 
       onChange={Change}
       />
   )
 }
 