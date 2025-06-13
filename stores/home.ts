import { create } from "zustand";
import {
  type THomeTabObj,
  type TPostForm,
  type TImgSlideDir,
} from "@typings/home";
import { Delta } from "quill";

type THomeState = {
  postFormImgIdx?: number;
  tabVal: THomeTabObj;
  postForm: TPostForm;
};

type THomeAction = {
  init: () => void;
  setTabVal: (
    tabVal: THomeTabObj | ((newTabVal: THomeTabObj) => THomeTabObj)
  ) => void;
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

export const useHomeStore = create<THomeState & THomeAction>()((set) => ({
  tabVal: "FOLLOWING",
  init: () =>
    set(() => ({
      tabVal: "FOLLOWING",
      postForm: {
        content: "",
        imgs: undefined,
      },
      postFormImgIdx: undefined,
    })),

  setTabVal: (newTabVal) =>
    set((state) => ({
      tabVal:
        typeof newTabVal == "function" ? newTabVal(state.tabVal) : newTabVal,
    })),
  postForm: {
    content: "",
    imgs: undefined,
  },
  setContent: (newContent) =>
    set((state) => ({
      ...state,
      postForm: {
        ...state.postForm,
        content: newContent,
      },
    })),
  setDelta(newDelta) {
    set((state) => ({
      ...state,
      postForm: {
        ...state.postForm,
        delta: newDelta,
      },
    }));
  },
  setImgs: ({ idx, imgs: newImgs }) =>
    set((state) => {
      return {
        ...state,
        postForm: {
          ...state.postForm,
          imgs:
            typeof newImgs === "function"
              ? newImgs({ idx, imgs: state.postForm.imgs })
              : state.postForm.imgs
              ? [...state.postForm.imgs, ...newImgs]
              : [...newImgs],
        },
      };
    }),
  setImgIdx: ({ dir, newImageIdx }) => {
    return set((state) => {
      const {
        postForm: { imgs },
      } = state;
      return {
        ...state,
        postFormImgIdx:
          typeof newImageIdx === "function"
            ? dir !== undefined
              ? newImageIdx({
                  idx: state.postFormImgIdx,
                  dir,
                  limit: imgs ? imgs.length : 0,
                })
              : undefined
            : newImageIdx,
      };
    });
  },
}));
