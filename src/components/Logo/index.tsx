import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import { useTranslation } from 'react-i18next';

import { LogoStyles } from './styles';

import { Languages } from '../../constants/languages';

const Logo: React.FC = () => {
  const { i18n } = useTranslation();
  const language = i18n.language; // Detects language

  const logoContent =
    language === Languages.EN ? (
      <LogoStyles>
        CHECK IT <FontAwesomeIcon icon={faCheckCircle} />
        FF!
      </LogoStyles>
    ) : (
      <LogoStyles>
        C<FontAwesomeIcon icon={faCheckCircle} />
        CHEZ-LE!
      </LogoStyles>
    );

  return logoContent;
};

export default Logo;
