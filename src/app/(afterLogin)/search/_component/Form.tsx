"use client";
import { StyledTextField } from "@/app/(afterLogin)/_component/Common.style";
import { TextField } from "@radix-ui/themes";
import {
  FormBox,
  BackIconBtn,
} from "@/app/(afterLogin)/search/_component/Common.style";
import { MagnifyingGlassIcon, ArrowLeftIcon } from "@radix-ui/react-icons";

const Form = () => {
  return (
    <FormBox asChild>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
        }}
      >
        <BackIconBtn>
          <ArrowLeftIcon className="icon" width={20} height={20} />
        </BackIconBtn>
        <StyledTextField
          css={{ flex: "1", height: "42px" }}
          placeholder="검색어를 입력해 주세요."
        >
          <TextField.Slot>
            <MagnifyingGlassIcon />
          </TextField.Slot>
        </StyledTextField>
      </form>
    </FormBox>
  );
};

export default Form;
