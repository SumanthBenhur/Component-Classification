import React from "react";
import XGBimg from "../images/xgboost.png";

function XGBoost() {
  return (
    <>
      <h2>XG Boost</h2>
      <p class="lead">
        XGBoost is the latest sensation among ML algorithms. XGBoost stands for
        Extreme Gradient Boosting. As the name suggests, boosting means
        improving or making better than before. XGBoost is an ensemble learning
        technique, which means it makes use of many base learners/weak learners
        and improves their performance via boosting and uses them collectively
        to get the best possible prediction/output. This algorithm is a
        sequential ensemble boosting technique.{" "}
      </p>
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
