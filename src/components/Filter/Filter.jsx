import React, { useEffect, useState } from 'react';
import { ClearBtn, Cross, Form, Input, SearchBtn } from './Filter.styled';
import sprite from '../../images/sprite.svg';
import { toast } from 'react-toastify';

const Filter = ({ onSubmitCarsForm }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!search) onSubmitCarsForm(search);
  }, [onSubmitCarsForm, search]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = search.toLowerCase().trim();

    onSubmitCarsForm(searchQuery);
    if (searchQuery === '') {
      toast.warning('Please enter something');
      return;
    }
  };

  const handleChange = e => {
    const searchQuery = e.target.value;
    if (!searchQuery) {
      onSubmitCarsForm(searchQuery);
    }
    setSearch(searchQuery);
  };

  const onClickClear = () => {
    setSearch('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="search"
        type="text"
        id="searchQuery"
        value={search}
        placeholder="Search"
        onChange={handleChange}
      />

      <SearchBtn type="submit" search={search}>
        Search
      </SearchBtn>
      {search && (
        <ClearBtn type="button" onClick={onClickClear}>
          <Cross width="20" height="20">
            <use href={`${sprite}#cross`} />
          </Cross>
        </ClearBtn>
      )}
    </Form>
  );
};

export default Filter;
