import { ImageInfoType } from "./Types";

import Plantacao from "@Assets/plantacao.jpg";
import Colheita from "@Assets/mesa.jpg";
import Menina from "@Assets/menina.jpg";

export const Images: ImageInfoType[] = [
  {
    id: 1,
    image: Plantacao,
    content: "Ajudamos você a ter um melhor cuidado com sua plantação.",
    name: "Plantação",
  },
  {
    id: 2,
    image: Menina,
    content: "Ajudamos a ter uma colheita abundante.",
    name: "Colheita",
  },
  {
    id: 3,
    image: Colheita,
    content: "Para que você tenha o produto da melhor qualidade no mercado.",
    name: "Consumo",
  },
];
