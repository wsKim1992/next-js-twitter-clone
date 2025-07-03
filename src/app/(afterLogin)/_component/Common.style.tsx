"use client";

import { styled } from "@/stitches.config";
import { Box, TextField, Tabs, Flex } from "@radix-ui/themes";

export const Title = styled("h3", {
  fontSize: "20px",
  fontWeight: "bold",
  padding: "12px 16px",
  width: "inherit",
});

export const RecommandBox = styled(Flex, {
  flexDirection: "row",
  width: "100%",
  padding: "10px",
  boxSizing: "border-box",
  gap: "10px",
  ".profile-img-box": {
    width: "40px",
    height: "40px",
    borderRadius: "100%",
    overflow: "hidden",
    flex: "0 0 40px",
  },
  ".info-box": {
    flex: "1 1 auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: "5.5px",
    ".title": {
      fontSize: "15.5px",
      fontWeight: "700",
      width: "100%",
    },
    "sub-title": {
      fontSize: "13.5px",
      fontWeight: "400",
      width: "100%",
    },
  },
  ".follow-btn": {
    padding: "10px",
    borderRadius: "15.5px",
    fontSize: "13.5px",
    fontWeight: "500",
    color: "#fff",
    background: "black",
  },
});

export const RecommandsBox = styled(Box, {
  width: "inherit",
  height: "fit-content",
  backgroundColor: "#f7f9f9",
  borderRadius: "16px",
  marginTop: "12px",
});

export const PostButtonBox = styled(Flex, {
  width: "100%",
  height: "fit-content",
  flexDirection: "row",
  ".btn-wrapper": {
    flex: "1",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "5.5px",
    ".icon-btn": {
      cursor: "pointer",
      color: "black",
      transition: "background 0.55s",
      borderRadius: "100%",
      background: "transparent",
      "&:hover": {
        background: "rgba(29, 155, 240, 0.55)",
        color: "#fff",
      },
    },
    ".text": {
      fontSize: "15.5px",
      fontWeight: "400",
    },
  },
});

export const PostBox = styled(Flex, {
  width: "100%",
  height: "fit-content",
  flexDirection: "row",
  padding: "10px",
  boxSizing: "border-box",
  borderColor: "#eff3f4",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  gap: "10px",
  cursor: "pointer",
});

export const PostProfileImg = styled(Box, {
  display: "block",
  borderRadius: "100%",
  width: "40px",
  height: "40px",
  overflow: "hidden",
  flexGrow: "0px",
  flexShrink: "0px",
  flexBasis: "40px",
});

export const PostContentBox = styled(Flex, {
  width: "100%",
  height: "fit-content",
  flexDirection: "column",
  justifyContent: "start",
  gap: "10px",
  flex: "1",
});

export const PostTextBox = styled(Box, {
  flex: "0 0 auto",
  height: "fit-content",
});

export const PostUserNameBox = styled(Flex, {
  flexDirection: "row",
  gap: "5.5px",
  ".nickname": {
    fontSize: "15.5px",
    fontWeight: "800",
  },
  ".id": {
    fontSize: "14.5px",
    fontWeight: "400",
  },
  ".time": {
    fontSize: "14.5px",
    fontWeight: "400",
  },
});

export const MainContent = styled(Box, {
  padding: "10px",
  width: "100%",
  height: "fit-content",
  a: {
    width: "100%",
    height: "100%",
    img: {
      width: "100%",
      height: "100%",
      display: "block",
      objectFit: "cover",
    },
  },
});

export const MainContainer = styled(Box, {
  width: "600px",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "stretch",
});

export const PostImageBox = styled(Box, {
  width: "inherit",
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(50%, auto))",
  gridTemplateRows: "repeat(2 ,1fr)",
  gap: "5px",
  height: "350px",
  overflow: "hidden",
  borderRadius: "25px",
  border: "1px solid gray",
});

export const PostImg = styled(Box, {
  display: "block",
  width: "100%",
});

export const PostImgLink = styled(Box, {
  width: "100%",
  height: "100%",
  display: "block",
  overflow: "hidden",
});

export const FormContainer = styled(Box, {
  width: "inherit",
  marginBottom: "60px",
});

export const FormBox = styled(Box, {
  position: "fixed",
  width: "inherit",
  height: "42px",
  marginTop: "6px",
  marginBottom: "12px",
});

export const StyledTextField = styled(TextField.Root, {
  height: "100%",
  borderRadius: "50px",
  background: "#eff3f4",
});
export const CustomTabList = styled(Tabs.List, {
  justifyContent: "space-around",
});
