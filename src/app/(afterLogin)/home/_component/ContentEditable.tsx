"use client";
import { Flex } from "@radix-ui/themes";
import { Editor } from "./Common.style";
import EditorTools from "./EditorTools";
import Images from "./Images";
const ContentEditable = () => {
  return (
    <Flex
      direction={"column"}
      style={{
        width: "100%",
        flex: "1 1 0",
        flexWrap: "wrap",
        minWidth: "0px",
      }}
    >
      <Editor contentEditable={true} />
      <EditorTools />
      <Images />
    </Flex>
  );
};

export default ContentEditable;
