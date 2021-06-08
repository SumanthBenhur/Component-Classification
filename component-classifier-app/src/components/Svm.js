import React from "react";
import svmimg from "../images/svm.png";

function SVM() {
  return (
    <>
      <h2>SVM</h2>
      <p class="lead">
        SVM is a supervised machine learning algorithm which is capable of
        performing both regression and classification tasks. Mostly it is used
        for classification tasks. SVM model works by plotting our data points in
        an n dimensional space (n is number of features).The classification task
        is performed by finding the appropriate hyper-plane for our data (the
        one which separates our data really well).
      </p>
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
