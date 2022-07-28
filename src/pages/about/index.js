import { Grid } from "@mui/material";

const AboutPage = () => {
  return (

    <Grid sx={{ px: 10 }} container spacing={3}>
      <Grid item md={6}> </Grid>
      <Grid item md={6}>
        <div>
          <h2>Hello There !</h2>
          <p style={{ fontWeight: 500 }}>
            I am a frontend developer with good problem solving
            and experience in creating software in web and mobile application,
            deliver an immersive and enganging user experience through efficient website development
          </p>
          <p>
            I am a person who can learn new things quickly, I also like to learn new technology so that I can make applications better, more interesting and efficient
          </p>
        </div>
      </Grid>
    </Grid>
  );
}

export default HomePage;