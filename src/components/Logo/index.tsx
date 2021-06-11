import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle } from '@styled-icons/heroicons-outline';

import { LogoStyles } from './styles';

import { Languages } from '../../constants/languages';

const Logo: React.FC = () => {
  const { i18n } = useTranslation();
  const language = i18n.language; // Detects language

  const logoContent =
    language === Languages.EN ? (
      <LogoStyles>
        CHECK IT <CheckCircle size='40' />
        FF!
      </LogoStyles>
    ) : (
      <LogoStyles>
        C<CheckCircle size='40' />
        CHEZ-LE!
      </LogoStyles>
    );

  return logoContent;
};

export default Logo;
