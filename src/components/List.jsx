import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { define, addItem, removeItem } from "../redux/list";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BasicList() {
  const dispatch = useDispatch();
  const { field, items } = useSelector((state) => state.listReducer);
  const remove = (index) => {
    dispatch(removeItem(index));
  };

  const add = () => {
    dispatch(addItem(field));
  };

  const handleChange = (e) => {
    dispatch(define(e.target.value));
  };
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <TextField
        fullWidth
        label="Name"
        variant="outlined"
        value={field}
        onChange={(e) => handleChange(e)}
      />
      <Button
        fullWidth
        variant="contained"
        sx={{ marginBottom: 1, marginTop: 1 }}
        onClick={() => add()}
      >
        Add
      </Button>
      <nav aria-label="secondary mailbox folders">
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {items.map((item, index) => (
            <ListItem
              key={index}
              disableGutters
              secondaryAction={
                <IconButton aria-label="comment" onClick={() => remove(index)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={`${item}`} />
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
