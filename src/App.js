import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import Profile from './components/Profile';
import { darkTheme, lightTheme } from './components/Theme';
import ThemeToggler from './components/ThemeToggler';
import { GlobalCss } from './global/GlobalCss';
import GithubProvider from './providers/GithubProvider';

const App = () => {
  const [theme, setTheme] = useState('light');
  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalCss />
      <ThemeToggler togglerFunc={changeTheme} current={theme} />
      <GithubProvider>
        <Layout>
          <Profile />
        </Layout>
      </GithubProvider>
    </ThemeProvider>
  );
};

export default App;
