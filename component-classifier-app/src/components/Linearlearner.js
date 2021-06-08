import React from 'react';
import linimag from  '../images/logreg.png';

function LinearLearner(){
    return (
        <>
        <h2>Linear Learner</h2>
          <p class="lead" >
            Accuracy : 0.7391987431264729 <br/>
            F1 Score:  0.7997587454764777<br />
            ROC-AUC score:  0.7118826626591995<br/>
          </p>
          <img src = {linimag} class='img-fluid' alt = 'linear learner' style = {{maxHeight : "600px"}}/>
          </>
    )
}

export default LinearLearner;