import SearchBar from '../SearchBar';
import * as S from './styled';

const Header = () => {
  return (
    <S.Header>
      <h1>GH Users</h1>
      <SearchBar />
    </S.Header>
  );
};

export default Header;
