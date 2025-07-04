import { type TF, type TQuery } from "@typings/search";
import { type AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { type ChangeEvent, type Dispatch, type SetStateAction } from "react";

const checkF = (val: string | null): val is TF => {
  return val ? ["recent", "popular"].includes(val) : false;
};

const checkQueryText = (val: string | null): val is string => {
  return val ? true : false;
};

export const getQueryStr = (
  searchParams: URLSearchParams | null
): Required<TQuery> => {
  if (searchParams === null) {
    return {
      queryText: "",
      f: "recent",
    };
  }
  const queryText = searchParams.get("queryText");
  const f = searchParams.get("f");
  return {
    queryText: checkQueryText(queryText) ? queryText : "",
    f: checkF(f) ? f : "recent",
  };
};

export const handleChangeTabVal = (
  router: AppRouterInstance,
  queryObj: Required<TQuery>,
  pathname: string | null
) => {
  return (val: string) => {
    if (checkF(val) && pathname) {
      const newSearchParams = new URLSearchParams({ ...queryObj, f: val });
      router.push(`${pathname}?${newSearchParams.toString()}`);
    }
  };
};

export const handleChangeFormText = ({
  setText,
}: {
  setText: Dispatch<SetStateAction<string>>;
}): ((evt: ChangeEvent<HTMLInputElement>) => void) => {
  return (evt: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = evt;
    setText(value);
  };
};

export const setTextQS = (
  router: AppRouterInstance,
  queryObj: Required<TQuery>,
  pathname: string | null,
  text: string
) => {
  if (pathname && checkQueryText(text)) {
    const newSearchParams = new URLSearchParams({
      ...queryObj,
      queryText: text,
    });
    router.push(`${pathname}?${newSearchParams.toString()}`);
  }
};
