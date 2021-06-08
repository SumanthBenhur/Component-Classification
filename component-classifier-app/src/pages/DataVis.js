import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import withOutlier from "../images/withOutlier.png";
import withoutOutlier from "../images/withoutOutlier.png";
import lenwidWith from "../images/lenwidWithOutlierOG.png";
import lenwidWithout from "../images/lenwidWithoutOG.png";
import clusterWith from "../images/clusterWith.png";
import clusterWithout from "../images/clusterWithout.png";

function DataVis() {
  return (
    <>
      <h1 class="display-4">Data Visualisation</h1>
      <div class="row">
        <figure class="figure col-lg-6">
          <img
            src={withOutlier}
            class="figure-img img-fluid rounded"
            alt="Original data"
            style={{
              maxHeight: "450px",
            }}
          />
          <figcaption class="figure-caption">
            Image of complete dataset with outliers
          </figcaption>
        </figure>
        <figure class="figure col-lg-6">
          <img
            src={withoutOutlier}
            class="figure-img img-fluid rounded"
            alt="Original data"
            style={{
              maxHeight: "450px",
            }}
          />
          <figcaption class="figure-caption">
            Image of complete dataset without outliers
          </figcaption>
        </figure>
      </div>
      <div class="row">
        <figure class="figure col-lg-6">
          <img
            src={lenwidWith}
            class="figure-img img-fluid rounded"
            alt="length vs width with outliers"
            style={{
              maxHeight: "275px",
            }}
          />
          <figcaption class="figure-caption">
            Image of complete dataset with outliers (width vs length)
          </figcaption>
        </figure>
        <figure class="figure col-lg-6">
          <img
            src={lenwidWithout}
            class="figure-img img-fluid rounded"
            alt="length vs width without outliers"
            style={{
              maxHeight: "275px",
            }}
          />
          <figcaption class="figure-caption">
            Image of complete dataset without outliers (width vs length)
          </figcaption>
        </figure>
      </div>
      <div class="row">
        <figure class="figure col-lg-6">
          <img
            src={clusterWith}
            class="figure-img img-fluid rounded"
            alt="length vs width cluster with outliers"
            style={{
              maxHeight: "275px",
            }}
          />
          <figcaption class="figure-caption">
            Image of clustered data with outliers (width vs length)
          </figcaption>
        </figure>
        <figure class="figure col-lg-6">
          <img
            src={clusterWithout}
            class="figure-img img-fluid rounded"
            alt="length vs width cluster without outliers"
            style={{
              maxHeight: "275px",
            }}
          />
          <figcaption class="figure-caption">
            Image of clustered data without outliers (width vs length)
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default DataVis;
