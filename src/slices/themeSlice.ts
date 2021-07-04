import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Themes } from '../constants/themes';

const initialState: IThemeState = {
  theme: Themes.LightSide,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      const newTheme = action.payload;
      state.theme = newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
