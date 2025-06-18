"use client";
import { Box } from "@radix-ui/themes";
import HomeTab from "./_component/HomeTab";
import PostTweet from "./_component/PostTweet";
import { useEffect } from "react";
import { useHomeStore } from "@stores/home";
export default function Home() {
  const init = useHomeStore((state) => state.init);
  useEffect(() => {
    return () => {
      init();
    };
  }, [init]);
  return (
    <Box style={{ height: "fit-content" }}>
      <HomeTab />
      <PostTweet />
    </Box>
  );
}
