import { Button } from "@radix-ui/themes";
import { styled } from "@/stitches.config";

const StyledButton = styled(Button, {
  background: "#1d9bf0",
  borderRadius: "26px",
  height: "52px",
  width: "100%",
  fontSize: "17px",
  fontWeight: "400",
  margin: "16px 0px",
  "&:hover": {
    background: "rgb(26, 140, 216)",
  },
});

const UploadButton = () => {
  return <StyledButton>게시하기</StyledButton>;
};

export default UploadButton;
