import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "../src/Pages/Login";
import Signup from "../src/Pages/Signup";
import Header from './Components/MenuAppBar';


function App() {
  return (
    <Router>
       <Header/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;