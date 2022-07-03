import Layout from './components/Layout';
import Profile from './components/Profile';
import Repos from './components/Repos';
import GithubProvider from './providers/GithubProvider';

const App = () => {
  return (
    <main>
      <GithubProvider>
        <Layout>
          <Profile />
          <Repos />
        </Layout>
      </GithubProvider>
    </main>
  );
};

export default App;
