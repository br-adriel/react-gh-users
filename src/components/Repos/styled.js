import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';

export const WrapperTabs = styled(Tabs)`
  font-size: 12px;
  width: 100%;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 0 4px;
  display: flex;
  gap: 10px;
  margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
  cursor: pointer;
  border-radius: 4px 4px 0 0;
  border: 1px solid #ccc;
  padding: 10px;
  user-select: none;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-bottom: 1px solid #fff;
  }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  padding: 8px;
  border: 1px #ccc solid;
  border-radius: 2px;

  &.is-selected {
    display: block;
    margin-top: -1px;
  }
`;

WrapperTabPanel.tabsRole = 'TabPanel';
