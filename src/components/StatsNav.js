import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylings/Nav.css'

const StatsNav = () => {

  return(
    <div className="nav">
        <NavLink className="link" to="/home">
            HOME
        </NavLink>

        <NavLink className="wing" to="/home">WINGLY</NavLink>
       
        <NavLink className="link" to="/new">
            ADD
        </NavLink>
    </div>

  )
}

export default StatsNav