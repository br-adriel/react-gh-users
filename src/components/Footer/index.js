import React from 'react';
import { Github, Linkedin } from 'react-bootstrap-icons';
import * as S from './styled';

const Footer = () => {
  return (
    <S.Footer>
      <p>Adriel Faria, {new Date().getFullYear()}</p>
      <S.Icons>
        <a
          href='https://github.com/br-adriel'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Github />
        </a>
        <a
          href='https://linkedin.com/in/adriel-fsantos/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Linkedin />
        </a>
      </S.Icons>
    </S.Footer>
  );
};

export default Footer;
