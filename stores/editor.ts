import { type TEditorStore, type TEditorAction } from "@typings/editor";
import { createStore, StoreApi } from "zustand";

export const createEditorStore = (): StoreApi<TEditorStore & TEditorAction> =>
  createStore<TEditorStore & TEditorAction>()((set) => ({
    postForm: {
      content: "",
      imgs: undefined,
    },
    init: () =>
      set((state) => ({
        ...state,
        postForm: {
          content: "",
          imgs: undefined,
        },
      })),
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
