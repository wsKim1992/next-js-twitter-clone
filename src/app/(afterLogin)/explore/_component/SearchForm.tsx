"use client";

import { StyledTextField } from "@/app/(afterLogin)/_component/Common.style";

import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { SearchFormBox } from "@/app/(afterLogin)/explore/_component/Common.style";

const SearchForm = () => {
  return (
    <SearchFormBox
      as={"form"}
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
    >
      <StyledTextField placeholder="검색어를 입력해 주세요.">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </StyledTextField>
    </SearchFormBox>
  );
};

export default SearchForm;
