import UserDataPanel from '../UserDataPanel';
import UserInfo from '../UserInfo';
import * as S from './styled';
import Repos from '../Repos';

const Profile = () => {
  return (
    <S.Wrapper>
      <div>
        <UserInfo />
      </div>
      <div>
        <UserDataPanel />
        <Repos />
      </div>
    </S.Wrapper>
  );
};

export default Profile;
