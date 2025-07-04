"use client";
import { QueryTabBox } from "@/app/(afterLogin)/search/_component/Common.style";
import Tab from "@/app/(afterLogin)/_component/Tab";
import { type TF } from "@typings/search";
import { queryIntoTxt } from "@constants/search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { getQueryStr, handleChangeTabVal } from "@utils/search";

const QueryTab = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryObj = useMemo(() => {
    return getQueryStr(searchParams);
  }, [searchParams]);
  const handleChangeCB = useCallback(
    handleChangeTabVal(router, queryObj, pathname),
    [pathname, router, queryObj]
  );
  return (
    <QueryTabBox>
      <Tab<TF>
        tabs={queryIntoTxt}
        value={queryObj.f}
        handleChange={handleChangeCB}
      />
    </QueryTabBox>
  );
};

export default QueryTab;
