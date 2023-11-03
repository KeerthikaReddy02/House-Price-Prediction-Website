import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Predict from "./components/Predict";
import Output from "./components/Output";
import Insights from "./components/Insights";


function App()
{
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route  path="/predict" element={<Predict />}/>
          <Route  path="/output" element={<Output />}/>
          <Route  path="/insights" element={<Insights />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;