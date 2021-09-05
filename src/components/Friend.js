import React, { useState } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import friendSchema from "./FriendSchema";
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
  const [showResults, setShowResults] = useState(false)
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

  const Success = () => {
    setShowResults(true)
  }

  const Results = () => (
    <div id="results" className="friend-results">
      FRIEND ADDED
    </div>
  )

  return (
    <div>
    <HomeNav/>
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
          placeholder="add my cat his ID is 3"
        ></input>
        <div>
        <button type="submit" onClick={Success}>Follow</button>
        { showResults ? <Results /> : null }
        </div>
      </form>
      
    </div>
    </div>
  );
};
export default Friend;
