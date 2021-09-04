import React, {useEffect, useState} from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
// import FollowerInfo from "./FollowerInfo"

function Stats() {
  const [follow, setFollow] = useState([])


  useEffect(() => {
    axiosWithAuth()
    .get(`api/follow`)
    .then((response) => {
      setFollow(response.data.total);
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    });
    }, []);


  return (
    <div>
        {follow}
    </div>
  );
}

export default Stats;