import React from 'react';
import * as S from './styled';

const Header = () => {
  return (
    <header>
      <S.SearchForm>
        <label htmlFor='searchInput'>Search</label>
        <input type='search' name='search' id='searchInput' />
        <button type='submit'>Search</button>
      </S.SearchForm>
    </header>
  );
};

export default Header;
