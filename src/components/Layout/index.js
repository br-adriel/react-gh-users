import Header from '../Header';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';

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
        <p>Not found</p>
      )}
    </S.WrapperLayout>
  );
};

export default Layout;
