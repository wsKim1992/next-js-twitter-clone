"use client";
import { useHomeStore } from "@stores/home";
import { Container, Box } from "@radix-ui/themes";
import { isEqual } from "lodash";
import SingleImage from "./Image";
import { useStoreWithEqualityFn } from "zustand/traditional";

const Images = () => {
  const imgs = useStoreWithEqualityFn(
    useHomeStore,
    (state) => state.postForm.imgs,
    isEqual
  );
  return (
    <Container
      style={{ width: "100%", height: "fit-content", overflowX: "auto" }}
    >
      <Box style={{ minWidth: "100%", whiteSpace: "nowrap" }}>
        {imgs &&
          imgs.map((img, idx) => (
            <SingleImage key={`${idx}`} src={img} idx={idx} />
          ))}
      </Box>
    </Container>
  );
};

export default Images;
