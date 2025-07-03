"use client";
import { TextContentBox } from "@/app/(afterLogin)/@modal/[username]/status/[id]/photos/[photoId]/_component/Common.style";
import Post from "@/app/(afterLogin)/_component/Post";
import tempProfileImg from "@public/tempProfile.jpg";
import Form from "@/app/(afterLogin)/[username]/status/[id]/_component/Form";

const dummyPost = {
  content: {
    id: 1215,
    text: "hello",
    images: undefined,
    postDate: new Date(),
    user: {
      id: 123,
      src: tempProfileImg,
      username: "Elon Musk",
      nickname: "elonMush",
    },
    replies: [
      {
        id: 1215,
        text: "hello",
        images: undefined,
        postDate: new Date(),
        user: {
          id: 123,
          src: tempProfileImg,
          username: "Elon Musk",
          nickname: "elonMush",
        },
      },
      {
        id: 1215,
        text: "hello",
        images: undefined,
        postDate: new Date(),
        user: {
          id: 123,
          src: tempProfileImg,
          username: "Elon Musk",
          nickname: "elonMush",
        },
      },
      {
        id: 1215,
        text: "hello",
        images: undefined,
        postDate: new Date(),
        user: {
          id: 123,
          src: tempProfileImg,
          username: "Elon Musk",
          nickname: "elonMush",
        },
      },
      {
        id: 1215,
        text: "hello",
        images: undefined,
        postDate: new Date(),
        user: {
          id: 123,
          src: tempProfileImg,
          username: "Elon Musk",
          nickname: "elonMush",
        },
      },
      {
        id: 1215,
        text: "hello",
        images: undefined,
        postDate: new Date(),
        user: {
          id: 123,
          src: tempProfileImg,
          username: "Elon Musk",
          nickname: "elonMush",
        },
      },
    ],
  },
};

const TextContent = () => {
  return (
    <TextContentBox>
      <Post />
      <Form isNoToolBar={true} />
      {dummyPost.content.replies.map((elem, idx) => (
        <Post key={`${elem.id}_${idx}`} />
      ))}
    </TextContentBox>
  );
};

export default TextContent;
