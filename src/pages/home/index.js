import { Grid, Stack, Paper, Typography } from "@mui/material";
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const HomePage = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));
  console.log("is lg", matchesSm)
  return (

    <Grid sx={{ px: matchesSm ? 10 : 2 }} container spacing={matchesSm ? 3 : 7} justifyContent="center" alignItems="center">
      <Grid item md={5}>

        <motion.div
          style={{
            marginTop: 20,
            marginLeft: matchesSm ? 100 : 0,
            width: 150,
            height: 150,
            backgroundColor: '#bdd4e7',
            backgroundImage: 'linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)'

          }}
          animate={{
            scale: [1, 1.4, 1.4, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            // repeatDelay: 1
          }}
        >
          {/* <img width={100} height={100} src={require("../../assets/iconweb.png")}></img>
            <Stack direction="row" justifyContent="center" alignItems="center" sx={{ top: '50%' }}>
              <Typography variant="h6">AM</Typography>
            </Stack> */}
        </motion.div>
      </Grid>
      <Grid item md={7}>
        <Stack direction='row' alignItems="center">
          <div>
            <motion.div
              // whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, x: '-20' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2>Hello There !</h2>
            </motion.div>
            <motion.div
              // whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, x: '50' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 }}
            >
              <p>
                I am a frontend developer with good problem solving
                and experience in creating software in web and mobile application,
                deliver an immersive and enganging user experience through efficient website development.
              </p>
              <p>
                I am a person who can learn new things quickly, I also like to learn new technology so that I can make applications better, more interesting and efficient
              </p>
            </motion.div>
          </div>

        </Stack>
      </Grid>
    </Grid >
  );
}

export default HomePage;