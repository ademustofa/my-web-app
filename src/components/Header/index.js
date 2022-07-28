import React from 'react'
import { Box, Stack, Button, Typography } from '@mui/material'
import {
  Link
} from "react-router-dom";

const AppHeader = () => {
  return (
    <Box sx={{ p: 2, px: 15 }}>
      <Stack direction="row" justifyContent="space-between" spacing={4}>
        <div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography variant='h5' sx={{ color: '#333333', fontWeight: 'bold', letterSpacing: 3, fontFamily: 'Rubik Moonrocks, cursive' }}>ADE MUSTOFA</Typography>
          </Link>
        </div>

        <Stack direction="row" justifyContent="flex-start" spacing={4}>
          <Link to="/portofolio" style={{ textDecoration: 'none' }}>
            {/* <Button variant="text"> */}
            <Typography variant='subtitle1' sx={{ color: '#333333', fontWeight: 'bold' }}>PORTOFOLIO</Typography>
            {/* </Button> */}
          </Link>
          <Link to="/career" style={{ textDecoration: 'none' }}>
            {/* <Button variant="text"> */}
            <Typography variant='subtitle1' sx={{ color: '#333333', fontWeight: 'bold' }}>CAREER</Typography>
            {/* </Button> */}
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>

            {/* <Button variant="text"> */}
            <Typography variant='subtitle1' sx={{ color: '#333333', fontWeight: 'bold' }}>CONTACT</Typography>
            {/* </Button> */}
          </Link>
        </Stack>


      </Stack>
    </Box>
  );
}

export default AppHeader;