import React, {useEffect, useState} from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import WingStats from './WingStats';
import { axiosWithAuth } from "../auth/axiosWithAuth";
import HomeNav from "./HomeNav";
import "../stylings/Total.css"

function Stats() {
  const [wing, setWing] = useState([])
  const { push } = useHistory();
  const [takeMeBack, setTakeMeBack] = useState(false);


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