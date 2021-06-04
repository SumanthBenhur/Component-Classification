import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import dataFrame from '../images/dataFrame.PNG'
function Introduction() {
  return (
    <>
      <h1 class="display-4">Introduction</h1>
      <p class="lead">
        The dataset in this use case consists of data of brake pads for disc
        brakes of a car. The brake pads either belong to the front or rear axle
        (vorderachse or hinterachse).The data contains dimensional attributes
        like length, width and thickness (in millimetres) of brake pads.
      </p>

      <p class="lead">
        The entire dataset comprises of 4001 entries and 5 columns, some of
        which are null (NaN). On removal of NaN values from the target feature
        (classOfPart) we have a dataset consisting of 1440 entries and 5
        columns.
        <br />
        <br />
        The columns in the dataset are as follows:
      </p>
      <br />
      <row>
        <ul class="list-group col-lg-4 col-md-6 col-sm-12">
          <li class="list-group-item" style={{margin : "0"}}>
            <p class="lead" style={{ margin: "0" }}>
              Part number (unique identification)
            </p>
          </li>
          <li class="list-group-item" style={{margin : "0"}}>
            <p class="lead" style={{ margin: "0" }}>
              Length{" "}
            </p>
          </li>
          <li class="list-group-item" style={{margin : "0"}}>
            <p class="lead" style={{ margin: "0" }}>
              Width
            </p>
          </li>
          <li class="list-group-item" style={{margin : "0"}}>
            <p class="lead" style={{ margin: "0" }}>
              Thickness
            </p>
          </li>
          <li class="list-group-item" style={{margin : "0"}}>
            <p class="lead" style={{ margin: "0" }}>
              Class Of Part (target feature)
            </p>
          </li>
        </ul>
        <div>
          <img
            src = {dataFrame}
            class="img-fluid"
            alt="data.head"
          />
        </div>
      </row>
    </>
  );
}

export default Introduction;
