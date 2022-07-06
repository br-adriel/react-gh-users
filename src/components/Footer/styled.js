import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  box-shadow: 0 0 2px ${({ theme }) => theme.accent};
  background-color: ${({ theme }) => theme.bgAlt};
  gap: 16px;
  border-radius: 5px;
`;

export const Icons = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  svg {
    font-size: 1.2rem;
  }
`;
