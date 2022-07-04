import { EmojiFrown } from 'react-bootstrap-icons';
import * as S from './styled';

const UserNotFound = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <EmojiFrown />
        <p>User not found</p>
      </S.Content>
    </S.Wrapper>
  );
};

export default UserNotFound;
