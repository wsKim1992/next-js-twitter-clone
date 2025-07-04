"use client";
import Post from "@/app/(afterLogin)/_component/Post";
import { PostBox } from "@/app/(afterLogin)/[username]/status/[id]/_component/Common.style";
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

const Posts = () => {
  return (
    <PostBox>
      <Post />
      <Form />
      {dummyPost.content.replies.map((elem, idx) => (
        <Post key={`${elem.id}_${idx}`} />
      ))}
    </PostBox>
  );
};

export default Posts;
