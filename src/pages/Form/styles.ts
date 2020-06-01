import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #2c3c5b;

  .content {
    width: 1000px;
    height: 100vh;
    margin: 0 auto;
    padding: 2rem 0;
    position: relative;

    > h1 {
      font-size: 24px;
      color: #f5f5f5;
    }

    h6 {
      color: #f5f5f5;
      font-weight: 500;
      font-size: 20px;
      margin-right: 16px;
    }

    header {
      display: flex;
      align-items: center;
      width: auto;
      margin: 1rem auto;
    }

    input {
      height: 40px;
      border-radius: 20px;
      padding: 0 40px;
      display: flex;
      align-items: center;
      border: 0;
      font-size: 13px;
      width: 200px;
    }
  }

  /* Só pra lembrar as cores */
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
