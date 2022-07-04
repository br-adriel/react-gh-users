import React, { useState } from 'react';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';

const Header = () => {
  const [usernameForSearch, setUsernameForSearch] = useState('');

  const { getUser } = useGithub();

  const submitGetUser = (e) => {
    e.preventDefault();
    if (!usernameForSearch.length) return;
    return getUser(usernameForSearch);
  };

  return (
    <S.Header>
      <h1>GH Users</h1>
      <S.SearchForm onSubmit={submitGetUser}>
        <label htmlFor='searchInput'>Search</label>
        <input
          type='search'
          name='search'
          id='searchInput'
          value={usernameForSearch}
          onChange={(e) => {
            setUsernameForSearch(e.target.value);
          }}
          required
          minLength='1'
        />
        <button type='submit'>Search</button>
      </S.SearchForm>
    </S.Header>
  );
};

export default Header;
