import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import LoginSchema from "./LoginSchema";
import axios from "axios";
import LoginNav from "./LoginNav";
import "../stylings/Login.css"

const initialFormValues = {
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
};

const Login = (props) => {
  const history = useHistory();
  const [loginValues, setLoginValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    LoginSchema.isValid(loginValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [loginValues]);

  const handleChanges = (e) => {
    yup
      .reach(LoginSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [e.target.name]: err.errors[0],
        });
      });
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://wiingly.herokuapp.com/api/auth/login",
        loginValues
      )
      .then((res) => {
        console.log("login resp", res.data);
        localStorage.setItem("token", res.data.token);
        history.push("/home");
      })
      .catch((error) => console.log({ error }));
  };

  return (
    <div>
    <LoginNav/>
    <div className="login-border">
      <form className="loginformcontainer" onSubmit={submitForm}>
        <p className="login">LOGIN</p>
        <div>
          <label>
            <input
              name="username"
              placeholder="Username"
              type="username"
              value={loginValues.username}
              onChange={handleChanges}
            />
          </label>

          <p>{formErrors.username}</p>

          <label>
            <input
              name="password"
              placeholder="Password"
              type="password"
              value={loginValues.password}
              onChange={handleChanges}
              id="password"
            />
          </label>
        </div>
        <button disabled={disabled} type="submit">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default Login;