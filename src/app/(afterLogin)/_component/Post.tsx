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
import { HeartIcon, ChatBubbleIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { faker } from "@faker-js/faker";
import PostImgBox from "@/app/(afterLogin)/_component/PostImgBox";

const dummyUser = {
  content: {
    user: {
      id: 123,
      src: tempProfileImg,
      username: "Elon Musk",
      nickname: "elonMush",
    },
    id: "1215",
    text: "hello",
    images: [
      {
        imageIdx: 1,
        src: faker.image.urlLoremFlickr(),
      },
      {
        imageIdx: 2,
        src: faker.image.urlLoremFlickr(),
      },
      {
        imageIdx: 3,
        src: faker.image.urlLoremFlickr(),
      },
    ],
    postDate: new Date(),
  },
};

const Post = () => {
  const router = useRouter();
  const handleClickCapture = () => {
    router.push(
      `/${dummyUser.content.user.username}/status/${dummyUser.content.id}`
    );
  };
  return (
    <PostBox onClickCapture={handleClickCapture}>
      <PostProfileImg asChild>
        <Link href={`/${dummyUser.content.user.username}`}>
          <Image src={tempProfileImg} width={40} height={40} alt="logo" />
        </Link>
      </PostProfileImg>
      <PostContentBox>
        <PostTextBox>
          <PostUserNameBox>
            <p className="nickname">{dummyUser.content.user.nickname}</p>
            <p className="id">@&nbsp;{dummyUser.content.user.username}</p>
            <p className="time">&nbsp;.&nbsp;n초 전</p>
          </PostUserNameBox>
          <MainContent>{dummyUser.content.text}</MainContent>
        </PostTextBox>
        <PostImgBox
          username={dummyUser.content.user.username}
          contentId={dummyUser.content.id}
          images={dummyUser.content.images}
        />
        <PostButtonBox>
          <Box className="btn-wrapper">
            <IconButton className="icon-btn">
              <ChatBubbleIcon width={20} height={20} />
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
