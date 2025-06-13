import { type TImgSlideDir } from "@typings/home";

import { type Crop } from "react-image-crop";

import { type SetStateAction, type Dispatch, type UIEvent } from "react";

import Quill, { type Delta, type EmitterSource } from "quill";

import DOMPurify from "dompurify";

const sanitizeDOM = (
  setContent: (newContent: string) => void,
  setDelta: (delta: Delta) => void
) => {
  return (quillInstance: Quill) => {
    const beforePurified = quillInstance.root.innerHTML;
    const cleanedDOM = DOMPurify.sanitize(beforePurified, {
      KEEP_CONTENT: false,
      FORBID_TAGS: ["script", "a"],
    });
    const selection = quillInstance.getSelection();
    if (beforePurified !== cleanedDOM) {
      quillInstance.clipboard.dangerouslyPasteHTML(0, cleanedDOM, "api");
      if (selection) {
        quillInstance.setSelection(selection.index, selection.length, "silent");
      }
      setContent(quillInstance.root.innerHTML);
      setDelta(quillInstance.getContents());
    }
  };
};

const textChangeCB = (
  quillInstance: Quill,
  setContent: (newContent: string) => void,
  setDelta: (delta: Delta) => void
): ((delta: Delta, oldDelta: Delta, source: EmitterSource) => void) => {
  const debounceHandler = debounce(sanitizeDOM, 200);
  return (delta: Delta) => {
    debounceHandler(quillInstance);
    setContent(quillInstance.getText());
    setDelta(delta);
  };
};

export const initQuill = ({
  elem,
  setQuillInstance,
  setContent,
  setDelta,
}: {
  elem: HTMLDivElement;
  setQuillInstance: Dispatch<SetStateAction<Quill | null>>;
  setContent: (newContent: string) => void;
  setDelta: (delta: Delta) => void;
}) => {
  const instance = new Quill(elem, {
    theme: "snow",
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline"],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link"],
        ["clean"],
      ],
    },
  });
  instance.on("text-change", textChangeCB(instance, setContent, setDelta));
  setQuillInstance(instance);
};

export const debounce = <T>(
  cb: (args: T) => void,
  delay: number
): ((...args: Parameters<(data: T) => void>) => void) => {
  let handler: ReturnType<typeof setInterval> | null = null;
  return (...args: Parameters<(data: T) => void>) => {
    if (handler) {
      clearTimeout(handler);
      handler = null;
    }
    handler = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

export const calculateNextIdx = (
  setImgIdx: Dispatch<SetStateAction<number>>
) => {
  return (currentTarget: EventTarget & Element) => {
    const { scrollLeft } = currentTarget;

    if (scrollLeft > 0) {
      const imageBox = currentTarget.querySelector(".img-box");
      const imageWidth = imageBox ? imageBox.getBoundingClientRect().width : 0;
      const idx = Math.floor(scrollLeft / imageWidth);
      setImgIdx(idx);
    } else {
      setImgIdx(0);
    }
  };
};

export const onScrollHandler = (
  setImgIdx: Dispatch<SetStateAction<number>>
) => {
  const debounceHandler = debounce(calculateNextIdx(setImgIdx), 1500);
  return (evt: UIEvent) => {
    const { currentTarget } = evt;
    if (currentTarget) {
      debounceHandler(currentTarget);
    }
  };
};

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
