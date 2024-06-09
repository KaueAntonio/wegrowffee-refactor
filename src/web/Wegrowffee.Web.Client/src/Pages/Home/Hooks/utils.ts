import { NavItemType } from "./Types";

import Home from "@Assets/cafe_3.jpg";
import NossoObjetivo from "@Assets/cafe_2.jpg";
import FaleConosco from "@Assets/cafe_7.jpg";

export const NavItems: NavItemType[] = [
  {
    id: 1,
    name: "Home",
    section: "home",
    backgroundPath: Home,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      color: "white",
    },
    redirect: false,
  },
  {
    id: 2,
    name: "Quem Somos",
    section: "quem-somos",
    backgroundPath: "",
    redirect: false,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  {
    id: 3,
    name: "Nosso Objetivo",
    section: "nosso-objetivo",
    backgroundPath: NossoObjetivo,
    redirect: false,
  },
  {
    id: 4,
    name: "Fale Conosco",
    section: "fale-conosco",
    backgroundPath: FaleConosco,
    redirect: false,
  },
  {
    id: 5,
    name: "Avaliaçoes",
    section: "avaliacoes",
    backgroundPath: "",
    redirect: false,
  },
  {
    id: 6,
    name: "Área do Cliente",
    section: "area-do-cliente",
    backgroundPath: "",
    redirect: true,
  },
];
