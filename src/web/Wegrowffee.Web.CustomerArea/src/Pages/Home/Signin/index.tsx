import { Button, Stack, TextField } from "@mui/material";
import useStyles from "./styles";

const Signin = () => {
  const styles = useStyles();

  return (
    <Stack sx={styles.root}>
      <TextField fullWidth placeholder="Usuario" />
      <TextField fullWidth placeholder="Senha" />
      <Button>Entrar</Button>
    </Stack>
  );
};

export default Signin;
