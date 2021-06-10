import styled from 'styled-components';

import { colours } from '../../constants/colours';

export const LoaderContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
`;

export const EllipsisContainer = styled.div`
  width: 20%;
  aspect-ratio: 1/1;
  max-width: 200px;
  display: inline-block;
  overflow: hidden;
  background: ${colours.white};
`;

export const Ellipsis = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;

export const Dot = styled.div`
  position: absolute;
  width: 20%;
  height: 20%;
  border-radius: 50%;
  transform: translate(200%, 200%) scale(1);
  background: ${colours.purple};
  animation: translation 2s infinite cubic-bezier(0, 0.5, 0.5, 1);
  box-sizing: content-box;

  &:nth-child(1) {
    background: ${colours.blue};
    transform: translate(370%, 200%) scale(1);
    animation: size 0.5s infinite cubic-bezier(0, 0.5, 0.5, 1),
      color 2s infinite step-start;
  }

  &:nth-child(2) {
    animation-delay: -0.5s;
    background: ${colours.purple};
  }

  &:nth-child(3) {
    animation-delay: -1s;
    background: ${colours.blue};
  }

  &:nth-child(4) {
    animation-delay: -1.5s;
    background: ${colours.lightGreen};
  }

  &:nth-child(5) {
    animation-delay: -2s;
    background: ${colours.green};
  }

  @keyframes translation {
    0% {
      transform: translate(30%, 200%) scale(0);
    }
    25% {
      transform: translate(30%, 200%) scale(0);
    }
    50% {
      transform: translate(30%, 200%) scale(1);
    }
    75% {
      transform: translate(200%, 200%) scale(1);
    }
    100% {
      transform: translate(370%, 200%) scale(1);
    }
  }
  @keyframes size {
    0% {
      transform: translate(370%, 200%) scale(1);
    }
    100% {
      transform: translate(370%, 200%) scale(0);
    }
  }
  @keyframes color {
    0% {
      background: ${colours.purple};
    }
    25% {
      background: ${colours.green};
    }
    50% {
      background: ${colours.lightGreen};
    }
    75% {
      background: ${colours.lightGreen};
    }
    100% {
      background: ${colours.purple};
    }
  }
`;
