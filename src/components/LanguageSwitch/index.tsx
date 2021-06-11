import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from '../../constants/languages';
import { Switcher } from './styles';

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };

  return (
    <Switcher
      onClick={() =>
        changeLanguage(language === Languages.EN ? Languages.FR : Languages.EN)
      }
    >
      {language === Languages.EN ? 'En' : 'Fr'}
    </Switcher>
  );
};

export default LanguageSwitch;
