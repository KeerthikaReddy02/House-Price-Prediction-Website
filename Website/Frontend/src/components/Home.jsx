import React from 'react';
import "../styles.css";
import Logo from "../images/Logo.png";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    function onClick() {
        navigate("/Predict");
    }
    function goHome() {
        navigate("/");
    }
    return (
        <div >
            <img src={Logo} onClick={goHome} alt="logo" className="logo"></img>
            <div className="home row">
                <div className='col homeLeft'>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <h1 className='heading'><b>Home</b></h1>
                    <h1 className='heading'><b>Forecast</b></h1>
                </div>
                <div className='greenHome col'>
                    <br></br><br></br><br></br><br></br>
                    <h3><b>Welcome to the dynamic real estate market! </b></h3>
                    <br></br><br></br>
                    <h5>Our machine learning algorithm provides accurate and personalized predictions for property prices. </h5>
                    <br></br>
                    <h5>Whether you're a buyer, seller, or investor, explore the future of real estate with confidence.</h5>
                    <br></br><br></br>
                    <button onClick={onClick} type="button" class="btn btn-col btn-dark  btn-lg">Get Started →</button>
                </div>
            </div>
        </div>
    );
}

export default Home;