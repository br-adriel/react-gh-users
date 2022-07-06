import styled from 'styled-components';

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

export const StatItem = styled.div`
  width: 100%;
  padding: 8px;
  background: ${({ theme }) => theme.bgAlt};
  border-radius: 5px;
  box-shadow: 0 0 2px ${({ theme }) => theme.accent};
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
