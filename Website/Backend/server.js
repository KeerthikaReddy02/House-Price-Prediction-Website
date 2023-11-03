const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const axios = require("axios");


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/upload', (req, res) => {
    // console.log(req.body);
    // http://127.0.0.1:5000/?area=7520&bedroom=4&bathroom=2&stories=7&mainroad=yes&guestroom=no&basement=no&hotwaterheating=no&airconditioning=yes&parking=2&prefarea=yes&furnishingstatus=furnished
    const {area, bedroom, bathroom, stories, mainroad, guestroom, basement, hotwaterheating, airconditioning, parking, prefarea, furnishingstatus} = req.body;
    const url = "http://keerthikareddy.pythonanywhere.com/?area="+area+"&bedroom="+bedroom+"&bathroom="+bathroom+"&stories="+stories+"&mainroad="+mainroad+"&guestroom="+guestroom+"&basement="+basement+"&hotwaterheating="+hotwaterheating+"&airconditioning="+airconditioning+"&parking="+parking+"&prefarea="+prefarea+"&furnishingstatus="+furnishingstatus;
    http.get(url, function (response) {
        response.on("data", function (data) {
            var ModelData = JSON.parse(data);
            var value = ModelData.prediction;
            // console.log(value);
            res.send(value);
        });
    });
});

app.listen(process.env.PORT ||4000,()=>console.log("Server is running"));