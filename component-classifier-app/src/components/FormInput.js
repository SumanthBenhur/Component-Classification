import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
      <label for="UserOption" className="form-label">
          Select an algorithm
        </label>
      <select
        name="userOption"
        className="form-select form-control col-lg-3 col-sm-10"
        aria-label="Default select example"
        onChange={handleChange}
      >
        <option>Choose an option</option>
        <option value="XGBoost">XG Boost</option>
        <option value="KNN">KNN</option>
        <option value="LinearLearner">Linear Learner</option>
        <option value="SVM">SVM</option>
      </select>

      <div className="col-lg-3 col-sm-10">
        <label for="length" className="form-label">
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

      <div className="col-lg-3 col-sm-10">
        <label for="width" className="form-label">
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

      <div className="col-lg-3 col-sm-10">
        <label for="thickenss" className="form-label">
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
