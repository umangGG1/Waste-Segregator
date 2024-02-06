import React,{ useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './adminPage.js';
import ScanPage from './scanPage.js';

const MainApp=()=>{
  return(
    <Router>
      <Routes>
      <Route exact path="/" element={<AdminPage/>} />
      <Route exact path="/scan" element={<ScanPage/>} />
      </Routes>
    </Router>
  )
};
export default MainApp;
