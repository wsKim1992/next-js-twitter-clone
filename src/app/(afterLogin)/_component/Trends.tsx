"use client";
import { Box } from "@radix-ui/themes";
import { styled } from "@/stitches.config";
import Trend from "./Trend";
import { Title } from "@/app/(afterLogin)/_component/Common.style";

const TrendsBox = styled(Box, {
  width: "inherit",
  minHeight: "100dvh",
  backgroundColor: "#f7f9f9",
  borderRadius: "16px",
  marginTop: "12px",
});

const Trends = () => {
  return (
    <TrendsBox>
      <Title>나를 위한 트렌드</Title>
      {Array.from({ length: 8 }).map((_, idx) => (
        <Trend
          key={`${idx}`}
          title="실시간 트랜드"
          name="제로초"
          postNum={1234}
        />
      ))}
    </TrendsBox>
  );
};

export default Trends;
