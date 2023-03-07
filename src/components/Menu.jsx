import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useLocation, Link } from "react-router-dom";

export default function Menu() {
  const { pathname } = useLocation();
  return (
    <div>
      <Tabs value={pathname} aria-label="basic tabs example">
        <Tab component={Link} to="/about" label="About" value="/about" />
        <Tab component={Link} to="/client" label="Client" value="/client" />
        <Tab component={Link} to="/contact" label="Contact" value="/contact" />
        <Tab component={Link} to="/counter" label="Counter" value="/counter" />
        <Tab component={Link} to="/list" label="List" value="/list" />
      </Tabs>
    </div>
  );
}
