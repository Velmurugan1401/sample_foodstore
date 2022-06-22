import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route , Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Dashboard from "./componets/dashboard"
import Dinein from "./componets/dinein"
import Login from "./componets/login"
import Kitchen from "./componets/kitchen"
import Header from "./componets/header"
import Menu from "./componets/menulist"
import Billing from "./componets/billing"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Navigate replace to="/login" />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/dashboard" element={ <><Header/><Dashboard/></>}  />
        <Route path="/dashboard/dinein" element={<><Header/><Dinein/></>} />
        <Route path="/dashboard/kitchen" element={<><Header/><Kitchen /></>} />
        <Route path="/dashboard/menu" element={<><Header/><Menu/></>} />
        <Route path="/billing" element={<><Header/><Billing/></>} />
      </Routes>
    </div>
  );
}

export default App;
