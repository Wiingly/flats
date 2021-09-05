import React, {useEffect, useState} from "react";
import WingStats from './WingStats';
import { axiosWithAuth } from "../auth/axiosWithAuth";
import StatsNav from "./StatsNav";
import "../stylings/Stats.css"

function Stats() {
  const [wing, setWing] = useState([])


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

  console.log(wing)

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


export default Stats;