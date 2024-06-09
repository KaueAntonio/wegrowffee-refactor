import { Box, Typography } from "@mui/material";

import useHomeHook from "../../Hooks/useHomeHook";
import useStyles from "./styles";

const Nav = () => {
  const styles = useStyles();

  const { NavItems } = useHomeHook();

  const GoToSection = (section: string, redirect: boolean) => {
    if (redirect) window.location.href = section;

    const element = document.getElementById(section);

    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={styles.root}>
      {NavItems.map((item) => (
        <Typography
          key={item.id}
          sx={styles.item}
          onClick={() => GoToSection(item.section, item.redirect)}
        >
          {item.name}
        </Typography>
      ))}
    </Box>
  );
};

export default Nav;
