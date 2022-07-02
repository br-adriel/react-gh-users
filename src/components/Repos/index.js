import * as S from './styled';

const Repos = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>panel repositories</S.WrapperTabPanel>
      <S.WrapperTabPanel>panel starred</S.WrapperTabPanel>
    </S.WrapperTabs>
  );
};

export default Repos;
