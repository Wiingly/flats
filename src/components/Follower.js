import React, {useEffect, useState} from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";

function Stats() {
  const [follow, setFollow] = useState([])


  useEffect(() => {
    axiosWithAuth()
    .get(`api/follow`)
    .then((response) => {
      setFollow(response.data[0].user2_id);
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