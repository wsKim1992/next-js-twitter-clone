import { type TF, type TQuery } from "@typings/search";
import { type AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
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
  console.log("handle change");
  return (val: string) => {
    console.log({ val });
    if (checkF(val) && pathname) {
      const newSearchParams = new URLSearchParams({ ...queryObj, f: val });
      router.push(`${pathname}?${newSearchParams.toString()}`);
    }
  };
};
