import React, { Suspense } from 'react';

import Loader from './components/Loader';

import './fonts.css';
import { AppContainer } from './styles';

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AppContainer>Content will appear here</AppContainer>
    </Suspense>
  );
};

export default App;
