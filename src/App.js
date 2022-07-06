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
    let themeColor = '';
    if (theme === 'light') {
      setTheme('dark');
      themeColor = '#111111';
    } else {
      setTheme('light');
      themeColor = '#fcfdff';
    }
    document
      .querySelector('meta[name="theme-color"')
      .setAttribute('content', themeColor);
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
