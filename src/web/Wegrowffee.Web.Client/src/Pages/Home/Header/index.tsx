import { Box, Typography } from "@mui/material";

import useStyles from "./styles";
import Nav from "./Nav";

const Header = () => {
  const styles = useStyles();

  return (
    <Box sx={styles.root}>
      <Typography sx={styles.title}>Wegrowffee</Typography>
      <Nav />
    </Box>
  );
};

export default Header;
