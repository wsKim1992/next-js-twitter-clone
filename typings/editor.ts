import { type TPostForm, type TImgSlideDir } from "@typings/home";
import { type Delta } from "quill";

export type TEditorStore = {
  postFormImgIdx?: number;
  postForm: TPostForm;
};

export type TEditorAction = {
  init: () => void;
  setContent: (newContent: string) => void;
  setDelta: (newDelta: Delta) => void;
  setImgs: ({
    idx,
    imgs,
  }: {
    idx?: number;
    imgs:
      | string[]
      | (({
          imgs,
          idx,
        }: {
          imgs: string[] | undefined;
          idx?: number;
        }) => string[] | undefined);
  }) => void;
  setImgIdx: ({
    idx,
    newImageIdx,
  }: {
    idx?: number;
    dir: TImgSlideDir;
    newImageIdx:
      | (({
          idx,
          dir,
          limit,
        }: {
          idx?: number;
          dir: TImgSlideDir;
          limit: number;
        }) => number)
      | number;
  }) => void;
};
