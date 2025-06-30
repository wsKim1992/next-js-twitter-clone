"use client";

import { Title } from "@/app/(afterLogin)/_component/Common.style";
import { HeaderBox } from "@/app/(afterLogin)/[username]/_component/Common.style";
import { type FC } from "react";
import { IconButton } from "@radix-ui/themes";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
type HeaderProps = {
  username: string;
};

const Header: FC<HeaderProps> = ({ username }) => {
  const router = useRouter();
  const handleClickArrow = () => {
    router.back();
  };
  return (
    <HeaderBox>
      <IconButton
        onClick={() => {
          handleClickArrow();
        }}
        className="icon-btn"
      >
        <ArrowLeftIcon className="icon" />
      </IconButton>
      <Title css={{ padding: "0px" }}>{username}</Title>
    </HeaderBox>
  );
};

export default Header;
