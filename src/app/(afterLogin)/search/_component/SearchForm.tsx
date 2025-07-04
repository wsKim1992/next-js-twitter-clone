import { SearchFormBox } from "@/app/(afterLogin)/search/_component/Common.style";
import Form from "@/app/(afterLogin)/search/_component/Form";
import QueryTab from "@/app/(afterLogin)/search/_component/QueryTab";

const SearchForm = () => {
  return (
    <SearchFormBox>
      <Form />
      <QueryTab />
    </SearchFormBox>
  );
};

export default SearchForm;
