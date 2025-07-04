"use client";

import {
  ProfileBox,
  ProfileContent as ProfileContentBox,
  ProfileImg,
} from "@/app/(afterLogin)/[username]/_component/Common.style";
import Image from "next/image";
import { FC } from "react";
import tempProfileImg from "@public/zlogo.png";
import { Box, Button, Text } from "@radix-ui/themes";

type ProfileProps = {
  username: string;
};

const ProfileContent: FC<ProfileProps> = ({ username }) => {
  return (
    <ProfileBox>
      <ProfileImg asChild>
        <Image src={tempProfileImg} alt="profile-image" />
      </ProfileImg>
      <ProfileContentBox>
        <Box className="text-box">
          <Text className="username">{username}</Text>
          <Text className="nicakname">@zero cho</Text>
        </Box>
        <Button className="btn">follow</Button>
      </ProfileContentBox>
    </ProfileBox>
  );
};

export default ProfileContent;
