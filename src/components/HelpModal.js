import { useState } from "react";
import exampleImg from "../img/demo1.png";
import { Typography, Container, Button, Modal, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export default function HelpModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Input
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Input excerpts from sheet music that you want to play on the guitar
          </Typography>
          <img src={exampleImg} />
        </Box>
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Output
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The output will return notes/chords in guitar tab notation. The
            below tabs mean you have to put a finger each on the first fret of
            the G string, second fret of the D string, and second fret of the A
            string. (The (e) string in standard tuning is on the bottom of your
            guitar, and is the thinnest)
          </Typography>
          <div>
            {[
              <div>e|------------------|</div>,
              <div>B|------------------|</div>,
              <div>G|------1-----------|</div>,
              <div>D|------2-----------|</div>,
              <div>A|------2-----------|</div>,
              <div>E|------------------|</div>,
            ]}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
