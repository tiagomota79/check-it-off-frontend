import React from 'react';

import LanguageSwitch from '../LanguageSwitch';
import Logo from '../Logo';

import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div />
      <Logo />
      <LanguageSwitch />
    </HeaderContainer>
  );
};

export default Header;
