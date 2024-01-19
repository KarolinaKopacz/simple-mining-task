import { IoSearch } from 'react-icons/io5';
type SearchInputProps = {
  searchValue: (value: string) => void;
};

const SearchInput = ({ searchValue }: SearchInputProps) => {
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    searchValue(event.currentTarget.value);
  };

  return (
    <div className="search-input">
      <IoSearch className="search-icon" />
      <input onChange={onChange}></input>
    </div>
  );
};

export default SearchInput;
