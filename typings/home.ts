export type TTab<T extends string> = {
  value: T;
  text: string;
};

export type THomeTabObj = "RECOMMAND" | "FOLLOWING";

export type TPostForm = {
  content: string;
  imgs?: string[];
};
