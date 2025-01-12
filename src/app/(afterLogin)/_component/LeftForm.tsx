"use client";
import { TextField } from "@radix-ui/themes";
import { FormBox, StyledTextField, FormContainer } from "./Common.style";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const LeftForm = () => {
  return (
    <FormContainer>
      <FormBox>
        <StyledTextField placeholder="검색어를 입력해 주세요.">
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </StyledTextField>
      </FormBox>
    </FormContainer>
  );
};

export default LeftForm;
