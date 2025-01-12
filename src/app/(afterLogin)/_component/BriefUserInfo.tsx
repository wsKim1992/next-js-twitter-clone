"use client";

import ZeroChoLogo from "@public/5Udwvqim.jpg";
import Image from "next/image";
import { Box, Text, Flex } from "@radix-ui/themes";
import { styled } from "@/stitches.config";

const UserInfoBox = styled(Flex, {
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  height: "66px",
  padding: "12px",
  margin: "12px 0px",
  borderRadius: "50px",
  boxSizing: "border-box",
  cursor: "pointer",
  "&:hover": {
    background: "rgba(15,20,25, 0.1)",
  },
});
const BriefUserInfo = () => {
  return (
    <UserInfoBox>
      <Image
        src={ZeroChoLogo}
        width={40}
        height={40}
        style={{
          borderRadius: "50%",
          overflow: "hidden",
        }}
        alt="logo"
      />
      <Box style={{ flexGrow: "1", margin: "0 12px" }}>
        <Text
          style={{
            display: "block",
            width: "100%",
            fontSize: "12px",
            fontWeight: "800",
          }}
        >
          제로초
        </Text>
        <Text
          style={{
            display: "block",
            width: "100%",
            fontSize: "12px",
            fontWeight: "400",
          }}
        >
          @zerocho
        </Text>
      </Box>
    </UserInfoBox>
  );
};

export default BriefUserInfo;
