import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 8px;

  label {
    display: none;
  }

  input,
  button {
    border-radius: 4px;
    padding: 4px 6px;
    font-size: 1rem;
  }

  input {
    border: 1px solid #ccc;
    flex-grow: 1;

    &:focus {
      outline: none;
    }
  }

  button {
    border: none;
    padding: 6px 12px;
    cursor: pointer;
  }
`;
