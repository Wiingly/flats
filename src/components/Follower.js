import React from "react";
import { NavLink } from "react-router-dom";
import "../stylings/Stats.css"

function Follower() {

  return (
    <div>
      
      <NavLink className="addfriend" to='/friend'>
        FRIENDS
      </NavLink>
    </div>
  );
}

export default Follower;