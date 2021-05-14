import React from "react";
import "./componentCss/pageHeading.css";

function PageHeading(props){
    return (
            <h1 id = "page-heading">{props.PageHeading}</h1>
    )
}

export default PageHeading;