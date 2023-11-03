import React from "react";
import "../styles.css";
import Logo from "../images/Logo.png";
import growth_analytics from "../images/growth_analytics.svg";
import { useNavigate } from 'react-router-dom';
import scatter_plot from "../images/scatter_plot.png";
import area from "../images/area.png";
import bedrooms from "../images/bedrooms.png";
import bathrooms from "../images/bathroom.png";
import stories from "../images/stories.png";
import mainroad from "../images/mainroad.png";
import guestroom from "../images/guestroom.png";
import basement from "../images/basement.png";
import hotwater from "../images/hotwater.png";
import treemap from "../images/treemap.png";

function Insights() {
    const navigate = useNavigate();
    function goHome() {
        navigate("/");
    }
    return(
        <div className="insightsStyle circles">
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <img onClick={goHome} src={Logo} alt="logo" className="logo"></img>
            <h1><b>Dashboard of Insights from Previous Data</b></h1>
            <br></br><br></br>
            <div className="row">
                <div className="col">
                    <h5>Our model gives a 99.91% score</h5>
                    <img src={scatter_plot} alt="scatter-plot" className="scatter_plot"></img>
                </div>
                <div className="col">
                    <img src={growth_analytics} alt="growth_analytics-market" className="growth_analytics"></img>
                </div>
            </div>
            <br></br><br></br>
            <div className="row">
                <div className="col">
                   <img src={area} alt="area" className="plot"></img>
                     <p>The price of the houses increases with increase in area</p>
                </div>
                <div className="col">
                    <img src={bedrooms} alt="bedrooms" className="plot"></img>
                    <p>The price of the houses increases with increase in number of bedrooms</p>
                </div>
                <div className="col">
                    <img src={bathrooms} alt="bathrooms" className="plot"></img>
                    <p>The price of the houses increases with increase in number of bathrooms</p>
                </div>
            </div>
            <br></br><br></br>
            <div className="row">
                <div className="col">
                    <img src={stories} alt="stories" className="plot"></img>
                    <p>The price of the houses increases with increase in number of stories</p>
                </div>
                <div className="col">
                    <img src={mainroad} alt="mainroad" className="plot"></img>
                    <p>The price of the houses increases if the house is on the main road</p>
                </div>
                <div className="col">
                    <img src={guestroom} alt="guestroom" className="plot"></img>
                    <p>The price of the houses increases if the house has a guest room</p>
                </div>
            </div>
            <br></br><br></br>
            <div className="row">
                <div className="col">
                    <img src={basement} alt="basement" className="plot"></img>
                    <p>The price of the houses increases if the house has a basement</p>
                </div>
                <div className="col">
                    <img src={hotwater} alt="hotwater" className="plot"></img>
                    <p>The price of the houses increases if the house has hot water supply</p>
                </div>
                <div className="col">
                    <img src={treemap} alt="treemap" className="plot"></img>
                    <p>Treemap for number of stories</p>
                </div>
            </div>
            <br></br><br></br>  
        </div>
    );
}

export default Insights;