import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home.js";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Public Sans', sans-serif",
  },
});


function App() {



   return (
     <ThemeProvider theme={theme}>
       <Router>
         <Routes>
           <Route path="/" element={<Home />} />
         </Routes>
       </Router>
     </ThemeProvider>
   );



   }






export default App;
