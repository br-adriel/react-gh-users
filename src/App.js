import Layout from './components/Layout';
import Profile from './components/Profile';
import Repos from './components/Repos';
import GithubProvider from './providers/GithubProvider';
import { ThemeProvider } from 'styled-components';
import { GlobalCss } from './global/GlobalCss';
import { lightTheme, darkTheme } from './components/Theme';
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');
  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalCss />
      <GithubProvider>
        <Layout>
          <Profile />
          <Repos />
        </Layout>
      </GithubProvider>
    </ThemeProvider>
  );
};

export default App;
