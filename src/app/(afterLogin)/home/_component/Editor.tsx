"use client";

import { useRef, useEffect, useContext, FC } from "react";
import "quill/dist/quill.snow.css";

import { Editor as EditorComponent } from "@/app/(afterLogin)/home/_component/Common.style";
import { initQuill } from "@utils/homeForm";
import { Ctx } from "@/app/(afterLogin)/home/_component/ContentEditable";
import { useStore } from "zustand";
import { removeToolbar } from "@utils/homeForm";
type EditorProps = {
  isNoToolBar?: boolean;
};

const Editor: FC<EditorProps> = ({ isNoToolBar = false }) => {
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
      if (isNoToolBar) {
        removeToolbar();
      }
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
