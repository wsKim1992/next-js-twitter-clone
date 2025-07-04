"use client";
import { RecommandBox } from "@/app/(afterLogin)/_component/Common.style";
import tempProfileImg from "@public/tempProfile.jpg";
import { Box, Button, Text } from "@radix-ui/themes";
import Image from "next/image";

const Recommand = () => {
  return (
    <RecommandBox>
      <Box className="profile-img-box">
        <Image width={40} height={40} src={tempProfileImg} alt="img" />
      </Box>
      <Box className="info-box">
        <Text className="title">Elon Musk</Text>
        <Text className="sub-title">@elon</Text>
      </Box>
      <Button className="follow-btn">follow</Button>
    </RecommandBox>
  );
};

export default Recommand;
