"use client";
import { Tabs } from "@radix-ui/themes";

import { type TTab } from "@typings/home";
import { CustomTabList } from "./Common.style";
type HomeTabProps<T extends string> = {
  tabs: TTab<T>[];
  value: T;
  handleChange: (value: string) => void;
};

const Tab = <T extends string>({
  tabs,
  value,
  handleChange,
}: HomeTabProps<T>) => {
  return (
    <Tabs.Root value={value} onValueChange={handleChange}>
      <CustomTabList color="indigo">
        {tabs.map((tab) => (
          <Tabs.Trigger key={tab.value} value={tab.value}>
            {tab.text}
          </Tabs.Trigger>
        ))}
      </CustomTabList>
    </Tabs.Root>
  );
};

export default Tab;
