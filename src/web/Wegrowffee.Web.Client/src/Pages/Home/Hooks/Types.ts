export type NavItemType = {
  id: number;
  name: string;
  section: SectionHomeType;
  backgroundPath: string;
  style?: object;
  redirect: boolean;
};

export type SectionHomeType =
  | "home"
  | "quem-somos"
  | "nosso-objetivo"
  | "fale-conosco"
  | "avaliacoes"
  | "area-do-cliente";
