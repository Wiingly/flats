import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylings/Nav.css'

const SignUpNav = () => {

  return(
    <div className="nav">
        <div className="blank">_______</div>

        <NavLink className="wing" to="/home">WINGLY</NavLink>
       
        <NavLink className="link" to="/login">
            LOGIN
        </NavLink>
    </div>
  )
}

export default SignUpNav