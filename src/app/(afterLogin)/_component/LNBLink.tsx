"use client";
import { type TNav } from "@typings/route";
import Link from "next/link";
import { Box } from "@radix-ui/themes";
import { FC, useMemo } from "react";
import { styled } from "@/stitches.config";
import { useSelectedLayoutSegment } from "next/navigation";

type LNBLinkProps = Omit<TNav, "path"> & { path: string | string[] };

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
    if (segment && typeof path === "string") {
      return path.split("/")[1] === segment;
    } else if (segment && Array.isArray(path)) {
      return path.includes(`/${segment}`);
    }
    return false;
  }, [segment, path]);
  const href = useMemo(() => {
    if (Array.isArray(path)) {
      return typeof path[0] === "string" ? path[0] : "";
    }
    return path;
  }, [path]);

  return (
    <>
      {isNow ? selectedIcon : icon}
      <LinkContainer asChild isNow={isNow}>
        <Link style={{ flexGrow: "1" }} href={href}>
          {title}
        </Link>
      </LinkContainer>
    </>
  );
};

export default LNBLink;
