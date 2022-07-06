import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

const UserDataPanel = () => {
  const { githubState } = useGithub();
  return (
    <div>
      <S.Stats>
        <S.StatItem>
          <span>Followers:</span>
          <p>{githubState.user.followers}</p>
        </S.StatItem>
        <S.StatItem>
          <span>Following:</span>
          <p>{githubState.user.following}</p>
        </S.StatItem>
        <S.StatItem>
          <span>Gists:</span>
          <p>{githubState.user.public_gists}</p>
        </S.StatItem>
        <S.StatItem>
          <span>Repositories:</span>
          <p>{githubState.user.public_repos}</p>
        </S.StatItem>
        <S.StatItem>
          <span>Location:</span>
          <p>{!!githubState.user.location ? githubState.user.location : '-'}</p>
        </S.StatItem>
        <S.StatItem>
          <span>Company:</span>
          <p>{!!githubState.user.company ? githubState.user.company : '-'}</p>
        </S.StatItem>
      </S.Stats>
    </div>
  );
};

export default UserDataPanel;
