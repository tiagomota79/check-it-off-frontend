import React from 'react';

import { Dot, Ellipsis, EllipsisContainer, LoaderContainer } from './styles';

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <EllipsisContainer>
        <Ellipsis>
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </Ellipsis>
      </EllipsisContainer>
    </LoaderContainer>
  );
};

export default Loader;
