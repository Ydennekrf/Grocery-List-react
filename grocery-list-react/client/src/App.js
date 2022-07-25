import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './containers/home/Home';
import Login from './containers/login/Login';
import Signup from './containers/signup/Signup';
import Grocery from './containers/grocery/Grocery';
import Dishes from './containers/dishes/Dishes';
import Dashboard from './containers/dashboard/Dashboard';


function App() {
  return (
   <Router>
    <div className="flex-column justify-flex-start min-100-vh">
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Home />}/>
          <Route 
            path="/login"
            element={<Login />}/>
          <Route
            path="/signup"
            element={<Signup />}/>
          <Route
            path="/grocery"
            element={<Grocery />}/>
          <Route
            path="/dishes"
            element={<Dishes />}/>
          <Route
            path="/dashboard"
            element={<Dashboard />}/>
        </Routes>
      </div>
    </div>
   </Router>
  );
}

export default App;
