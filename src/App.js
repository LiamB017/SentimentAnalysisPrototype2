import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home.js";
import Analysis from "./analysis.js";


function App() {



   return (
     <Router>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/analysis" element={<Analysis />} />
       </Routes>
     </Router>
   );



   }




    //   <div>
    //     <h1> Sentiment Analysis </h1>
    //     <h2> Compund score is {data.vs} </h2>
    //     <h2> Sentiment is {data.sentiment} </h2>
    //     <h3> Analytics for {data.topic}</h3>
    //   </div>
    // );

export default App;
