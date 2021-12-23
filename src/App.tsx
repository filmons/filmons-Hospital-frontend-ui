import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "../src/Pages/Login";
import Signup from "../src/Pages/Signup";
<<<<<<< HEAD
import Header from './Components/MenuAppBar';
=======
>>>>>>> 9eab2b25d535c85f6c99c45cdc45ad3ea1c5349b
import DetailsPage from "../src/Pages/DetailsPage";



function App() {
  return (
    <Router>
<<<<<<< HEAD
       <Header/>
=======
>>>>>>> 9eab2b25d535c85f6c99c45cdc45ad3ea1c5349b
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;