"use client";

import { Flex, IconButton, Box } from "@radix-ui/themes";
import { styled } from "@/stitches.config";

export const TextContentBox = styled(Box, {
  width: "350px",
  height: "100dvh",
  background: "#fff",
  overflowY: "auto",
});

export const ImageBox = styled(Flex, {
  flex: "1",
  height: "inherit",
});

export const StyledImageElem = styled(Box, {
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export const ModalBox = styled(Flex, {
  flexDirection: "row",
  position: "fixed",
  left: "0px",
  top: "0px",
  width: "100dvw",
  height: "100dvh",
  background: "#000",
});

export const StyledIconButton = styled(IconButton, {
  position: "absolute",
  left: "20px",
  top: "20px",
  width: "40px",
  height: "40px",
  background: "transparent",
  ".icon": {
    color: "#fff",
    fontSize: "19.5px",
  },
  cursor: "pointer",
});
