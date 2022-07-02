import * as S from './styled';

const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage
        src='https://avatars.githubusercontent.com/u/49590887?v=4'
        alt='User profile'
      />
      <S.WrapperInfoUser>
        <div>
          <h1>User name</h1>
          <S.WrapperUsername>
            <h3>username</h3>
            <a
              href='http://github.com/br-adriel'
              target='_blank'
              rel='noreferrer'
            >
              br-adriel
            </a>
          </S.WrapperUsername>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>followers</h4>
            <span>4</span>
          </div>
          <div>
            <h4>starred</h4>
            <span>4</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>4</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
