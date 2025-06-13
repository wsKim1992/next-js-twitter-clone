"use client";

import { useStore } from "zustand";
import { useHomeStore } from "@stores/home";

import { useShallow } from "zustand/shallow";
import { useRef, useEffect } from "react";
import "quill/dist/quill.snow.css";

import { useState } from "react";
import { Editor as EditorComponent } from "@/app/(afterLogin)/home/_component/Common.style";
import Quill from "quill";
import { initQuill } from "@utils/homeForm";

const Editor = () => {
  const content = useHomeStore(useShallow((state) => state.postForm.content));
  const setContent = useHomeStore((state) => state.setContent);
  const setDelta = useHomeStore((state) => state.setDelta);
  const quillRef = useRef<HTMLDivElement>(null);
  const [quillInstance, setQuillInstance] = useState<Quill | null>(null);

  useEffect(() => {
    if (quillRef.current) {
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
