"use client";
import { Box, Button } from "@radix-ui/themes";
import { styled } from "@/stitches.config";

export const LayoutContainer = styled(Box, {
  width: "inherit",
  minHeight: "100dvh",
  background: "#fff",
  height: "auto",
});

export const Editor = styled(Box, {
  width: "512px",
  height: "fit-content",
  fontSize: "15px",
  fontWeight: "400",
  overflowWrap: "break-word",
  padding: "8px",
  boxSizing: "border-box",
  "&:focus": {
    outline: "none",
  },
});

export const IconBtn = styled(Button, {
  width: "30px",
  height: "30px",
  display: "block",
  background: "transparent",
  padding: "0px",
  borderRadius: "100%",
  overflow: "hidden",
});

export const IconWrapper = styled(Box, {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.2s background-color",
  backgroundColor: "rgb(29, 155, 240, 0.01)",
  "&:hover": {
    backgroundColor: "rgb(29, 155, 240, 0.1)",
  },
  cursor: "pointer",
  svg: {
    width: "20px",
    height: "20px",
    fill: "#1d9bf0",
  },
});
