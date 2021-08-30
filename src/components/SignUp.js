import * as yup from "yup";
import React, { useEffect, useState } from "react";
import SignUpSchema from "./SignUpSchema";
import { useHistory } from "react-router-dom";
import axios from "axios";
import SignUpNav from "./SignUpNav";
import "../stylings/SignUp.css"

const initialFormValues = {
  username: "",
  password: "",
  confirmPassword: "",
};
const initialFormErrors = {
  username: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    SignUpSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const handleChanges = (e) => {
    yup
      .reach(SignUpSchema, e.target.name)
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
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
}
const submitForm = (e) => {
  e.preventDefault()
  const data = {username: formValues.username, password: formValues.password,}
  axios
  .post("https://wiingly.herokuapp.com/api/auth/register", data)
  .then((resObj) => {
    console.log("signup res", resObj)
    history.push("/login")
  })
  .catch(err => console.log({err}))
}
return (
  <div>
    <SignUpNav/>
    <div className="signup-border">
      <form className="signupformcontainer" onSubmit={submitForm}>
        <p className="signup">SIGN UP</p>
        <div>
          <label>
            <input
              name="username"
              placeholder="username"
              type="text"
              value={formValues.username}
              onChange={handleChanges}
            />
          </label>
          <p>{formErrors.username}</p>
          <label>
            <input
              name="password"
              placeholder="password"
              type="password"
              value={formValues.password}
              onChange={handleChanges}
              id="password"
            />
          </label>
          <p>{formErrors.password}</p>
          <div disabled={disabled} type="submit">Submit</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;