"use client";

import { Box } from "@radix-ui/themes";
import { styled } from "@/stitches.config";
import { useCallback, useContext, useMemo, useTransition } from "react";
import { Ctx } from "@/app/(afterLogin)/home/_component/ContentEditable";
import { handleClickImoji } from "@utils/homeForm";

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

const Emoji: React.FC<{ emoji: string }> = ({ emoji }) => {
  const { quillInstance, setShowEmojiBox, tempSelection, setTempSelection } =
    useContext(Ctx);
  const [, startTransition] = useTransition();
  const clickEmojiHandler = useMemo(() => {
    if (quillInstance && tempSelection) {
      return handleClickImoji(quillInstance, tempSelection);
    }
  }, [quillInstance, tempSelection]);
  const handleClick = useCallback(() => {
    if (clickEmojiHandler) {
      clickEmojiHandler(emoji);
    }
    if (setShowEmojiBox) {
      setShowEmojiBox(false);
      startTransition(() => {
        if (setTempSelection) {
          setTempSelection(null);
        }
      });
    }
  }, [clickEmojiHandler, setShowEmojiBox, setTempSelection, emoji]);
  return (
    <Box onClick={handleClick} className="imoji">
      {emoji}
    </Box>
  );
};

const Emojis = () => {
  return (
    <EmojiBox>
      <Emoji emoji={"😀"} />
      <Emoji emoji={"😀"} />
      <Emoji emoji={"😀"} />
      <Emoji emoji={"😀"} />
      <Emoji emoji={"😀"} />
      <Emoji emoji={"😀"} />
    </EmojiBox>
  );
};

export default Emojis;
