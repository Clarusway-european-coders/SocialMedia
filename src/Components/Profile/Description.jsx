import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import edit from "/src/assets/Images/edit.png";
import { writeUserDesc } from "../../auth/database";

const Edit = styled.div`
  height: 55px;
  width: 55px;
  right: 2rem;
  border-radius: 100px;
  background-color: #1976d2;
  position: absolute;
  display: flex;
  padding: 0.5rem;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    box-shadow: 1px -4px 21px -4px rgba(0, 0, 0, 0.58);
  }
  > img {
    margin-right: 0;
  }
`;

export default function DescDialog({ userId }) {
  const [open, setOpen] = React.useState(false);
  const [desc, setDesc] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function handleEdit() {
    writeUserDesc(userId, desc);
  }

  return (
    <div>
      <Edit onClick={handleClickOpen}>
        <img src={edit} alt="" />
      </Edit>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Your Motto</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Motto goes here"
            type="text"
            fullWidth
            multiline
            minRows={5}
            inputProps={{ maxLength: 150 }}
            onChange={(e) => setDesc(e.target.value)}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEdit}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
