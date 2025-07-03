"use client";
import ContentEditable from "@/app/(afterLogin)/home/_component/ContentEditable";
import {
  FormBox,
  ProfileImgBox,
  ImgElem,
  EditorBox,
} from "@/app/(afterLogin)/[username]/status/[id]/_component/Common.style";
import tempImg from "@public/tempProfile.jpg";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const dummyUser = {
  id: 123,
  username: "Elon Musk",
  nickname: "elon Mush",
  src: tempImg,
};

type FormProps = {
  isNoToolBar?: boolean;
};

const Form: FC<FormProps> = ({ isNoToolBar = false }) => {
  return (
    <FormBox>
      <ProfileImgBox asChild>
        <Link href={`/${dummyUser.username}`}>
          <ImgElem asChild>
            <Image src={dummyUser.src} alt="hello" />
          </ImgElem>
        </Link>
      </ProfileImgBox>
      <EditorBox>
        <ContentEditable isNoToolBar={isNoToolBar} />
      </EditorBox>
    </FormBox>
  );
};

export default Form;
