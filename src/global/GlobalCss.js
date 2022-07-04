import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalCss = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Barlow', sans-serif;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    
    #root {
      width: 100%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
    }
  }
`;
