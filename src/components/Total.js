import React, {useEffect, useState} from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import HomeNav from "./HomeNav";
import Follower from "./Follower"
import "../stylings/Total.css"

function Stats() {
  const [wing, setWing] = useState([])


  useEffect(() => {
    axiosWithAuth()
    .get(`api/wings/total`)
    .then((response) => {
      setWing(response.data);
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    });
    }, []);

  // function logout() {
  //     localStorage.clear();
  //     window.location.href = '/';
  // }


  return (
    <div>
      <HomeNav/>
      <Follower/>
      <div className="border">
      <p className="total">
        TOTAL
      </p>
      <div className="number">
      {wing.map(wing => {
          return (
            wing.total
          )})}    
      </div>
      </div>
    </div>
  );
}

export default Stats;