import Trends from "@/app/(afterLogin)/explore/_component/Trends";
import SearchForm from "@/app/(afterLogin)/explore/_component/SearchForm";
import { ExplorePageBox } from "@/app/(afterLogin)/explore/_component/Common.style";
export default function Page() {
  console.log("search");
  return (
    <ExplorePageBox>
      <SearchForm />
      <Trends />
    </ExplorePageBox>
  );
}
