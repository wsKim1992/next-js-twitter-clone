"use client";
import { Flex, Box } from "@radix-ui/themes";
import Image from "next/image";
import ZeroChoLogo from "@public/5Udwvqim.jpg";
import ContentEditable from "./ContentEditable";

const PostTweet = () => {
  return (
    <Box
      style={{
        height: "fit-content",
        paddingTop: "4px",
      }}
    >
      <Flex
        direction={"row"}
        align={"start"}
        justify={"start"}
        style={{
          height: "fit-content",
          padding: "0px 16px",
          boxSizing: "border-box",
        }}
      >
        <Box
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "100%",
            overflow: "hidden",
          }}
        >
          <Image
            alt="user-profile-img"
            width={40}
            height={40}
            objectFit="cover"
            src={ZeroChoLogo}
          />
        </Box>
        <ContentEditable />
      </Flex>
    </Box>
  );
};

export default PostTweet;
