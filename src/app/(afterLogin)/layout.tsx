import { type ReactNode } from "react";
import { Box, Flex } from "@radix-ui/themes";

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
            style={{ width: "275px", background: "orange", height: "100dvh" }}
          >
            <section></section>
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
            <section></section>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AfterLoginLayout;
