import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #ebebeb;

  .content {
    width: 1000px;
    height: 100vh;
    padding: 2rem 0;
    margin: 0 auto;
    text-align: center;

    img {
      height: 400px;
      width: auto;
      margin: 1rem auto 0 auto;
      display: block;
    }

    h1 {
      color: #2c3c5b;
      margin-bottom: 0.5rem;
    }

    span {
      font-size: 13px;
      color: #2c3c5b;
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
