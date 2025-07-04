"use client";
import { StyledTextField } from "@/app/(afterLogin)/_component/Common.style";
import { TextField } from "@radix-ui/themes";
import {
  FormBox,
  BackIconBtn,
} from "@/app/(afterLogin)/search/_component/Common.style";
import { MagnifyingGlassIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import { type FC, type FormEvent, useCallback, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getQueryStr } from "@utils/search";
import { handleChangeFormText, setTextQS } from "@utils/search";

type FormProps = {
  queryText?: string;
};

const Form: FC<FormProps> = () => {
  const [text, setText] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryObj = useMemo(() => {
    return getQueryStr(searchParams);
  }, [searchParams]);
  const handleChangeText = useCallback(handleChangeFormText({ setText }), [
    setText,
  ]);
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setTextQS(router, queryObj, pathname, text);
  };

  return (
    <FormBox asChild>
      <form onSubmit={handleSubmit}>
        <BackIconBtn>
          <ArrowLeftIcon className="icon" width={20} height={20} />
        </BackIconBtn>
        <StyledTextField
          onChange={handleChangeText}
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
