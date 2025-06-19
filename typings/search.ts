export type TF = "recent" | "popular";
export type TQueryKey = "queryText" | "f";
export type TFObj = {
  [key in TF]: string;
};
export type TQuery = {
  queryText?: string;
  f?: TF;
};
