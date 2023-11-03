import React from "react";
import "../styles.css";
import Logo from "../images/Logo.png";
import { useNavigate, useLocation } from 'react-router-dom';
import growth_analytics from "../images/growth_analytics.svg";

function Output() {
    const navigate = useNavigate();
    function goHome() {
        navigate("/");
    }
    function Insights() {
        navigate("/Insights");
    }
    const location = useLocation();
    const { state } = location;
    return(
        <div className="outputStyle">
            <img src={Logo} onClick={goHome} alt="logo" className="logo"></img>
            <div className="row">
                <div className="col">
                    <br></br><br></br><br></br><br></br>
                    <div className="whiteBox">
                        <h4>The estimated cost of the House is:</h4>
                        <br></br>
                        <h1>Rs {state}</h1>
                        <br></br><br></br>
                        <a href="/predict">Click here</a> to fill the form again
                    </div>
                    <div style={{paddingLeft: "5%"}}>
                        <p>Want to know more about different factors that affect the price of a house? Click on Insight!</p>
                        <button onClick={Insights} type="button" class="btn btn-col btn-dark  btn-lg">Insights</button>
                    </div>
                </div>
                <div className="col">
                    <br></br><br></br><br></br><br></br><br></br>
                    <img src={growth_analytics} alt="growth-analytics" className="growth_analytics"></img>
                </div>
            </div>
        </div>
    );
}

export default Output;