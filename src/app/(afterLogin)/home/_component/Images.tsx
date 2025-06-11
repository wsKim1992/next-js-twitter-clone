"use client";
import { useHomeStore } from "@stores/home";
import { isEqual } from "lodash";
import SingleImage from "./Image";
import { useStoreWithEqualityFn } from "zustand/traditional";
import {
  useEffect,
  useState,
  useContext,
  useRef,
  type FC,
  type Dispatch,
  type SetStateAction,
  createContext,
} from "react";
import { CancelButton, ImageContainer } from "./Common.style";
import { setImgIdxFunc, slideToImgByIdx } from "@utils/homeForm";
import { type TImgSlideDir } from "@typings/home";

type ArrowButtonProps = {
  dir: TImgSlideDir;
};

type TContext = {
  imgs?: string[] | undefined;
  imgIdx: number;
  setImgIdx?: Dispatch<SetStateAction<number>>;
};

const Context = createContext<TContext>({ imgIdx: -1 });

const ArrowButton: FC<ArrowButtonProps> = ({ dir }) => {
  const { setImgIdx, imgIdx, imgs } = useContext<TContext>(Context);
  const handleClickBtn = () => {
    const nextIdx = setImgIdxFunc({
      idx: imgIdx,
      dir,
      limit: imgs ? imgs.length : 0,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    setImgIdx && setImgIdx(nextIdx);
  };
  return imgs === undefined ? null : dir === "L" ? (
    <CancelButton
      disabled={imgIdx <= 0}
      onClick={handleClickBtn}
      data-arrow-left
    >
      <svg
        width="25"
        height="25"
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
  ) : (
    <CancelButton
      disabled={imgIdx >= imgs?.length - 1}
      onClick={handleClickBtn}
      data-arrow-right
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </CancelButton>
  );
};

const useImageIdx = () => {
  const [imgIdx, setImgIdx] = useState(0);
  const imgs = useStoreWithEqualityFn(
    useHomeStore,
    (state) => state.postForm.imgs,
    isEqual
  );

  useEffect(() => {
    if (imgs && imgIdx >= imgs?.length) {
      setImgIdx(imgs.length - 1);
    } else if (imgs === undefined) {
      setImgIdx(-1);
    }
  }, [imgs, imgIdx]);

  return {
    imgs,
    imgIdx,
    setImgIdx,
  };
};

const Images = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { imgs, imgIdx, setImgIdx } = useImageIdx();

  useEffect(() => {
    if (ref.current) {
      slideToImgByIdx({ parentElem: ref.current, idx: imgIdx });
    }
  }, [imgIdx]);

  return (
    <Context.Provider value={{ imgIdx, setImgIdx, imgs }}>
      {imgs && (
        <ImageContainer ref={ref}>
          <ArrowButton dir="L" />
          {imgs.map((img, idx) => (
            <SingleImage key={`${img}_${idx}`} src={img} idx={idx} />
          ))}
          <ArrowButton dir="R" />
        </ImageContainer>
      )}
    </Context.Provider>
  );
};

export default Images;
