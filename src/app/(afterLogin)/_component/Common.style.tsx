import { styled } from "@/stitches.config";
import { Box, TextField } from "@radix-ui/themes";

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
