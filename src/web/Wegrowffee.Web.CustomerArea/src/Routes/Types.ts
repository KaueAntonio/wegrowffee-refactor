export type RouteType = {
  id: number;
  path: string;
  element: () => JSX.Element;
  isIndex?: boolean;
};
