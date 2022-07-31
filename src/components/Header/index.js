import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Stack, Button, Typography, IconButton, Menu, MenuItem, Fade } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import {
  Link, NavLink, useNavigate
} from "react-router-dom";
import { motion } from 'framer-motion'


import image from '../../assets/iconweb.png'

const AppHeader = () => {
  let navigate = useNavigate();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));
  console.log("is lg", matchesSm)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ p: 2, px: { xs: 2, sm: 15 } }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={4}>
        {matchesSm ?
          (
            <>
              <div>
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                  <Typography variant='h5' sx={{ color: '#333333', fontWeight: 'bold', letterSpacing: 3, fontFamily: 'Rubik Moonrocks, cursive' }}>ADE MUSTOFA</Typography>
                </NavLink>
              </div>

              <Stack direction="row" justifyContent="flex-start" spacing={4}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <NavLink
                    to="/portofolio"
                    className='link-header'
                    style={({ isActive }) => ({
                      textDecoration: 'none',
                      borderBottom: '1px solid #3333'
                      // ...isActive && { borderBottomColor: '1px solid #3333' }
                    })}
                  // style={{ textDecoration: 'none' }}
                  >
                    {/* <Button variant="text"> */}
                    <Typography variant='subtitle1' sx={{ color: '#333333', fontWeight: 'bold' }}>PORTOFOLIO</Typography>
                    {/* </Button> */}
                  </NavLink>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <NavLink className='link-header' to="/career" style={{ textDecoration: 'none' }}>
                    {/* <Button variant="text"> */}
                    <Typography variant='subtitle1' sx={{ color: '#333333', fontWeight: 'bold' }}>CAREER</Typography>
                    {/* </Button> */}
                  </NavLink>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <NavLink className='link-header' to="/contact" style={{ textDecoration: 'none' }}>

                    {/* <Button variant="text"> */}
                    <Typography variant='subtitle1' sx={{ color: '#333333', fontWeight: 'bold' }}>CONTACT</Typography>
                    {/* </Button> */}
                  </NavLink>
                </motion.div>
              </Stack>
            </>
          ) : (
            <>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <img src={image} style={{ objectFit: 'contain', width: 60, height: 60 }} />
              </Link>

              <IconButton onClick={handleClick} aria-label="delete">
                <MenuIcon />
              </IconButton>

              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={() => {
                  handleClose()
                  navigate("portofolio")
                }}>PORTOFOLIO</MenuItem>
                <MenuItem onClick={() => {
                  handleClose()
                  navigate("career")
                }}>CAREER</MenuItem>
                <MenuItem onClick={() => {
                  handleClose()
                  navigate("contact")
                }}>CONTACT</MenuItem>
              </Menu>
            </>
          )

        }


      </Stack>
    </Box>
  );
}

export default AppHeader;