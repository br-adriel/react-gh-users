import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media screen and (min-width: 768px) {
    & {
      grid-template-columns: 2fr 5fr;
    }
  }
`;

const commonStyle = styled.div`
  width: 100%;
  padding: 8px;
  background: ${({ theme }) => theme.bgAlt};
  border-radius: 5px;
  box-shadow: 0 0 2px ${({ theme }) => theme.accent};
`;

export const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    & {
      position: sticky;
      top: 10px;
    }
  }
`;

export const UserInfo = styled(commonStyle)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  img {
    width: 30%;
    border-radius: 5px;
  }

  h2,
  p {
    padding: 0;
    margin: 0;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin: 0;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    & {
      flex-direction: column;
      gap: 4px;
    }

    img {
      width: 100%;
    }
  }
`;

export const Stats = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media screen and (min-width: 768px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StatItem = styled(commonStyle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  transition: 0.3s color ease, 0.3s box-shadow ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 3px ${({ theme }) => theme.accent};
  }

  p {
    display: inline;
    font-size: 1.15rem;
    padding: 0;
    margin: 0;
    text-align: right;
  }
`;

export const UserLinks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const UserLink = styled.a`
  padding: 8px;
  background: ${({ theme }) => theme.bgAlt};
  border-radius: 5px;
  box-shadow: 0 0 2px ${({ theme }) => theme.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  flex-grow: 1;
  flex-shrink: 1;
  color: ${({ theme }) => theme.text};
  transition: 0.3s box-shadow ease, 0.3s color ease;

  svg {
    font-size: 28px;
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 3px ${({ theme }) => theme.accent};
  }
`;
