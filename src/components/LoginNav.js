import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylings/Nav.css'

const LoginNav = () => {

  return(
    <div className="nav">
        <div className="blank">_________</div>

        <NavLink className="wing" to="/home">WINGLY</NavLink>
       
        <NavLink className="link" to="/signup">
            SIGN UP
        </NavLink>
    </div>
  )
}

export default LoginNav