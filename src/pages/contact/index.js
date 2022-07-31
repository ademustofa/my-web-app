import React from 'react'
// import styled from 'styled-components'
import { Box, Stack, Grid, Paper, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion'


const PaperStyle = styled(Paper)(({ theme }) => ({
  // padding: 10,
  backgroundColor: 'transparent',
  // color: '#f2f2f2',
  minWidth: '20vw',
  cursor: 'pointer',
  borderRadius: 10,
}));

const ContactPage = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));
  console.log("is lg", matchesSm)

  const handleClickLinkedin = () => {
    window.open('https://www.linkedin.com/in/ademustofa', '_blank');
  }
  const handleClickIg = () => {
    window.open('https://www.instagram.com/ademus_tofa', '_blank');
  }
  const handleClickEmail = () => {
    window.open('https://mail.google.com/', '_blank');
  }
  return (
    <>
      <Stack direction={matchesSm ? "row" : "column"} sx={{ py: 5 }} justifyContent="center" spacing={5}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 0.5 }}
        >
          <PaperStyle sx={{ px: 3, py: 4 }} onClick={handleClickLinkedin} elevation={1}>
            <Stack direction="column" justifyContent='center' alignItems="center" spacing={5}>
              <LinkedInIcon sx={{ fontSize: 120 }} />
              {/* <Link href="https://www.linkedin.com/in/ademustofa" underline="none"> */}
              <Typography variant="h6">@ademustofa</Typography>
              {/* </Link> */}
            </Stack>
          </PaperStyle>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <PaperStyle sx={{ px: 3, py: 4 }} elevation={1} onClick={handleClickIg}>
            <Stack direction="column" justifyContent='center' alignItems="center" spacing={5}>
              <InstagramIcon sx={{ fontSize: 120 }} />
              {/* <Link href="https://www.instagram.com/ademus_tofa/" underline="none"> */}
              <Typography variant="h6">@ademus_tofa</Typography>
              {/* </Link> */}
            </Stack>
          </PaperStyle>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <PaperStyle sx={{ px: 3, py: 4 }} elevation={1} onClick={handleClickEmail}>
            <Stack direction="column" justifyContent='center' alignItems="center" spacing={5}>
              <EmailIcon sx={{ fontSize: 120 }} />
              {/* <Link href="https://mail.google.com/" underline="none"> */}
              <Typography variant="h6">ademustofa286@gmail.com</Typography>
              {/* </Link> */}
            </Stack>
          </PaperStyle>
        </motion.div>
      </Stack>
    </>
  );
}

export default ContactPage;