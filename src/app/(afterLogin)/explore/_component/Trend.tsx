"use client";
import { type TTrends } from "@typings/mainLayout";
import Link from "next/link";
import { useMemo, type FC } from "react";

import {
  TrendBox,
  TextBox,
} from "@/app/(afterLogin)/explore/_component/Common.style";

type TrendProps = TTrends;

const Trend: FC<TrendProps> = ({ title, name, postNum }) => {
  const queryStr = useMemo(() => {
    return new URLSearchParams({ queryText: name }).toString();
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
