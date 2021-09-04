import React from "react";
import "../stylings/Stats.css"

const FollowerInfo = (props) => {
    const {
      user2_id,
    } = props.f;

    return (
        <div className="data">
                {user2_id}
        </div>
    )
};

export default FollowerInfo;