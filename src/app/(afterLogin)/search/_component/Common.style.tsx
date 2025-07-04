import { Box, Flex, IconButton } from "@radix-ui/themes";
import { styled } from "@/stitches.config";

export const QueryTabBox = styled(Box, {
  width: "100%",
  height: "fit-content",
});

export const SearchMainBox = styled(Flex, {
  width: "100%",
  height: "fit-content",
  overflow: "visible",
  flexDirection: "column",
  justifyContent: "start",
});

export const SearchFormBox = styled(Box, {
  position: "sticky",
  top: "0px",
  left: "0px",
  width: "100%",
  padding: "10px",
});

export const FormBox = styled(Flex, {
  flexDirection: "row",
  gap: "10px",
  justifyContent: "start",
  alignItems: "center",
  width: "100%",
  padding: "6px 0px 12px 0px",
  height: "42px",
  boxSizing: "content-box",
});

export const BackIconBtn = styled(IconButton, {
  width: "20px",
  height: "20px",
  background: "transparent",
  ".icon": {
    color: "black",
    cursor: "pointer",
  },
});
