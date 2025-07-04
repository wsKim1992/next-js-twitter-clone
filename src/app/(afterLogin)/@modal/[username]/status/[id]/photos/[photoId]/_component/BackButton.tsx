"use client";

import { Cross1Icon } from "@radix-ui/react-icons";

import { StyledIconButton } from "@/app/(afterLogin)/@modal/[username]/status/[id]/photos/[photoId]/_component/Common.style";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  const handleClickBtn = () => {
    router.back();
  };

  return (
    <StyledIconButton onClick={handleClickBtn}>
      <Cross1Icon className="icon" />
    </StyledIconButton>
  );
};

export default BackButton;
