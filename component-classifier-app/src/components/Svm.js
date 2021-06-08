import React from "react";
import svmimg from "../images/svm.png";

function SVM() {
  return (
    <>
      <h2>SVM</h2>
      <p class="lead">
        Accuracy: 0.7407698350353495
        <br />
        F1 Score: 0.7995139732685298
        <br />
        ROC-AUC score: 0.7166437822993925
        <br />
      </p>
      <img
        src={svmimg}
        class="img-fluid"
        alt="svm"
        style={{ maxHeight: "600px" }}
      />
    </>
  );
}

export default SVM;
