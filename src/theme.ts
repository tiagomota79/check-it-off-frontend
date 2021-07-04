import { DefaultTheme } from 'styled-components';
import { colours } from './constants/colours';

export const lightSide: DefaultTheme = {
  body: colours.white,
  text: colours.black,
  listBackground: colours.offWhite,
};

export const darkSide: DefaultTheme = {
  body: colours.black,
  text: colours.white,
  listBackground: colours.darkGrey,
};
