"use client";

import ZeroChoLogo from "@public/5Udwvqim.jpg";
import Image from "next/image";
import { Box, Text } from "@radix-ui/themes";

const BriefUserInfo = () => {
  return (
    <>
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
    </>
  );
};

export default BriefUserInfo;
