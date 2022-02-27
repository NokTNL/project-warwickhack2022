import "./Header.css";
import HelpModal from './HelpModal'
import useState from 'react';
import mainLogo from "../img/main-logo.png";
import { Typography, Container, Button, Modal, Box } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

export default function Header() {


  return (
      <header>
          <Container
            sx={{
              mt: 3,
              mb: 14,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <img src={mainLogo} alt="" height="150" />
          <Typography color="inherit" align="center" variant="h2" marked="center" class="mainText">
            Robot tells you where to put your fingers
          </Typography>

          {/*<HelpModal />*/}

          </Container>
      </header>



  );
}
