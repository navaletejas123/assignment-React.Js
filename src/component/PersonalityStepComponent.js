import React from "react";
import '../css/style.css'
const PersonalityStep = (props) => {
    return (
        <>
            <div className={props.active}>
                <div type="button" className="bg-blue text-center text-white py-2 personality-header w-100">{props.headerName}</div>
                <div className="form-floating mt-5">
                    <textarea class="form-control personality-text text-area-h" placeholder="Leave a comment here" id="floatingTextarea2"
                    ></textarea>
                    <label for="floatingTextarea2">Text</label>
                </div>

                <select className="form-select mt-5" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </>
    )
}

export default PersonalityStep;