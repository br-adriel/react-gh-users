import Header from '../Header';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';
import UserNotFound from '../UserNotFound';

const Layout = ({ children }) => {
  const { githubState } = useGithub();
  return (
    <S.WrapperLayout>
      <Header />
      {githubState.hasUser ? (
        githubState.loading ? (
          <p>Loading...</p>
        ) : (
          children
        )
      ) : (
        <UserNotFound />
      )}
    </S.WrapperLayout>
  );
};

export default Layout;
