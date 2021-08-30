import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylings/Nav.css'

const AddNav = () => {

  return(
    <div className="nav">
        <NavLink className="link" to="/stats">
            STATS
        </NavLink>

        <NavLink className="wing" to="/home">WINGLY</NavLink>
       
        <NavLink className="link" to="/home">
            HOME
        </NavLink>
    </div>

  )
}

export default AddNav