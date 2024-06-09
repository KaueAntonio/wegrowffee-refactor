import { PropsWithChildren, createContext, useState } from "react";

type HomeContextType = {
  abaSelecionada: number;
  setAbaSelecionada: (aba: number) => void;
};

export const HomeContext = createContext<HomeContextType | null>(null);

export const HomeProvider = ({ children }: PropsWithChildren) => {
  const [abaSelecionada, _setAbaSelecionada] = useState<number>(0);

  const setAbaSelecionada = (aba: number) => {
    _setAbaSelecionada(aba);
  };

  const values = { abaSelecionada, setAbaSelecionada };

  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>;
};
