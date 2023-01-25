import React from 'react';
//import './App.css';
import Home from "../src/Component/Main/Home"
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Paris from './Component/Detail/Paris.';
import Italy from './Component/Detail/Italy';
import Fukuoka from './Component/Detail/Fukuoka';
import Singapore from './Component/Detail/Singapore';

function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Paris' element={<Paris />} />
        <Route path='/Italy' element={<Italy />} />
        <Route path='/Singapore' element={<Singapore/>} />
        <Route path='/Fukuoka' element={<Fukuoka />} />
      </Routes>

      </Router>
     
      
    </div>
  );
}

export default App;
