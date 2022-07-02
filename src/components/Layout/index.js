import * as S from './styled';

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <header>HEADER</header>
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;
