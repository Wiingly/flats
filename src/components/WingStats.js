import React, { useState } from "react";
import styled from "styled-components";
import "../stylings/Stats.css"

const WingStats = (props) => {
    const {
      flavor,
      amount,
      location,
    } = props.wing;

    return (
        <div className="data">
            <span className="flavor-data">
                {flavor}
            </span> 
            <span className="amount-data">
                {amount}
            </span>
        </div>
    )
};

export default WingStats;