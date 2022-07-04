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

  @media screen and (min-width: 768px) {
    input {
      flex-grow: 0;
      width: 40%;
    }
  }

  button {
    border: none;
    padding: 6px 12px;
    cursor: pointer;
  }
`;

export const Header = styled.header`
  background: ${({ theme }) => theme.bgAlt};
  width: 100%;
  box-shadow: 0 0 2px ${({ theme }) => theme.accent};
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 5px;
  align-items: center;
  font-weight: 200;
  text-transform: uppercase;

  h1 {
    font-size: 1.5rem;
    text-align: center;
    white-space: nowrap;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    & {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
