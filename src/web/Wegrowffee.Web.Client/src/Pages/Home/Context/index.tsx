import { useContext } from "react";

import { HomeContext } from "./Provider";

const useHomeContext = () => {
  const context = useContext(HomeContext);

  if (!context) throw "Home Provider Nao Encontrado";

  return context;
};

export default useHomeContext;
