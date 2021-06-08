import React from "react";
import XGBimg from "../images/xgboost.png";

function XGBoost() {
  return (
    <>
      <h2>XG Boost</h2>
      <p class="lead">
        Accuracy: 0.7360565593087196
        <br />
        F1 Score: 0.7980769230769231
        <br />
        ROC-AUC score: 0.7069215300451922
        <br />
      </p>
      <img
        src={XGBimg}
        class="img-fluid"
        alt="XG Boost"
        style={{ maxHeight: "600px" }}
      />
    </>
  );
}

export default XGBoost;
