export type RouteType = {
  id: number;
  name: string;
  path: string;
  element: () => JSX.Element;
  isIndex?: boolean;
};
