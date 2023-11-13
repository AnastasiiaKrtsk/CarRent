import React from 'react';
import { LoadWrapper, Loadmore } from './LoadmoreBtn.styled';

const LoadmoreBtn = ({ onClick }) => {
  return (
    <LoadWrapper>
      <Loadmore type="button" onClick={onClick}>
        Load more cars
      </Loadmore>
    </LoadWrapper>
  );
};

export default LoadmoreBtn;
