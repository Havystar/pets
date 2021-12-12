import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AddItem } from './pages/AddItem';


export function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* create menu using react router */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/additem" element={<AddItem />} />
        </Routes>

      </header>
    </div>
  );
}
