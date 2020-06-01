import styled, { keyframes } from 'styled-components';

import ReadingImage from '../../assets/reading-bg.svg';

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: #fff;

  .content {
    width: 1000px;
    height: 100vh;
    background: url(${ReadingImage}) no-repeat center center;
    background-size: 500px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    padding: 2rem 0;

    h1 {
      font-size: 64px;
      font-weight: 700;
      animation: ${appear} 1s;
    }

    h2 {
      align-self: flex-end;
      width: 100%;
      text-align: center;
      font-size: 32px;
    }
  }

  .colors {
    width: 100%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    display: none;
  }

  .colors > div {
    margin: 0 8px;
    height: 80px;
    width: 100%;
  }

  .color-1 {
    background: #0ac5a8;
  }
  .color-2 {
    background: #2c3c5b;
  }
  .color-3 {
    background: #869cb8;
  }
  .color-4 {
    background: #ebebeb;
  }
  .color-5 {
    background: #f5f5f5;
  }
`;
