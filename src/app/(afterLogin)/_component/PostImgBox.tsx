"use client";

import {
  PostImgLink,
  PostImg,
  PostImageBox,
} from "@/app/(afterLogin)/_component/Common.style";
import { useRouter } from "next/navigation";
import { type FC } from "react";

type PostImgBoxProps = {
  username: string;
  contentId: string;
  images: { imageIdx: number; src: string }[];
};

const PostImgBox: FC<PostImgBoxProps> = ({ username, contentId, images }) => {
  const router = useRouter();
  return (
    <PostImageBox>
      {images.slice(0, 4).map((elem, idx) => (
        <PostImg
          css={{
            gridRow:
              images.length < 4 && images.length % 2 == 0 ? "1 / -1" : "unset",
            gridColumn:
              images.length < 4 && images.length % 2 == 1 && idx === 2
                ? "1 / -1"
                : "unset",
          }}
          key={elem.imageIdx}
        >
          <PostImgLink
            css={{
              backgroundImage: `url(${elem.src})`,
              backgroundSize: "container",
            }}
            onClickCapture={() => {
              router.push(
                `/${username}/status/${contentId}/photos/${elem.imageIdx}`,
                { scroll: false }
              );
            }}
          ></PostImgLink>
        </PostImg>
      ))}
    </PostImageBox>
  );
};

export default PostImgBox;
