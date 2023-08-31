import Nav from "./components/Nav";
import './App.css';
import Card from "./components/Card";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalog from "./components/Catalog";
import AboutUs from "./components/AboutUs";
import SingIn from "./components/SingIn";
import SingUp from "./components/SingUp";



function App() {


  return (
    <>
    <div className='App background-image'>
    <Nav />
    <Routes>
        <Route path="/" element={<Card />}/>
        <Route path="/catalog" element={<Catalog />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/singin" element={<SingIn />}/>
        <Route path="/singup" element={<SingUp />}/>


      </Routes>
    </div>
    </>
  )
}

export default App
