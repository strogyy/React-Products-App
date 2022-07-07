import React from 'react'
import "./NotFound.css"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='not-found-cont'>
       <div className="not-found-inner">
        <h2>Couldn't find the page</h2>
        <Link className='goHome' to="/">Go back to home page</Link>
       </div>
   </div>
  )
}
export default NotFound