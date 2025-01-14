"use client";
import { Box } from "@radix-ui/themes";
import HomeTab from "./_component/HomeTab";

export default function Home() {
  return (
    <Box style={{ width: "inherit", height: "fit-content" }}>
      <HomeTab />
    </Box>
  );
}
