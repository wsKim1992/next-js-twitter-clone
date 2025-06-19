"use client";

import {
  MainContent,
  PostBox,
  PostContentBox,
  PostProfileImg,
  PostTextBox,
  PostUserNameBox,
  PostButtonBox,
} from "@/app/(afterLogin)/_component/Common.style";
import tempProfileImg from "@public/tempProfile.jpg";
import Image from "next/image";
import Link from "next/link";
import { Box, IconButton, Text } from "@radix-ui/themes";
import { HeartIcon } from "@radix-ui/react-icons";

const Post = () => {
  return (
    <PostBox>
      <PostProfileImg asChild>
        <Link href={`/profile/name`}>
          <Image src={tempProfileImg} width={40} height={40} alt="logo" />
        </Link>
      </PostProfileImg>
      <PostContentBox>
        <PostTextBox>
          <PostUserNameBox>
            <p className="nickname">Elon Musk</p>
            <p className="id">@elon Musk</p>
            <p className="time">&nbsp;.&nbsp;n초 전</p>
          </PostUserNameBox>
          <MainContent>Text</MainContent>
        </PostTextBox>
        <PostButtonBox>
          <Box className="btn-wrapper">
            <IconButton className="icon-btn">
              <HeartIcon width={20} height={20} />
            </IconButton>
            <Text className="text">2</Text>
          </Box>
          <Box className="btn-wrapper">
            <IconButton className="icon-btn">
              <HeartIcon width={20} height={20} />
            </IconButton>
            <Text className="text">2</Text>
          </Box>
          <Box className="btn-wrapper">
            <IconButton className="icon-btn">
              <HeartIcon width={20} height={20} />
            </IconButton>
            <Text className="text">2</Text>
          </Box>
        </PostButtonBox>
      </PostContentBox>
    </PostBox>
  );
};

export default Post;
