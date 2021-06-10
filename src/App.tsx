import React, { Suspense } from 'react';

// Components
import AddList from './components/AddList';
import ToDoLists from './components/ToDoLists';
import Loader from './components/Loader';
import Header from './components/Header';

//Styles
import './fonts.css';
import { AppContainer } from './styles';

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AppContainer>
        <Header />
        <AddList />
        <ToDoLists />
      </AppContainer>
    </Suspense>
  );
};

export default App;
