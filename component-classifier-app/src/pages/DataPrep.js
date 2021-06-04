import React from "react";
import hmd from '../images/handlingMissingData.PNG'
import step1 from '../images/step1.jpeg'
import replace from '../images/replaceNum.jpeg'
import outliers from '../images/outliers.jpeg'
function DataPrep() {
  return (
    <>
      <h1 class="display-4">Data Preprocessing</h1>
      <h4>The data preprocessing steps performed are as follows:</h4>
      <p class="lead">
        <ol>
          <li>
            Dropped entries having more than one missing value (threshold = 4
            non NA values). <br />
            This results in 1275 samples of brake pads.<br/>
            <img src = {step1} class='img-fluid' alt = 'threshold remove' />
          </li>
          <li>
            In order to handle missing values in the length and width features
            we have replaced nan values with column wise mean of length and
            width with respect to the classOfPart (brake pad class).<br/>
            <img src = {hmd} class='img-fluid' alt = 'handling missing data' />
          </li>
          <li>
            We also replace the categorical classes in the target feature with 0
            and 1 as we have only two classes of brake pads.<br/>
            <img src = {replace} class='img-fluid' alt = 'replace features with num' />
          </li>
          <li>Removal of outliers in data<br/>
          <img src = {outliers} class='img-fluid' alt = 'remove outliers' />
          </li>
        </ol>
      </p>
    </>
  );
}

export default DataPrep;
