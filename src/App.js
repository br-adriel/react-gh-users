import Layout from './components/Layout';

const App = () => {
  return (
    <main>
      <Layout>
        <div>
          <img
            src='https://avatars.githubusercontent.com/u/49590887?v=4'
            alt='User profile'
          />
          <h1>User name</h1>
          <h3>username</h3>
          <span>benits</span>
          <div>
            <h4>followers</h4>
            <span>4</span>
          </div>
          <div>
            <h4>starred</h4>
            <span>4</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>4</span>
          </div>
        </div>
        <div>repos</div>
        <div>stars</div>
      </Layout>
    </main>
  );
};

export default App;
