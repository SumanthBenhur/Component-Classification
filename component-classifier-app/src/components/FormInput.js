import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SubHeading from "./SubHeading";
//import './componentCss/formInput.css';

function FormInput(){
    return(
        <div> 
        <form >

        <SubHeading SubHeading = "Select which algorithm to use for prediction" />
            <select className="form-select w-50" aria-label="Default select example">
                <option selected>Choose an algorithm</option>
                <option value="XGBoost">XG Boost</option>
                <option value="KNN">KNN</option>
                <option value="LinearLearner">Linear Learner</option>
                <option value="SVM">SVM</option>
            </select>

        <SubHeading SubHeading = "Features" />
            <div className="mb-3 w-25">
                <label for="exampleInputEmail1" className="form-label">Feature 1</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <div className="mb-3 w-25">
                <label for="exampleInputEmail1" className="form-label">Feature 2</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <div className="mb-3 w-25">
                <label for="exampleInputEmail1" className="form-label">Feature 3</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <button type="submit" className="btn btn-primary ">Predict</button>
        </form>
        </div>
    )
}

export default FormInput;