import { create } from "zustand";
import { type THomeTabObj } from "@typings/home";

type THomeState = {
  tabVal: THomeTabObj;
};

type THomeAction = {
  init: () => void;
  setTabVal: (
    tabVal: THomeTabObj | ((newTabVal: THomeTabObj) => THomeTabObj)
  ) => void;
};

export const useHomeStore = create<THomeState & THomeAction>()((set) => ({
  tabVal: "FOLLOWING",
  init: () =>
    set(() => ({
      tabVal: "FOLLOWING",
    })),

  setTabVal: (newTabVal) =>
    set((state) => ({
      tabVal:
        typeof newTabVal == "function" ? newTabVal(state.tabVal) : newTabVal,
    })),
}));
