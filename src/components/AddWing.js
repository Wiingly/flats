import React, { useState } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import addSchema from "./AddSchema";
import * as yup from "yup";
import '../stylings/Add.css'
import AddNav from "./AddNav";

const initialFormValues = {
    flavor: "",
    location: "",
    amount: 0,
  };

const initialFormErrors = {
  flavor: "",
  location: "",
  amount: 0,
};

const AddWing = (props) => {
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [showResults, setShowResults] = useState(false)
  const { wing_id } = props;
  const [formValues, setFormValues] = useState({
    ...initialFormValues,
    wing_id: wing_id,
  });

  const changeHandler = (evt) => {
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
    yup
      .reach(addSchema, evt.target.name)
      .validate(evt.target.value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [evt.target.name]: "",
        });
        console.log("changehandler", formValues.flavor);
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [evt.target.name]: err.errors[0],
        });
      });
  };

  const submitter = (evt) => {
    evt.preventDefault();
    const newWingData = {
      wing_id: wing_id,
      flavor: formValues.flavor.trim(),
      location: formValues.location.trim(),
      amount: Number(formValues.amount),
    };

    axiosWithAuth()
      .post(`api/wings`, newWingData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log({ "AddWing err:": err });
      });
  };

  const Success = () => {
    setShowResults(true)
  }

  const Results = () => (
    <div id="results" className="wing-results">
      WING ADDED
    </div>
  )

  return (
    <div>
    <AddNav/>
    <div className="add-border">
      <form onSubmit={submitter}>
        <label>
          <h3>FLAVOR</h3>
        </label>
        {formErrors.flavor ? (
          <p>{formErrors.flavor}</p>
        ) : null}
        <input
          type="text"
          name="flavor"
          id="flavor"
          value={formValues.flavor}
          onChange={changeHandler}
          placeholder="banned if ranch"
        ></input>

        <label>
          <h3>AMOUNT</h3>
        </label>
        <input
          id="amount"
          type="integer"
          name="amount"
          value={formValues.amount}
          onChange={changeHandler}
        >
        </input>

        <label>
          <h3>LOCATION</h3>
        </label>
        {formErrors.location ? (
          <p>{formErrors.location} </p>
        ) : null}
        <input
          id="location"
          type="text"
          name="location"
          value={formValues.location}
          onChange={changeHandler}
          placeholder="banned if dominos"
        ></input>
        <br/>
        <div>
        <button type="submit" onClick={Success}>Add Wings</button>
        { showResults ? <Results /> : null }
        </div>
      </form>
    </div>
    </div>
  );
};
export default AddWing;
