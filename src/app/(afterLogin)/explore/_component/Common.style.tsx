"use client";

import { styled } from "@/stitches.config";
import { Box, IconButton, Text } from "@radix-ui/themes";
import { FormBox } from "@/app/(afterLogin)/_component/Common.style";
export const ExplorePageBox = styled(Box, {
  width: "100%",
  height: "fit-content",
});

export const SearchFormBox = styled(FormBox, {
  position: "unset",
});

export const SearchIcon = styled(IconButton, {
  background: "inherit",
  marginLeft: "20px",
  width: "20px",
  height: "20px",
});

export const TrendsBox = styled(Box, {
  width: "inherit",
  minHeight: "100dvh",
  backgroundColor: "#ffff",
  borderRadius: "16px",
  marginTop: "12px",
});

export const Title = styled("h3", {
  fontSize: "20px",
  fontWeight: "bold",
  padding: "12px 16px",
  width: "inherit",
});

export const TrendBox = styled(Box, {
  padding: "12px 16px",
  width: "inherit",
  height: "86px",
  boxSizing: "border-box",
  textDecoration: "none",
});

export const TextBox = styled(Text, {
  display: "block",
  color: "#536471",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  variants: {
    isName: {
      true: {
        fontSize: "15px",
        lineHeight: "20px",
        margin: "2px 0px 4px 0px",
        fontWeight: "bold",
      },
      false: {
        fontSize: "13px",
        lineHeight: "16px",
        fontWeight: "lighter",
      },
    },
  },
  defaultVariants: {
    isName: false,
  },
});
