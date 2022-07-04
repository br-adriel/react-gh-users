import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.accentContent};
  background: ${({ theme }) => theme.accent};
  box-shadow: 0 0 3px ${({ theme }) => theme.accent};
  cursor: pointer;
  position: fixed;
  right: 10px;
  bottom: 15vh;

  svg {
    font-size: 1.2rem;
  }
`;
