import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Clock from "./Clock";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";
import "./App.css";
import { StopwatchProvider } from "./ContentStopwatch";


function App() {
  return (
    <StopwatchProvider> 
    <div className="app">
      <div className="menu">
          <NavLink to="/clock" className={({ isActive }) => (isActive ? 'active-link' : "")}>Clock</NavLink>
          <NavLink to="/stopwatch" className={({ isActive }) => (isActive ? 'active-link' : "")}>Stopwatch</NavLink>
          <NavLink to="/timer" className={({ isActive }) => (isActive ? 'active-link' : "")}>Timer</NavLink>
      </div>

      <Routes>
        <Route path="/clock" element={<Clock />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </div>
    </StopwatchProvider> 
  );
}

export default App;
