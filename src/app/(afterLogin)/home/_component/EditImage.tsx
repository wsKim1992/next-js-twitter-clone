/* eslint-disable @next/next/no-img-element */
"use client";
import {
  ImageSettingDialogContainer,
  ImageSettingDialogCtx,
  StyledDialogTitle,
  CancelButton,
  ImageCropSelectBox,
} from "./Common.style";
import { Text, Box } from "@radix-ui/themes";
import {
  type FC,
  useEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
  useContext,
} from "react";
import { loadImage } from "@utils/homeForm";
import ReactCrop, { type PixelCrop, type Crop } from "react-image-crop";
import { useStore } from "zustand";
import { Ctx } from "@/app/(afterLogin)/home/_component/ContentEditable";

type EditImageProps = {
  idx: number;
  setIsShowDialog: Dispatch<SetStateAction<boolean>>;
};

const EditImage: FC<EditImageProps> = ({ idx, setIsShowDialog }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [crop, setCrop] = useState<Crop | null>(null);
  const { editorStore } = useContext(Ctx);
  const imgs = useStore(editorStore, (state) => state.postForm.imgs);
  const src = useMemo(() => {
    return imgs ? imgs.find((_, imgIdx) => imgIdx === idx) : undefined;
  }, [imgs, idx]);

  useEffect(() => {
    (async () => {
      if (ref.current) {
        const { width } = ref.current.getBoundingClientRect();
        console.log({ width });
        if (src && !isNaN(Number(width))) {
          const crop = await loadImage({ src, fixedWidth: Number(width) });
          setCrop(crop);
          console.log({ crop });
        }
      }
    })();
  }, [src]);

  const handleChangeCrop = (crop: PixelCrop) => {
    setCrop(crop);
  };

  return (
    <ImageSettingDialogContainer>
      <ImageSettingDialogCtx>
        <StyledDialogTitle>
          <CancelButton
            onClick={() => {
              setIsShowDialog(false);
            }}
            data-no-absolute
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </CancelButton>
          <Text
            style={{
              fontSize: "inherit",
              fontWeight: "inherit",
              color: "inherit",
            }}
          >
            Image Crop
          </Text>
        </StyledDialogTitle>
        <ImageCropSelectBox ref={ref}>
          {src && crop && (
            <ReactCrop aspect={1} crop={crop} onChange={handleChangeCrop}>
              <Box
                asChild
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  borderRadius: "15px",
                  objectFit: "contain",
                }}
              >
                <img src={src} alt="original image" />
              </Box>
            </ReactCrop>
          )}
        </ImageCropSelectBox>
      </ImageSettingDialogCtx>
    </ImageSettingDialogContainer>
  );
};

export default EditImage;
