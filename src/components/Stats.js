import React, {useEffect, useState} from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import WingStats from './WingStats';
import { axiosWithAuth } from "../auth/axiosWithAuth";
import StatsNav from "./StatsNav";
import "../stylings/Stats.css"

function Stats() {
  const [wing, setWing] = useState([])
  const { push } = useHistory();
  const [takeMeBack, setTakeMeBack] = useState(false);


  useEffect(() => {
    axiosWithAuth()
    .get(`api/wings/`)
    .then((response) => {
      setWing(response.data);
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    });
  }, []);

return (
    <div>
      <StatsNav/>
      <div className="stats-border">
        <div className="categories">
          <span className="cflavor">FLAVOR</span>
          <span className="clines">||</span>
          <span className="camount">AMOUNT</span>
        </div>
        {wing.map(wing => {
            return (
              <WingStats key={wing.wing_id} wing={wing}/>
            )
          })
        }    
      </div>
    </div>
  );
}

const StyledH = styled.div`
  display: flex;
  justify-content: center;
`

export default Stats;