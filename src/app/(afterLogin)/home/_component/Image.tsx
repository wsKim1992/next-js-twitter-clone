/* eslint-disable @next/next/no-img-element */
"use client";
import { Box } from "@radix-ui/themes";
import { type FC, useContext, useState } from "react";
import { useStore } from "zustand";
import { CancelButton } from "./Common.style";
import { deleteImgs } from "@utils/homeForm";
import EditImage from "./EditImage";
import { Ctx } from "@/app/(afterLogin)/home/_component/ContentEditable";
type SingleImageProps = {
  src: string;
  idx: number;
};

const SingleImage: FC<SingleImageProps> = ({ src, idx }) => {
  const { editorStore } = useContext(Ctx);
  const [isShowDialog, setIsShowDialog] = useState<boolean>(false);
  const setImgs = useStore(editorStore, (state) => state.setImgs);
  const handdleClickCancel = () => {
    setImgs({ idx, imgs: deleteImgs });
  };
  return (
    <Box
      className="img-box"
      style={{
        display: "inline-block",
        width: "50%",
        height: "290px",
        overflow: "hidden",
        paddingLeft: "10px",
        boxSizing: "border-box",
        position: "relative",
        scrollSnapAlign: "start",
      }}
    >
      <CancelButton onClick={handdleClickCancel}>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </CancelButton>
      <CancelButton
        onClick={() => {
          setIsShowDialog(true);
        }}
        data-edit-button
      >
        Edit
      </CancelButton>
      {isShowDialog && (
        <EditImage idx={idx} setIsShowDialog={setIsShowDialog} />
      )}
      <Box
        asChild
        style={{
          borderRadius: "16px",
          width: "100%",
          height: "100%",
          display: "block",
          objectFit: "cover",
        }}
      >
        <img src={src} alt="" />
      </Box>
    </Box>
  );
};

export default SingleImage;
