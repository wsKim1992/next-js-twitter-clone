"use client";
import { type TTrends } from "@typings/mainLayout";
import { Box, Text } from "@radix-ui/themes";
import Link from "next/link";
import { styled } from "@stitches/react";
import { useMemo, type FC } from "react";

const TrendBox = styled(Box, {
  padding: "12px 16px",
  width: "inherit",
  height: "86px",
  boxSizing: "border-box",
  textDecoration: "none",
});

const TextBox = styled(Text, {
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

type TrendProps = TTrends;

const Trend: FC<TrendProps> = ({ title, name, postNum }) => {
  const queryStr = useMemo(() => {
    return new URLSearchParams({ name }).toString();
  }, [name]);
  return (
    <TrendBox asChild>
      <Link href={`/search?${queryStr}`}>
        <TextBox>{title}</TextBox>
        <TextBox isName>{name}</TextBox>
        <TextBox>{postNum.toLocaleString()}</TextBox>
      </Link>
    </TrendBox>
  );
};

export default Trend;
