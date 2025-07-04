import { type TF } from "@typings/search";
import { type TTab } from "@typings/home";

export const queryIntoTxt: TTab<TF>[] = [
  { value: "popular", text: "인기" },
  {
    value: "recent",
    text: "최신",
  },
];
