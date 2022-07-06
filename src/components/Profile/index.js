import useGithub from '../../hooks/github-hooks';
import * as S from './styled';
import { Github, Globe, Twitter, Envelope } from 'react-bootstrap-icons';
import UserDataPanel from '../UserDataPanel';

const Profile = () => {
  const { githubState } = useGithub();
  return (
    <S.Wrapper>
      <S.BasicInfo>
        <S.UserInfo>
          <img src={githubState.user.avatar_url} alt='User profile' />
          <div>
            {githubState.user.name ? <h2>{githubState.user.name}</h2> : null}
            <p>{githubState.user.login}</p>
          </div>
        </S.UserInfo>
        <S.UserLinks>
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
        </S.UserLinks>
      </S.BasicInfo>
      <UserDataPanel />
    </S.Wrapper>
  );
};

export default Profile;
