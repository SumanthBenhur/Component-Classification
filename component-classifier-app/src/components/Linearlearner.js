import React from "react";
import linimag from "../images/logreg.png";

function LinearLearner() {
  return (
    <>
      <h2>Linear Learner</h2>
      <p class="lead">
        Logistic Regression(Linear Learner) is a core supervised learning
        technique used to solve classification problems. Logistic Regression has
        been built up from Linear Regression. This can be used to solve binary
        classification problems (0 & 1), as well as multi-class classification
        problems. In Logistic Regression, the sigmoid function is applied to the
        output of Linear Regression which makes sure that the output of the
        algorithm is the probability that the event occurs (always between 0 &
        1). By setting the appropriate threshold (default=0.5) the algorithm can
        predict the classes 0 or 1.
      </p>
      <p class="lead">
        Accuracy : 0.7391987431264729 <br />
        F1 Score: 0.7997587454764777
        <br />
        ROC-AUC score: 0.7118826626591995
        <br />
      </p>
      <img
        src={linimag}
        class="img-fluid"
        alt="linear learner"
        style={{ maxHeight: "600px" }}
      />
    </>
  );
}

export default LinearLearner;
