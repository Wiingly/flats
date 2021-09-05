import React from "react";
import "../stylings/Stats.css"

const FollowerInfo = (props) => {
    const {
      username,
      wingStats,
    } = props.follow;

    console.log(username)

    return (
        <div className="friends">
          {username.map(u => {
            return u.username
          })} - {wingStats.map(w => {
            return w.total
          })}
        </div>
    )
};

export default FollowerInfo;