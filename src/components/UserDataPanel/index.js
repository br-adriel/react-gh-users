import useGithub from '../../hooks/github-hooks';
import UserDataItem from '../UserDataItem';
import * as S from './styled';

const UserDataPanel = () => {
  const { githubState } = useGithub();
  const userData = [
    {
      title: 'Followers:',
      content: githubState.user.followers,
    },
    {
      title: 'Following:',
      content: githubState.user.following,
    },
    {
      title: 'Gists:',
      content: githubState.user.public_gists,
    },
    {
      title: 'Repositories:',
      content: githubState.user.public_repos,
    },
    {
      title: 'Location:',
      content: !!githubState.user.location ? githubState.user.location : '-',
    },
    {
      title: 'Company:',
      content: !!githubState.user.company ? githubState.user.githubState : '-',
    },
  ];
  return (
    <S.UserDataWrapper>
      {userData.map((item, i) => (
        <UserDataItem title={item.title} content={item.content} key={i} />
      ))}
    </S.UserDataWrapper>
  );
};

export default UserDataPanel;
