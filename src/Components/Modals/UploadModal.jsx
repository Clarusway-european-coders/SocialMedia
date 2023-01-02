import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { addImage, addWallpaper } from "../../auth/storage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function UploadModal({
  setProfileWall,
  setProfileImg,
  profileWall,
  profileImg,
  userId,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Add image to profile</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add a profile image and wallpaper
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="contained"
                component="label"
                sx={{
                  display: "block",
                  textAlign: "center",
                  my: 2,
                  width: "50%",
                }}
              >
                <input
                  type="file"
                  hidden
                  onChange={(event) => setProfileImg(event.target.files[0])}
                />
                Profile Image
              </Button>
              <Button
                onClick={() => addImage(profileImg, userId, setProfileImg)}
              >
                upload
              </Button>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="contained"
                component="label"
                sx={{ display: "block", textAlign: "center", width: "50%" }}
              >
                WallPaper
                <input
                  type="file"
                  hidden
                  onChange={(event) => setProfileWall(event.target.files[0])}
                />
              </Button>
              <Button
                onClick={() =>
                  addWallpaper(profileWall, userId, setProfileWall)
                }
              >
                upload
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
