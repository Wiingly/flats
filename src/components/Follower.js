import React, {useEffect, useState} from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import FollowerInfo from "./FollowerInfo"
import { useHistory, NavLink } from "react-router-dom";
import "../stylings/Stats.css"

function Stats() {
  const [follow, setFollow] = useState([])

  const { push } = useHistory()

  useEffect(() => {
    axiosWithAuth()
    .get(`api/follow`)
    .then((response) => {
      setFollow(response.data);
      // console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    });
    }, []);

  return (
    <div>
      <div>
        {follow.map(follow => {
          console.log(follow)
          return (
            <FollowerInfo key={follow.user2_id} follow={follow}/>
          )
        })}
      </div>
      <NavLink className="addfriend" to='/friend'>
        ADD FRIEND
      </NavLink>
    </div>
  );
}

export default Stats;