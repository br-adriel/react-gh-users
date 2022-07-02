import Layout from './components/Layout';
import Profile from './components/Profile';
import Repos from './components/Repos';

const App = () => {
  return (
    <main>
      <Layout>
        <Profile />
        <Repos />
      </Layout>
    </main>
  );
};

export default App;
