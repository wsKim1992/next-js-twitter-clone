"use client";
import Tab from "../../_component/Tab";
import { useHomeStore } from "@stores/home";
import { homeTabObj } from "@constants/home";
import { type THomeTabObj } from "@typings/home";
import { useShallow } from "zustand/shallow";

const isTabVal = (value: string): value is THomeTabObj => {
  return ["RECOMMAND", "FOLLOWING"].includes(value);
};

const HomeTab = () => {
  const { tabVal, setTabVal } = useHomeStore(
    useShallow((state) => ({
      tabVal: state.tabVal,
      setTabVal: state.setTabVal,
    }))
  );
  const handleChange = (value: string) => {
    if (isTabVal(value)) {
      setTabVal(value);
    }
  };
  return (
    <Tab<THomeTabObj>
      tabs={homeTabObj}
      value={tabVal}
      handleChange={handleChange}
    />
  );
};

export default HomeTab;
