import React, { useState } from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { writeTwittData } from "../../auth/database";
import { useSelector } from "react-redux";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const { userName } = useSelector((state) => state.auth);
  console.log(userName);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    if (message.length > 10) {
      setMessage(e.target.value);
      console.log("object");
    } else {
      setMessage(e.target.value);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    setOpen(false);
    writeTwittData;
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Write
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Tweet</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill the following fields.
          </DialogContentText>
          <TextField
            id="standard-multiline-static"
            label="Write a Tweet"
            multiline
            rows={4}
            value={message}
            onChange={handleChange}
            variant="standard"
            inputProps={{ maxLength: 500 }}
            fullWidth={true}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
