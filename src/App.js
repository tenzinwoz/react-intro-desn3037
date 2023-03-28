import React from "react";
import About from "./components/About";
import Client from "./components/Client";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Container } from "@mui/system";
import Counter from "./components/Counter";
import List from "./components/List";
import Sync from "./components/Sync";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Router>
          <Box sx={{ mb: 3 }}>
            <Menu />
          </Box>

          <Routes>
            <Route exact path="/" element={<div></div>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/client" element={<Client />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/counter" element={<Counter />} />
            <Route exact path="/list" element={<List />} />
          </Routes>
        </Router>
        <Sync />
      </Container>
    </div>
  );
}

export default App;
