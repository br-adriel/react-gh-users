import RepoItem from '../RepoItem';
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
      <S.WrapperTabPanel>
        <RepoItem
          name='repo 1'
          linkToRepo='https://google.com'
          fullName='br-adriel/repo-1'
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>panel starred</S.WrapperTabPanel>
    </S.WrapperTabs>
  );
};

export default Repos;
