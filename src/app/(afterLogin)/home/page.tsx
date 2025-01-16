"use client";
import { Box } from "@radix-ui/themes";
import HomeTab from "./_component/HomeTab";
import PostTweet from "./_component/PostTweet";
export default function Home() {
  return (
    <Box style={{ height: "fit-content" }}>
      <HomeTab />
      <PostTweet />
    </Box>
  );
}
