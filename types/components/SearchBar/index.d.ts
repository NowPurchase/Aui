import React from "react";
import "./style.scss";
export interface SearchBarProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
}
declare const SearchBar: React.FC<SearchBarProps>;
export default SearchBar;
