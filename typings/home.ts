import { type Delta } from "quill";

export type TTab<T extends string> = {
  value: T;
  text: string;
};

export type THomeTabObj = "RECOMMAND" | "FOLLOWING";

export type TPostForm = {
  delta?: Delta;
  content: string;
  imgs?: string[] | undefined;
};

export type TImgSlideDir = "L" | "R";
