import React, { useState } from 'react';
import Button from '../button/Button';
import styles from "./search.module.scss";

const Search = ({ placeholder, onSearch }) => {
  const [searchItem, setSearchItem] = useState('');

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchItem}
              onChange={handleChange}
              className={styles.inputFieldContainer}
      />
      <Button type="submit" buttonName="Search" customClass={styles.buttonStyle}/>    </form>
  );
};

export default Search;
