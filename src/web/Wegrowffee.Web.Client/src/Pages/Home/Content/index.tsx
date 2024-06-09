import { Box } from "@mui/material";

import { HomeComponents } from "./utils";
import useStyles from "./styles";
import useHomeHook from "../Hooks/useHomeHook";

const Content = () => {
  const styles = useStyles();

  const { NavItems } = useHomeHook();

  return NavItems.map((item) => {
    const Component = HomeComponents[item.section];

    return (
      <Box
        key={item.id}
        id={item.section}
        sx={styles.root(item.backgroundPath, item.style ?? {})}
      >
        <Component />
      </Box>
    );
  });
};
export default Content;
