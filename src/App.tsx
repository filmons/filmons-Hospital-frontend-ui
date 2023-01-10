import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "../src/Pages/Home";
import Login from "../src/Pages/Login";
import Signup from "../src/Pages/Signup";
import Header from "./Components/MenuAppBar";
import DetailsPage from "../src/Pages/DetailsPage";
import DashBoard from "./Pages/DashBoard";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route  path="*"  element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
