import React, { useState } from "react";
import "../styles.css";
import Logo from "../images/Logo.png";
import choosing_house from "../images/choosing_house.svg";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Predict() {

    const [formInfo, setFormInfo] = useState({
        area: "",
        bedroom: "1",
        bathroom: "1",
        stories: "1",
        mainroad: "yes",
        guestroom: "yes",
        basement: "yes",
        hotwaterheating: "yes",
        airconditioning: "yes",
        parking: "0",
        prefarea: "yes",
        furnishingstatus: "furnished"
    });

    const navigate = useNavigate();
    function goHome() {
        navigate("/");
    }
    function onClick() {
        const {area, bedroom, bathroom, stories, mainroad, guestroom, basement, hotwaterheating, airconditioning, parking, prefarea, furnishingstatus} = formInfo;
        if(area && bedroom && bathroom && stories && mainroad && guestroom && basement && hotwaterheating && airconditioning && parking && prefarea && furnishingstatus){
            axios.post("https://house-price-prediction-backend.onrender.com/upload", formInfo)
            .then(res => {
                console.log(res.data);
                navigate("/Output", { state: res.data });
            })
            .catch(err => {
                console.log(err);
            });
        }
        else{
            alert("Please fill all the fields");
        }
    }
    function handleChange(e) {
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormInfo({
            ...formInfo,
            [name]: value
        });
    }
    return (
        <div >
            <img src={Logo} onClick={goHome} alt="logo" className="logo"></img>
            <div className="row">
                <div className="col predictLeftcol">
                    <br></br><br></br><br></br><br></br><br></br>
                    <img src={choosing_house} alt="chossing-img"></img>
                </div>
                <div className="col formStyle">
                    <br></br>
                    <h4>Fill the below form to predict house price</h4>
                    <br></br>
                    <form>
                        <div class="mb-3">
                            <label for="area">Enter preferred area</label>
                            <input onChange={handleChange} type="number" id="area" name="area" class="form-control" placeholder="Enter preferred area"></input>
                        </div>
                        <div class="mb-3">
                            <label for="bedroom">Enter the number of bedrooms</label>
                            <select onChange={handleChange} id="bedroom" class="form-select" name="bedroom">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                                <option value="6">Six</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="bathroom">Enter the number of bathroom</label>
                            <select onChange={handleChange} id="bathroom" class="form-select" name="bathroom">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="stories">Enter the number of stories</label>
                            <select onChange={handleChange} id="stories" class="form-select" name="stories">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="mainroad">Enter if you want the house on the mainroad</label>
                            <select onChange={handleChange} id="mainroad" class="form-select" name="mainroad">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="guestroom">Do you want a guestroom</label>
                            <select onChange={handleChange} id="guestroom" class="form-select" name="guestroom">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="basement">Do you want a basement</label>
                            <select onChange={handleChange} id="basement" class="form-select" name="basement">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="hotwaterheating">Do you want hot water heating</label>
                            <select onChange={handleChange} id="hotwaterheating" class="form-select" name="hotwaterheating">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="airconditioning">Do you want air conditioning</label>
                            <select onChange={handleChange} id="airconditioning" class="form-select" name="airconditioning">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="parking">Do you want parking</label>
                            <select onChange={handleChange} id="parking" class="form-select" name="parking">
                                <option value="0">Zero</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="prefarea">Do you want a preferred area</label>
                            <select onChange={handleChange} id="prefarea" class="form-select" name="prefarea">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="furnishingstatus">What furnishing status do you want</label>
                            <select onChange={handleChange} id="furnishingstatus" class="form-select" name="furnishingstatus">
                                <option value="furnished">Furnished</option>
                                <option value="semi-furnished">Semi-Furnished</option>
                                <option value="unfurnished">Unfurnished</option>
                            </select>
                        </div>

                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button onClick={onClick} type="button" class="btn btn-col btn-dark  btn-lg">Find Price of house</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Predict;