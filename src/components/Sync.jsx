import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

export default function Sync() {
  const payload = useSelector((state) => state);
  const json = JSON.stringify(payload, null, 4);
  window.localStorage.setItem("payload", json);
  return (
    <Box>
      <Button variant="outline">Load</Button>
      <pre>{json}</pre>;
    </Box>
  );
}
