import React from "react";
import {BrowserRouter, Router, HashRouter,  Route, Routes,  Redirect} from 'react-router-dom';
import Main from "./Components/Main.js"
import Appeal from "./Components/Appeal.js";
import Politic from "./Components/Politic.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" element = {<Main/>}/>
            <Route path="/appeal" element = {<Appeal/>}/>
            <Route path="/politic" element = {<Politic/>}/>
          </Routes> 
      </div>
    </BrowserRouter>
  )
}

export default App;