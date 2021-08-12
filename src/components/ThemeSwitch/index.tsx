import React from 'react';
import { Sun, Moon } from '@styled-icons/heroicons-solid';

import { IconsToggleContainer } from './styles';

import { Themes } from '../../constants/themes';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectTheme, toggleTheme } from '../../slices/themeSlice';

const ThemeSwitch: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedTheme = useAppSelector(selectTheme);

  const handleSwitchTheme = () => {
    if (selectedTheme === Themes.LightSide) {
      dispatch(toggleTheme(Themes.DarkSide));
    } else {
      dispatch(toggleTheme(Themes.LightSide));
    }
  };

  return (
    <IconsToggleContainer
      on={selectedTheme === Themes.DarkSide}
      onClick={handleSwitchTheme}
    >
      <Sun size='30' />
      <Moon size='30' />
    </IconsToggleContainer>
  );
};

export default ThemeSwitch;
