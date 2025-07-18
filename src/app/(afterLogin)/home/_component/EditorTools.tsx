"use client";
import { IconBtn, IconWrapper } from "./Common.style";
import { type ChangeEvent } from "react";
import { getBs64s } from "@utils/homeForm";
import { useContext } from "react";
import { Ctx } from "@/app/(afterLogin)/home/_component/ContentEditable";
import Emojis from "@/app/(afterLogin)/home/_component/Emojis";
import { useStore } from "zustand";
import { ToolBarBox } from "./Common.style";
const EditorTools = () => {
  const {
    showEmojiBox,
    setShowEmojiBox,
    quillInstance,
    setTempSelection,
    editorStore,
  } = useContext(Ctx);
  const setImgs = useStore(editorStore, (state) => state.setImgs);
  const onChange = async (evt: ChangeEvent<HTMLInputElement>) => {
    try {
      const { files } = evt.target;
      if (files && files.length > 0) {
        const results = await getBs64s(files);
        setImgs({ imgs: results });
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <ToolBarBox>
      <IconBtn>
        <input
          type="file"
          id="upload-image"
          accept="image/*"
          value=""
          onChange={onChange}
          multiple
          hidden
        />
        <label htmlFor="upload-image">
          <IconWrapper>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"
            >
              <g>
                <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
              </g>
            </svg>
          </IconWrapper>
        </label>
      </IconBtn>
      <IconBtn>
        <IconWrapper>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"
          >
            <g>
              <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path>
            </g>
          </svg>
        </IconWrapper>
      </IconBtn>
      <IconBtn
        onClick={() => {
          if (setShowEmojiBox) {
            if (quillInstance && setTempSelection) {
              quillInstance?.focus();
              const selection = quillInstance.getSelection();
              if (selection) {
                setTempSelection(selection);
              }
            }
            setShowEmojiBox((prev) => !prev);
          }
        }}
      >
        <IconWrapper>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"
          >
            <g>
              <path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path>
            </g>
          </svg>
        </IconWrapper>
      </IconBtn>
      {showEmojiBox && <Emojis />}
    </ToolBarBox>
  );
};

export default EditorTools;
