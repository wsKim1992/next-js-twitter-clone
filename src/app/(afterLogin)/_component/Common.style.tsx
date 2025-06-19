"use client";

import { styled } from "@/stitches.config";
import { Box, TextField, Tabs } from "@radix-ui/themes";

export const MainContainer = styled(Box, {
  width: "600px",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "stretch",
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
