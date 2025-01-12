import { type ReactNode } from "react";
import { Box, Flex } from "@radix-ui/themes";
import Logo from "./_component/Logo";
import LNB from "./_component/LNB";
import BriefUserInfo from "./_component/BriefUserInfo";
import { styled } from "@/stitches.config";
import LeftForm from "./_component/LeftForm";

const UserInfoBox = styled(Flex, {
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  height: "66px",
  padding: "12px",
  margin: "12px 0px",
  borderRadius: "50px",
  boxSizing: "border-box",
  cursor: "pointer",
  "&:hover": {
    background: "rgba(15,20,25, 0.1)",
  },
});

const AfterLoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      direction={"row"}
      align={"stretch"}
      style={{ width: "100%", height: "100dvh" }}
    >
      <Flex
        asChild
        direction={"column"}
        align={"end"}
        style={{ flexGrow: "1" }}
      >
        <header>
          <Flex
            asChild
            direction={"column"}
            justify={"between"}
            style={{ width: "275px", height: "100dvh" }}
          >
            <section>
              <Flex
                direction={"column"}
                style={{
                  position: "fixed",
                  width: "inherit",
                  height: "inherit",
                }}
                justify={"between"}
              >
                <Flex
                  direction={"column"}
                  style={{ height: "fit-content", width: "inherit" }}
                >
                  <Logo />
                  <LNB />
                </Flex>
                <UserInfoBox>
                  <BriefUserInfo />
                </UserInfoBox>
              </Flex>
            </section>
          </Flex>
        </header>
      </Flex>
      <Flex
        as={"div"}
        direction={"column"}
        justify={"start"}
        style={{ flexGrow: "1", height: "100dvh" }}
      >
        <Flex
          direction={"row"}
          style={{ width: "990px", height: "100dvh" }}
          justify={"between"}
        >
          <Box
            asChild
            style={{
              width: "600px",
              height: "auto",
              overflow: "hidden",
              overflowY: "auto",
            }}
          >
            <main>{children}</main>
          </Box>
          <Box asChild style={{ width: "350px", height: "100%" }}>
            <section>
              <LeftForm />
            </section>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AfterLoginLayout;
