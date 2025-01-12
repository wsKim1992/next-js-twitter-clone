/* eslint-disable react/display-name */
import Image from "next/image";
import { Box } from "@radix-ui/themes";
import { memo } from "react";
import Link from "next/link";
import ZLogo from "@public/zlogo.png";
import { styled } from "@/stitches.config";

const StyledLink = styled(Box, {
  width: "50px",
  height: "56px",
  marginTop: "2px",
  overflow: "hidden",
  borderRadius: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    background: "rgba(15,20,25, 0.1)",
  },
});

const Logo = memo(() => {
  return (
    <Box style={{ width: "inherit", height: "fit-content" }}>
      <StyledLink>
        <Link href={"/home"}>
          <Image src={ZLogo} width={40} height={50} alt="logo" />
        </Link>
      </StyledLink>
    </Box>
  );
});

export default Logo;
