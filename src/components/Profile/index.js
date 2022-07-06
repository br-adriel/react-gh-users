import UserDataPanel from '../UserDataPanel';
import UserInfo from '../UserInfo';
import * as S from './styled';

const Profile = () => {
  return (
    <S.Wrapper>
      <UserInfo />
      <UserDataPanel />
    </S.Wrapper>
  );
};

export default Profile;
