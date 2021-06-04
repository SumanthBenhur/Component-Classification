import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Introduction() {
  return (
    <>
      <h1 >Introduction</h1>
      <p className="fs-4" >
        The dataset in this use case consists of data of brake pads for disc
        brakes of a car. The brake pads either belong to the front or rear axle
        (vorderachse or hinterachse).The data contains dimensional attributes
        like length, width and thickness (in millimetres) of brake pads.
      </p>

      <p>
        The entire dataset comprises of 4001 entries and 5 columns, some of
        which are null (NaN). On removal of NaN values from the target feature
        (classOfPart) we have a dataset consisting of 1440 entries and 5
        columns.
      </p>

    </>
  );
}

export default Introduction;
