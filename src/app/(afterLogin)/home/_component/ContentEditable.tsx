"use client";
import { Flex } from "@radix-ui/themes";
import EditorTools from "./EditorTools";
import Images from "./Images";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import Editor from "@/app/(afterLogin)/home/_component/Editor";
import Quill, { type Range } from "quill";

export const Ctx = createContext<{
  showEmojiBox: boolean;
  setShowEmojiBox?: Dispatch<SetStateAction<boolean>>;
  quillInstance?: Quill | null;
  setQuillInstance?: Dispatch<SetStateAction<Quill | null>>;
  tempSelection?: Range | null;
  setTempSelection?: Dispatch<SetStateAction<Range | null>>;
}>({
  showEmojiBox: false,
});

const ContentEditable = () => {
  const [showEmojiBox, setShowEmojiBox] = useState<boolean>(false);
  const [quillInstance, setQuillInstance] = useState<Quill | null>(null);
  const [tempSelection, setTempSelection] = useState<Range | null>(null);

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
      <Ctx.Provider
        value={{
          showEmojiBox,
          setShowEmojiBox,
          quillInstance,
          setQuillInstance,
          tempSelection,
          setTempSelection,
        }}
      >
        <Editor />
        <EditorTools />
        <Images />
      </Ctx.Provider>
    </Flex>
  );
};

export default ContentEditable;
