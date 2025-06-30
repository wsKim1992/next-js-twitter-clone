"use client";

import { Flex, Box, Container } from "@radix-ui/themes";
import { styled } from "@/stitches.config";

export const ProfileBox = styled(Flex, {
  width: "100%",
  flexDirection: "row",
  gap: "10px",
  height: "fit-content",
  padding: "10px",
  boxSizing: "border-box",
  flex: "1",
});

export const ProfileImg = styled(Box, {
  width: "135px",
  height: "135px",
  borderRadius: "100%",
  overflow: "hidden",
  objectFit: "cover",
  flexGrow: "0",
  flexShrink: "0",
  flexBasis: "auto",
});

export const ProfileContent = styled(Flex, {
  flex: "1",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  ".text-box": {
    display: "flex",
    flexDirection: "column",
    gap: "5.5px",
    ".username": {
      fontSize: "15.5px",
      fontWeight: "700",
    },
    ".nickname": {
      fontSize: "13.5px",
      fontWeight: "400",
    },
  },
  ".btn": {
    cursor: "pointer",
    padding: "10px",
    borderRadius: "15.5px",
    fontSize: "13.5px",
    fontWeight: "500",
    color: "#fff",
    background: "black",
  },
});

export const Layout = styled(Container, {
  width: "100%",
  height: "fit-content",
  background: "#fff",
});

export const HeaderBox = styled(Flex, {
  width: "100%",
  height: "fit-content",
  flexDirection: "row",
  padding: "10px",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  gap: "10px",
  ".icon-btn": {
    width: "20px",
    height: "20px",
    cursor: "pointer",
    background: "transparent",
    borderRadius: "100%",
    transition: "background 0.55s",
    "&:hover": {
      background: "gray",
      ".icon": {
        color: "#fff",
      },
    },
    ".icon": {
      display: "block",
      width: "inherit",
      height: "inherit",
      color: "gray",
    },
  },
});
