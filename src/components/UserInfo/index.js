import { Envelope, Github, Globe, Twitter } from 'react-bootstrap-icons';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

const UserInfo = () => {
  const { githubState } = useGithub();
  return (
    <S.UserInfoWrapper>
      <S.UserPhotoWrapper>
        <img src={githubState.user.avatar_url} alt='User profile' />
        <div>
          {githubState.user.name ? <h2>{githubState.user.name}</h2> : null}
          <p>{githubState.user.login}</p>
        </div>
      </S.UserPhotoWrapper>
      <S.UserSocialLinks>
        <S.UserLink
          href={githubState.user.html_url}
          target='_blank'
          rel='noreferrer'
        >
          <Github />
        </S.UserLink>
        {githubState.user.blog ? (
          <S.UserLink
            href={githubState.user.blog}
            target='_blank'
            rel='noreferrer'
          >
            <Globe />
          </S.UserLink>
        ) : null}
        {githubState.user.twitter_username ? (
          <S.UserLink
            href={`https://twitter.com/${githubState.user.twitter_username}`}
            target='_blank'
            rel='noreferrer'
          >
            <Twitter />
          </S.UserLink>
        ) : null}
        {githubState.user.email ? (
          <S.UserLink
            href={`mailto:${githubState.user.email}`}
            target='_blank'
            rel='noreferrer'
          >
            <Envelope />
          </S.UserLink>
        ) : null}
      </S.UserSocialLinks>
    </S.UserInfoWrapper>
  );
};

export default UserInfo;
