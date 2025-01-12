"use client";
import { type TNav } from "@typings/route";
import Link from "next/link";
import { Box } from "@radix-ui/themes";
import { FC, useMemo } from "react";
import { styled } from "@/stitches.config";
import { useSelectedLayoutSegment } from "next/navigation";

type LNBLinkProps = TNav;

const LinkContainer = styled(Box, {
  width: "fit-content",
  height: "fit-content",
  fontSize: "inherit",
  fontWeight: "inherit",
  variants: {
    isNow: {
      true: {
        fontWeight: "bold",
      },
      false: {
        color: "#000",
      },
    },
  },
  defaultVariants: {
    isNow: false,
  },
});

const LNBLink: FC<LNBLinkProps> = ({ title, icon, path, selectedIcon }) => {
  const segment = useSelectedLayoutSegment();
  const isNow = useMemo(() => {
    return segment === path.split("/")[1];
  }, [segment, path]);
  return (
    <>
      {isNow ? selectedIcon : icon}
      <LinkContainer asChild isNow={isNow}>
        <Link style={{ flexGrow: "1" }} href={path}>
          {title}
        </Link>
      </LinkContainer>
    </>
  );
};

export default LNBLink;
