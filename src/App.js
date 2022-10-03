import React from "react";
import "./css/style.css";
import Expression from "./component/ExpressionComponent";
import PersonalityStep from "./component/PersonalityStepComponent";


const App = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <Expression></Expression>
            <div id="add_new_expression" className="mt-2 d-flex cp">
              <i className="bi bi-plus-circle-fill text-primary me-3 cp"></i>
              <p className="cp">add new Expression</p>
            </div>
          </div>
          <div className="col-4 p-0 offset-1">
            <PersonalityStep headerName="Personality" active="active-blue p-5 cp"></PersonalityStep>
          </div>
          <div className="col-4 p-0">
            <PersonalityStep headerName="Step" active="bg-lightblue p-5 cp"></PersonalityStep>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
