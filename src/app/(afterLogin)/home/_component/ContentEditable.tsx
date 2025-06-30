"use client";
import EditorTools from "./EditorTools";
import Images from "./Images";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import Editor from "@/app/(afterLogin)/home/_component/Editor";
import Quill, { type Range } from "quill";
import { StoreApi } from "zustand";
import { type TEditorStore, type TEditorAction } from "@typings/editor";
import { createEditorStore } from "@stores/editor";
import { EditorBox } from "@/app/(afterLogin)/home/_component/Common.style";

const initialObj = {
  showEmojiBox: false,
  editorStore: createEditorStore(),
};

export const Ctx = createContext<{
  showEmojiBox: boolean;
  setShowEmojiBox?: Dispatch<SetStateAction<boolean>>;
  quillInstance?: Quill | null;
  setQuillInstance?: Dispatch<SetStateAction<Quill | null>>;
  tempSelection?: Range | null;
  setTempSelection?: Dispatch<SetStateAction<Range | null>>;
  editorStore: StoreApi<TEditorAction & TEditorStore>;
}>({ ...initialObj });

const ContentEditable = () => {
  const [showEmojiBox, setShowEmojiBox] = useState<boolean>(false);
  const [quillInstance, setQuillInstance] = useState<Quill | null>(null);
  const [tempSelection, setTempSelection] = useState<Range | null>(null);
  const editorStore = useMemo(() => {
    return createEditorStore();
  }, []);
  return (
    <EditorBox>
      <Ctx.Provider
        value={{
          editorStore,
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
    </EditorBox>
  );
};

export default ContentEditable;
