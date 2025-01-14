import { create } from "zustand";
import { type THomeTabObj, type TPostForm } from "@typings/home";

type THomeState = {
  tabVal: THomeTabObj;
  postForm: TPostForm;
};

type THomeAction = {
  setTabVal: (
    tabVal: THomeTabObj | ((newTabVal: THomeTabObj) => THomeTabObj)
  ) => void;
  setContent: (newContent: string) => void;
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
};

export const useHomeStore = create<THomeState & THomeAction>()((set) => ({
  tabVal: "FOLLOWING",
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
  setImgs: ({ idx, imgs: newImgs }) =>
    set((state) => ({
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
    })),
}));
