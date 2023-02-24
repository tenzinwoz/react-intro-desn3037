import React from "react";
import About from "./components/About";
import Client from "./components/Client";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/client" element={<Client />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
