"use client";
import { Box } from "@radix-ui/themes";
import { styled } from "@/stitches.config";
import Recommand from "@/app/(afterLogin)/_component/Recommand";

const RecommandsBox = styled(Box, {
  width: "inherit",
  height: "fit-content",
  backgroundColor: "#f7f9f9",
  borderRadius: "16px",
  marginTop: "12px",
});

const Title = styled("h3", {
  fontSize: "20px",
  fontWeight: "bold",
  padding: "12px 16px",
  width: "inherit",
});

const ListBox = styled(Box, {
  width: "100%",
  height: "auto",
});

const RecommandFollow = () => {
  return (
    <RecommandsBox>
      <Title>팔로우 추천</Title>
      <ListBox>
        <Recommand />
        <Recommand />
        <Recommand />
        <Recommand />
        <Recommand />
      </ListBox>
    </RecommandsBox>
  );
};

export default RecommandFollow;
