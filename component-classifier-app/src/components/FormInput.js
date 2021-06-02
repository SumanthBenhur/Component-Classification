import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SubHeading from "./SubHeading";
import "./componentCss/formInput.css";

function FormInput() {
  const [data, setData] = useState({
    userOption: "",
    length: 0.0,
    width: 0.0,
    thickness: 0.0,
  });

  const [pred, setPred] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const url =
    "https://uqj1svfj14.execute-api.us-east-2.amazonaws.com/live/pget?userOption=" +
    data.userOption +
    "&length=" +
    data.length +
    "&width=" +
    data.width +
    "&thickness=" +
    data.thickness;

  return (
    <div>
      {/*  drop down box  */}
      <SubHeading SubHeading="Select which algorithm to use for prediction" />
      <select
        name="userOption"
        className="form-select w-50 h-50"
        aria-label="Default select example"
        onChange={handleChange}
      >
        <option>Choose an option</option>
        <option value="XGBoost">XG Boost</option>
        <option value="KNN">KNN</option>
        <option value="LinearLearner">Linear Learner</option>
        <option value="SVM">SVM</option>
      </select>

      <SubHeading SubHeading="Features" />
      <div className="mb-3 w-25">
        <label for="exampleInputEmail1" className="form-label">
          Length
        </label>
        <input
          type="text"
          name="length"
          onChange={handleChange}
          className="form-control"
          aria-describedby="emailHelp"
          value={data.length}
        />
      </div>

      <div className="mb-3 w-25">
        <label for="exampleInputEmail1" className="form-label">
          Width
        </label>
        <input
          name="width"
          onChange={handleChange}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          value={data.width}
        />
      </div>

      <div className="mb-3 w-25">
        <label for="exampleInputEmail1" className="form-label">
          Thickness
        </label>
        <input
          name="thickness"
          onChange={handleChange}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          value={data.thickness}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary "
        onClick={() => {
          fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => setPred(data.body));
        }}
      >
        Predict
      </button>
      <h5>{pred}</h5>
    </div>
  );
}

export default FormInput;
