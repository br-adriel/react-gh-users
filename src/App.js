import Layout from './components/Layout';
import Profile from './components/Profile';

const App = () => {
  return (
    <main>
      <Layout>
        <Profile />
        <div>repos</div>
        <div>stars</div>
      </Layout>
    </main>
  );
};

export default App;
