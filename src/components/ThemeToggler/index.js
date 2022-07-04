import { useEffect } from 'react';
import { BrightnessHigh, Moon } from 'react-bootstrap-icons';
import * as S from './styled';

const ThemeToggler = ({ togglerFunc, current }) => {
  const icons = {
    light: <BrightnessHigh />,
    dark: <Moon />,
  };
  return <S.Button onClick={togglerFunc}>{icons[current]}</S.Button>;
};

export default ThemeToggler;
