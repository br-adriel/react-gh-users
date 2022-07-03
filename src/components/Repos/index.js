import { useEffect, useState } from 'react';
import useGithub from '../../hooks/github-hooks';
import RepoItem from '../RepoItem';
import * as S from './styled';

const Repos = () => {
  const { githubState, getUserRepos } = useGithub();
  const [hasUserToSearchForRepos, setHasUserToSearchForRepos] = useState(false);

  useEffect(() => {
    if (!!githubState.user.login) {
      getUserRepos(githubState.user.login);
    }
    setHasUserToSearchForRepos(githubState.repositories);
  }, [githubState.user.login]);

  return (
    <>
      {hasUserToSearchForRepos ? (
        <S.WrapperTabs
          selectedTabClassName='is-selected'
          selectedTabPanelClassName='is-selected'
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            {githubState.repositories.map((repo) => {
              return (
                <RepoItem
                  key={repo.id}
                  name={repo.name}
                  linkToRepo={repo.html_url}
                  fullName='br-adriel/repo-1'
                />
              );
            })}
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            {githubState.repositories.map((repo) => {
              return (
                <RepoItem
                  key={repo.id}
                  name={repo.name}
                  linkToRepo={repo.html_url}
                  fullName='br-adriel/repo-1'
                />
              );
            })}
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : null}
    </>
  );
};

export default Repos;
