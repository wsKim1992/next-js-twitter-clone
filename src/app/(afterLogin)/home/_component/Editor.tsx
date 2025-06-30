"use client";

import { useRef, useEffect, useContext } from "react";
import "quill/dist/quill.snow.css";

import { Editor as EditorComponent } from "@/app/(afterLogin)/home/_component/Common.style";
import { initQuill } from "@utils/homeForm";
import { Ctx } from "@/app/(afterLogin)/home/_component/ContentEditable";
import { useStore } from "zustand";
const Editor = () => {
  const { setQuillInstance, editorStore } = useContext(Ctx);
  const setContent = useStore(editorStore, (state) => state.setContent);
  const setDelta = useStore(editorStore, (state) => state.setDelta);
  const init = useStore(editorStore, (state) => state.init);
  const quillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (quillRef.current && setQuillInstance) {
      initQuill({
        elem: quillRef.current,
        setQuillInstance,
        setContent,
        setDelta,
      });
      return () => {
        init();
      };
    }
  }, [setQuillInstance, setContent, setDelta, init]);

  return (
    <>
      <EditorComponent ref={quillRef}></EditorComponent>
    </>
  );
};

export default Editor;
