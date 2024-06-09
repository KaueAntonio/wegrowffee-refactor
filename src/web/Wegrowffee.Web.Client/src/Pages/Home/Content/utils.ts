import { SectionHomeType } from "../Hooks/Types";
import AreaCliente from "./AreaCliente";
import Avaliacoes from "./Avaliacoes";
import FaleConosco from "./FaleConosco";
import Home from "./Home";
import Objetivo from "./Objetivo";
import QuemSomos from "./QuemSomos";

export const HomeComponents: Record<SectionHomeType, () => JSX.Element> = {
  "fale-conosco": FaleConosco,
  avaliacoes: Avaliacoes,
  "nosso-objetivo": Objetivo,
  "quem-somos": QuemSomos,
  home: Home,
  "area-do-cliente": AreaCliente,
};
