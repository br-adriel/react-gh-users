import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalCss = createGlobalStyle`
  body {
    font-family: 'Barlow', sans-serif;
    min-height: 100vh;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
`;
