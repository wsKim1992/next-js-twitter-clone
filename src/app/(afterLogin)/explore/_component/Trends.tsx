"use client";
import Trend from "./Trend";
import {
  TrendsBox,
  Title,
} from "@/app/(afterLogin)/explore/_component/Common.style";
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
