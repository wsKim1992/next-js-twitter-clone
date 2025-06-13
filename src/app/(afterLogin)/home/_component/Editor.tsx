"use client";

import { useHomeStore } from "@stores/home";

import { useRef, useEffect, useContext } from "react";
import "quill/dist/quill.snow.css";

import { Editor as EditorComponent } from "@/app/(afterLogin)/home/_component/Common.style";
import { initQuill } from "@utils/homeForm";
import { Ctx } from "@/app/(afterLogin)/home/_component/ContentEditable";

const Editor = () => {
  const { setQuillInstance } = useContext(Ctx);
  const setContent = useHomeStore((state) => state.setContent);
  const setDelta = useHomeStore((state) => state.setDelta);
  const quillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (quillRef.current && setQuillInstance) {
      initQuill({
        elem: quillRef.current,
        setQuillInstance,
        setContent,
        setDelta,
      });
    }
  }, [setQuillInstance, setContent, setDelta]);

  return (
    <>
      <EditorComponent ref={quillRef}></EditorComponent>
    </>
  );
};

export default Editor;
