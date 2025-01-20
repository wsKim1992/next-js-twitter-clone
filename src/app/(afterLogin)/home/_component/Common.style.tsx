"use client";
import { Box, Button, Container } from "@radix-ui/themes";
import { styled } from "@/stitches.config";

export const LayoutContainer = styled(Box, {
  width: "100%",
  minHeight: "100dvh",
  background: "#fff",
  height: "auto",
});

export const ImageContainer = styled(Container, {
  minWidth: "100%",
  height: "fit-content",
  overflowX: "auto",
  scrollbarWidth: "none", // Firefox
  "-ms-overflow-style": "none", // IE
  "&::-webkit-scrollbar": {
    display: "none", // Webkit 브라우저
  },
});

export const Editor = styled(Box, {
  width: "512px",
  minHeight: "150px",
  height: "fit-content",
  fontSize: "15px",
  fontWeight: "400",
  overflowWrap: "break-word",
  padding: "8px",
  boxSizing: "border-box",
  flexGrow: "1",
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

export const CancelButton = styled(Button, {
  svg: {
    fill: "rgba(255,255,255)",
    width: "25px",
    height: "25px",
  },
  background: "rgba(15, 20, 25, 0.55)",
  width: "35.5px",
  height: "35.5px",
  boxSizing: "border-box",
  borderRadius: "100%",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  transform: "0.2s box-shadow",
  "&:active": {
    boxShadow: "none",
  },
  "&:hover": {
    background: "rgba(15, 20, 25, 0.85)",
  },
  cursor: "pointer",
  position: "absolute",
  top: "5px",
  right: "5px",
  zIndex: "100",
  "&[data-arrow-left]": {
    top: "65%",
    left: "5px",
    marginTop: "-12.5px",
  },
  "&[data-arrow-right]": {
    top: "65%",
    right: "5px",
    marginTop: "-12.5px",
  },
});
