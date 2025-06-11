import { type TImgSlideDir } from "@typings/home";

import { type Crop } from "react-image-crop";

export const loadImage = ({
  src,
  fixedWidth,
}: {
  src: string;
  fixedWidth: number;
}): Promise<Crop> => {
  return new Promise((resolve) => {
    const imgObj = new Image();
    imgObj.src = src;
    imgObj.onload = () => {
      const ratio = imgObj.height / imgObj.width;
      console.log(imgObj.height);
      console.log(imgObj.width);
      console.log({ fixedWidth });
      resolve({
        x: 50,
        y: 50,
        width: fixedWidth - 100,
        height: fixedWidth * ratio - 100,
        unit: "px",
      });
    };
  });
};

export const setImgIdxFunc = ({
  idx,
  dir,
  limit,
}: {
  idx?: number;
  dir: TImgSlideDir;
  limit: number;
}): number => {
  if (idx !== undefined) {
    let nextIdx = dir === "R" ? idx + 1 : idx - 1;
    if (nextIdx >= limit) {
      nextIdx = limit;
    } else if (nextIdx <= 0) {
      nextIdx = 0;
    }
    return nextIdx;
  }
  return 0;
};

export const slideToImgByIdx = ({
  parentElem,
  idx,
}: {
  parentElem: HTMLElement;
  idx: number;
}): void => {
  const imgElements = parentElem.querySelectorAll(".img-box");
  if (imgElements) {
    const targetElem = imgElements[idx];
    if (targetElem) {
      const { offsetLeft: pOffsetLeft } = parentElem;
      const { offsetLeft: tOffsetLeft } = targetElem as HTMLElement;
      parentElem.scrollTo({
        left: tOffsetLeft - pOffsetLeft,
        behavior: "smooth",
      });
    }
  }
};

export const deleteImgs = ({
  idx,
  imgs,
}: {
  idx?: number;
  imgs?: string[];
}): string[] | undefined => {
  if (!imgs) return undefined;
  const filteredImgs = imgs.filter((_img, arrIdx) => arrIdx !== idx);
  return filteredImgs.length > 0 ? filteredImgs : undefined;
};

export const convertIntoBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (file.type.match("images/*")) {
      reject("이미지를 업로드해주세요");
    }
    const reader = new FileReader();
    reader.onload = (evt) => {
      if (evt.target && typeof evt.target.result === "string") {
        resolve(evt.target?.result);
      } else {
        reject(Error("적절한 형식의 type 이 아님"));
      }
    };
    reader.readAsDataURL(file);
  });
};

export const getBs64s = async (files: FileList) => {
  return await Promise.all(
    Array.from(files).map((file) => convertIntoBase64(file))
  );
};
