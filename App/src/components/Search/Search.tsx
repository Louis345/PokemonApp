import React from "react";
import styles from "./Search.module.css";

interface SearchProps {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className={styles.search}
      onChange={onSearch}
      data-testid="search"
    />
  );
};

export default Search;
