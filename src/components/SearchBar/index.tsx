import React from "react";
import SearchIcon from "../../images/SearchIcon";

export interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  handleSearch,
}) => {
  return (
    <div className="flex border border-grey flex-row justify-between p-2 rounded-lg items-center gap-2 bg-white ">
      <input
        value={value ?? ""}
        className="border-none w-full outline-none"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e);
        }}
      />

      <button onClick={handleSearch} type="submit">
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
