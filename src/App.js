import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Stack, Button } from '@mui/material';
// import Link from '@mui/material/Link';
import AppHeader from "./components/Header";
import { styled } from '@mui/material/styles'
import ParticlesBg from 'particles-bg'
import CareerPage from "./pages/career";
import ContactPage from "./pages/contact";
import PortofolioPage from "./pages/portofolio";
import HomePage from "./pages/home";

const Main = styled('main')(({ theme }) => ({
  width: '100%',
  // minHeight: '90vh',
  paddingTop: 40,
  margin: '0 auto',
})
);


export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HashRouter>
      <ParticlesBg color="#e6e6e6" num={10} type="circle" bg={{
        position: "fixed",
        zIndex: -1,
        top: 0,
        left: 0
      }} />
      <Box>
        <AppHeader />
        <Main>
          <Box sx={{ py: 2, px: 2 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portofolio" element={<PortofolioPage />} />
              <Route path="/career" element={<CareerPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Box>
        </Main>


      </Box >
    </HashRouter>
  );
}
