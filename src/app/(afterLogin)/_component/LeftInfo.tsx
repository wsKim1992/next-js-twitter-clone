"use client";

import LeftForm from "@/app/(afterLogin)/_component/LeftForm";
import Trends from "@/app/(afterLogin)/_component/Trends";
import RecommandFollow from "@/app/(afterLogin)/_component/RecommandFollow";
import { usePathname } from "next/navigation";

import { Flex } from "@radix-ui/themes";
import { styled } from "@/stitches.config";

export const LeftBox = styled(Flex, {
  flexDirection: "column",
  gap: "10px",
  padding: "10px",
  width: "350px",
  height: "100%",
});

const LeftInfo = () => {
  const pathname = usePathname();
  return (
    <LeftBox asChild>
      <section>
        {pathname !== "/search" && pathname !== "/explore" && (
          <>
            <LeftForm />
            <Trends />
          </>
        )}
        <RecommandFollow />
      </section>
    </LeftBox>
  );
};

export default LeftInfo;
