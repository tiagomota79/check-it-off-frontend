import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import AddList from './components/AddList';
import ToDoLists from './components/ToDoLists';
import Loader from './components/Loader';
import Header from './components/Header';

//Styles
import { GlobalStyle, AppContainer } from './global';
import { lightSide, darkSide } from './theme';
import './fonts.css';

// Utils
import { useAppSelector } from './hooks/hooks';
import { selectTheme } from './slices/themeSlice';
import { Themes } from './constants/themes';

const App: React.FC = () => {
  const selectedTheme = useAppSelector(selectTheme);

  const theme = selectedTheme === Themes.LightSide ? lightSide : darkSide;

  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContainer>
          <Header />
          <AddList />
          <ToDoLists />
        </AppContainer>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
