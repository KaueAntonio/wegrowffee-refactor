import { Box, Typography } from "@mui/material";

import useStyles from "./styles";
import Signin from "./Signin";

const Home = () => {
  const styles = useStyles();
  return (
    <Box sx={styles.root}>
      <Box sx={styles.container}>
        <Typography variant="h4">Bem Vindo!</Typography>
        <Signin />
      </Box>
    </Box>
  );
};

export default Home;
