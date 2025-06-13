import { Box } from "@radix-ui/themes";
import { styled } from "@/stitches.config";

const EmojiBox = styled(Box, {
  position: "absolute",
  top: "30px",
  left: "0px",
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "10px",
  gridAutoRows: "25px",
  width: "fit-content",
  height: "220px",
  overflow: "hidden",
  overflowY: "auto",
  background: "black",
  borderRadius: "15.5px",
  padding: "10px",
  boxSizing: "border-box",
  zIndex: "1000",
  "& .imoji": {
    width: "25px",
    height: "25px",
    cursor: "pointer",
  },
});

const Emojis = () => {
  return (
    <EmojiBox>
      <Box className="imoji">😀</Box>
      <Box className="imoji">😀</Box>
      <Box className="imoji">😀</Box>
      <Box className="imoji">😀</Box>
      <Box className="imoji">😀</Box>
      <Box className="imoji">😀</Box>
      <Box className="imoji">😀</Box>
      <Box className="imoji">😀</Box>
      <Box className="imoji">😀</Box>
      <Box className="imoji">😀</Box>
      <Box className="imoji">😀</Box>
    </EmojiBox>
  );
};

export default Emojis;
