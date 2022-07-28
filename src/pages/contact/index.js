import React from 'react'
// import styled from 'styled-components'
import { Box, Stack, Grid, Paper, Typography, Link } from '@mui/material';
// import { InstagramAlt, LinkedinSquare } from '@styled-icons/boxicons-logos'
// import { Gmail } from '@styled-icons/simple-icons'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion'
// @styled-icons/boxicons-logos/InstagramAlt
// export const InstagramIcon = styled(Instagram)`
//   // color: red;
//   font-size: 20px;
// `

// export const LinkedinSquareIcon = styled(LinkedinSquare)`
//   // color: red;
//   font-size: 20px;
// `
// export const GmailIcon = styled(Gmail)`
//   // color: red;
//   font-size: 20px;
// `

// const MyComponent = styled('div')({
//   color: 'darkslategray',
//   backgroundColor: 'aliceblue',
//   padding: 8,
//   borderRadius: 4,
// });

const PaperStyle = styled(Paper)(({ theme }) => ({
  // padding: 10,
  backgroundColor: 'transparent',
  // color: '#f2f2f2',
  width: '20vw',
  cursor: 'pointer',
  borderRadius: 10,
}));

const ContactPage = () => {

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
      <Stack direction="row" sx={{ py: 5 }} justifyContent="center" spacing={5}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 0.5 }}
        >
          <PaperStyle sx={{ px: 3, py: 4 }} onClick={handleClickLinkedin} elevation={1}>
            <Stack direction="column" justifyContent='center' alignItems="center" spacing={5}>
              <LinkedInIcon sx={{ fontSize: 120, }} />
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