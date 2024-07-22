import React, { useState } from "react";
import SearchIcon from "../../images/SearchIcon";
import "./style.scss";

export interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  handleSearch,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <form
      className={`search-container ${isFocused ? "focused" : ""}`}
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
      role="search"
    >
      <input
        value={value ?? ""}
        type="search"
        className="search-input"
        placeholder="Search"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        role="searchbox"
        aria-label="Search"
      />

      <button className="search-button" type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
