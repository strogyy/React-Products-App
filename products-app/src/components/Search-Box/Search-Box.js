import React from 'react'
import "./Search-Box.css"


 const SearchBox = ({onChangeFunction, placeholder, type, field}) =>  {

    return (
        <div className='input-container'>
        <input
        type={type}
        className="searchInp"
        placeholder={placeholder}
        onChange={onChangeFunction}
      />
      {
        field !== "" ? <></> : <i className="fa-solid fa-magnifying-glass searchIcon"></i>
      }
    
        </div>
    )
 }
export default SearchBox