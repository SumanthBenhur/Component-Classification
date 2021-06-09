import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LinearLearner from "./Linearlearner";
import XGBoost from "./XgBoost";
import KNN from './Knn';
import SVM from './Svm';
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

    function renderDesc(){
      if(data.userOption === "XGBoost") return <XGBoost />;
      else if(data.userOption === "KNN") return <KNN />;
      else if(data.userOption === "SVM") return <SVM />;
      else if(data.userOption === "LinearLearner") return <LinearLearner />;
      else return null;
    }
  return (
    <>
      <h1 class="display-4">Prediction and algorithm analysis</h1>
      <div class="row" style = {{marginTop: "20px"}}>
        <div class="form-group col-lg-3 col-sm-12">
          {/*  drop down box  */}
          <label for="UserOption" className="form-label" style = {{marginTop : "10px"}}>
            Select an algorithm
          </label>
          <select
            name="userOption"
            className="form-select form-control"
            aria-label="Default select example"
            onChange={handleChange}
          >
            <option>Choose an option</option>
            <option value="XGBoost">XG Boost</option>
            <option value="KNN">KNN</option>
            <option value="LinearLearner">Linear Learner</option>
            <option value="SVM">SVM</option>
          </select>

          <div>
            <label for="length" className="form-label" style = {{marginTop : "10px"}}>
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

          <div>
            <label for="width" className="form-label" style = {{marginTop : "10px"}}>
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

          <div>
            <label for="thickenss" className="form-label" style = {{marginTop : "10px"}}>
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
            style={{
              marginTop: "30px",
            }}
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
          <h5 style = {{marginTop : "20px"}}>{pred}</h5>
        </div>
        <div class="col-lg-9 col-sm-12" >
          {
            renderDesc()
          }
        </div>
      </div>
    </>
  );
}

export default FormInput;
