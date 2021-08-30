import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylings/Nav.css'

const HomeNav = () => {

  return(
    <div className="nav">
        <NavLink className="link" to="/stats">
            STATS
        </NavLink>

        <NavLink className="wing" to="/home">WINGLY</NavLink>
       
        <NavLink className="link" to="/new">
            ADD
        </NavLink>
    </div>

  )
}

export default HomeNav