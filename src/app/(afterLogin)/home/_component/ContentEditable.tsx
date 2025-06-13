"use client";
import { Flex } from "@radix-ui/themes";
import EditorTools from "./EditorTools";
import Images from "./Images";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import Editor from "@/app/(afterLogin)/home/_component/Editor";

export const Ctx = createContext<{
  showEmojiBox: boolean;
  setShowEmojiBox?: Dispatch<SetStateAction<boolean>>;
}>({
  showEmojiBox: false,
});

const ContentEditable = () => {
  const [showEmojiBox, setShowEmojiBox] = useState<boolean>(false);
  return (
    <Flex
      direction={"column"}
      style={{
        width: "100%",
        flex: "1 1 0",
        flexWrap: "wrap",
        minWidth: "0px",
        position: "relative",
      }}
    >
      <Ctx.Provider value={{ showEmojiBox, setShowEmojiBox }}>
        <Editor />
        <EditorTools />
        <Images />
      </Ctx.Provider>
    </Flex>
  );
};

export default ContentEditable;
