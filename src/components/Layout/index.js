import Header from '../Header';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';
import UserNotFound from '../UserNotFound';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const { githubState } = useGithub();
  return (
    <>
      <Header />
      <S.Main>
        {githubState.hasUser ? (
          githubState.loading ? (
            <p>Loading...</p>
          ) : (
            children
          )
        ) : (
          <UserNotFound />
        )}
      </S.Main>
      <Footer />
    </>
  );
};

export default Layout;
