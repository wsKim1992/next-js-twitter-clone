import { styled } from "@/stitches.config";
import { Box, Flex } from "@radix-ui/themes";

export const PostBox = styled(Box, {
  width: "100%",
  height: "auto",
});

export const FormBox = styled(Flex, {
  flexDirection: "row",
  gap: "10px",
  width: "inherit",
  padding: "10px",
  boxSizing: "border-box",
  height: "fit-content",
});

export const ProfileImgBox = styled(Box, {
  width: "40px",
  height: "40px",
  borderRadius: "100%",
  overflow: "hidden",
});

export const EditorBox = styled(Box, {
  flex: "1",
  minWidth: "0px",
});
export const ImgElem = styled(Box, {
  width: "inherit",
  height: "inherit",
  objectFit: "cover",
});
