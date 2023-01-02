import React, { useState } from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import writeTweet, { pushMethod } from "../../auth/tweet";

export default function FormDialog({ setNewTweetAdd }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const { userName, userId } = useSelector((state) => state.auth);
  // console.log(userName);
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
    pushMethod(userId, userName, message);
    // writeTweet(userId, userName, message);
    setNewTweetAdd((prev) => !prev);
    handleClose();
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
            sx={{ width: "300px" }}
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
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
