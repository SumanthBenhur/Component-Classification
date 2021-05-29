import React from "react";
import "./componentCss/pageHeading.css";

function PageContent(props){
    return (
        <div>
            <p id = "page-content">{props.PageContent}</p>
        </div>
    )
}

export default PageContent;