import { type ReactNode } from "react";
import { Box, Flex } from "@radix-ui/themes";
import Logo from "./Logo";
import LNB from "./LNB";
import BriefUserInfo from "./BriefUserInfo";
import LeftForm from "./LeftForm";
import Trends from "../explore/_component/Trends";
import LeftInfo from "@/app/(afterLogin)/_component/LeftInfo";

const AfterLoginLayout = ({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) => {
  return (
    <Flex
      direction={"row"}
      align={"stretch"}
      style={{ width: "100%", height: "100dvh", position: "relative" }}
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
                <BriefUserInfo />
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
              height: "fit-content",
            }}
          >
            <main>{children}</main>
          </Box>
          <LeftInfo />
        </Flex>
      </Flex>
      {modal}
    </Flex>
  );
};

export default AfterLoginLayout;
