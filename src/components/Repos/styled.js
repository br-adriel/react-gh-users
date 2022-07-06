import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';

export const WrapperTabs = styled(Tabs)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
  margin-top: 15px;
`;

export const WrapperTabList = styled(TabList)`
  display: flex;
  list-style-type: none;
  gap: 10px;
  margin: 0;
  padding: 0;
  position: sticky;
  top: 10px;
  z-index: 10;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 2px ${({ theme }) => theme.accent};
  padding: 8px;
  user-select: none;
  font-size: 1.3rem;
  transition: 0.5s all ease;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bgAlt};
  z-index: 10;

  &:hover {
    color: ${({ theme }) => theme.accent};
    flex-grow: 1;
  }

  &:focus {
    outline: none;
  }

  &.is-selected {
    font-weight: 600;
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accentContent};
    flex-grow: 2;
  }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  flex-grow: 1;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0 0 2px ${({ theme }) => theme.accent};

  &.is-selected {
    display: block;
  }
`;

WrapperTabPanel.tabsRole = 'TabPanel';
