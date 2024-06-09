import { Box, Stack, Typography } from "@mui/material";

import { Images } from "./utils";
import useStyles from "./styles";

const QuemSomos = () => {
  const styles = useStyles();

  return (
    <Stack alignItems="center" spacing={3}>
      <Typography variant="h3">Quem Somos</Typography>
      <Typography variant="h6" width="800px">
        A WeGrowffee é uma empresa criada por alunos Bandtec em 2021, e surge a
        partir da demanda do setor agropecuário buscando soluções de contenção
        das altas perdas nas produções de safras de café, altamente prejudicadas
        pelas mudanças climáticas e aquecimento global. Nosso compromisso é
        criar um jeito inovador de cultivar café, trazendo uma forma inteligente
        e sustentável de plantar e segurando ao nosso cliente economia nos
        processos e garantindo a qualidade das safras.
      </Typography>
      <Box sx={styles.alinhamentoCards}>
        {Images.map((image) => (
          <Box key={image.id} sx={() => styles.root(image.image)}>
            <Box sx={styles.content}>
              <Typography variant="h4">{image.name}</Typography>
              <Typography>{image.content}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default QuemSomos;
