import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";


export function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* create menu using react router */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>

      </header>
    </div>
  );
}
