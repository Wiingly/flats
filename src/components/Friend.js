import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import friendSchema from "./FriendSchema";
import FollowerInfo from "./FollowerInfo"
import * as yup from "yup";
import '../stylings/Friend.css'
import HomeNav from "./HomeNav";

const initialFormValues = {
    user2_id: "",
  };

const initialFormErrors = {
  user2_id: "",
};

const Friend = (props) => {
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [userid, setUserid] = useState([])
  const [follow, setFollow] = useState([])
  const { follower_id } = props;
  const [formValues, setFormValues] = useState({
    ...initialFormValues,
    follower_id: follower_id,
  });

  axiosWithAuth()
    .get(`api/users`)
    .then((res) => {
      console.log(res.data);
      setUserid(res.data);
    })
    .catch((err) => {
      console.log({ "Friend err:": err });
    });

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

  const changeHandler = (evt) => {
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
    yup
      .reach(friendSchema, evt.target.name)
      .validate(evt.target.value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [evt.target.name]: "",
        });
        console.log("changehandler", formValues.user2_id);
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [evt.target.name]: "",
        });
      });
  };

  const submitter = (evt) => {
    evt.preventDefault();
    const newFollowerData = {
      follower_id: follower_id,
      user2_id: formValues.user2_id.trim(),
  };

  axiosWithAuth()
      .post(`api/follow`, newFollowerData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log({ "Friend err:": err });
      });
  };

  function refreshPage(){
    window.location.reload();
} 

  return (
    <div>
    <HomeNav/>
    <div>
        {follow.map(follow => {
          console.log(follow)
          return (
            <FollowerInfo key={follow.user2_id} follow={follow}/>
          )
        })}
      </div>
    <div className="userid">
          YOUR ID: {userid}
    </div>
    <div className="friend-border">
      <form onSubmit={submitter}>
        <label>
          <h3>FRIEND ID</h3>
        </label>
        {formErrors.user2_id ? (
          <p>{formErrors.user2_id}</p>
        ) : null}
        <input
          type="text"
          name="user2_id"
          id="user2_id"
          value={formValues.user2_id}
          onChange={changeHandler}
          placeholder="add my cat, his ID is 3"
        ></input>
        <div>
        <button type="submit" onClick={refreshPage}>Follow</button>
        </div>
      </form>
      
    </div>
    </div>
  );
};
export default Friend;
