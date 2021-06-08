import React from "react";
import knnimg from "../images/knn.png";
function KNN() {
  return (
    <>
      <h2>K - nearest neighbours</h2>
      <p class="lead">
        K Nearest Neighbors (popularly KNN) is another supervised learning
        technique used for classification use cases. KNN assumes that similar
        things are closer to each other and classifies them accordingly.
      </p>
      <p class="lead">
        Accuracy: 0.7062058130400628
        <br />
        F1 Score: 0.7574578469520105
        <br />
        ROC-AUC score: 0.7051484420611067
        <br />
      </p>
      <img
        src={knnimg}
        class="img-fluid"
        alt="knn"
        style={{ maxHeight: "600px" }}
      />
    </>
  );
}

export default KNN;
