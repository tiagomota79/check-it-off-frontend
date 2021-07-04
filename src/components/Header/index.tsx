import React from 'react';

import LanguageSwitch from '../LanguageSwitch';
import Logo from '../Logo';
import ThemeSwitch from '../ThemeSwitch';

import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ThemeSwitch />
      <Logo />
      <LanguageSwitch />
    </HeaderContainer>
  );
};

export default Header;
