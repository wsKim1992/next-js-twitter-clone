"use client";

import {
  ImageBox,
  StyledImageElem,
} from "@/app/(afterLogin)/@modal/[username]/status/[id]/photos/[photoId]/_component/Common.style";

import { faker } from "@faker-js/faker";

const ImageContainer = () => {
  return (
    <ImageBox>
      <StyledImageElem asChild>
        <img src={faker.image.urlLoremFlickr()} alt="image" />
      </StyledImageElem>
    </ImageBox>
  );
};

export default ImageContainer;
