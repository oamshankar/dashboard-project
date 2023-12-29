import React from "react";
import './App.css';
import Home from "./Pages/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <div style ={{display:"flex"}}>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
