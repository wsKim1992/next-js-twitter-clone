"use client";
import { Flex } from "@radix-ui/themes";
import { Editor } from "./Common.style";
import EditorTools from "./EditorTools";

const ContentEditable = () => {
  return (
    <Flex direction={"column"} style={{ width: "100%" }}>
      <Editor contentEditable={true} />
      <EditorTools />
    </Flex>
  );
};

export default ContentEditable;
