import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #ebebeb;

  .content {
    width: 1000px;
    height: 100vh;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;

    img {
      width: calc(50% - 1rem);
      height: auto;
    }

    > div {
      width: calc(50% - 1rem);
    }

    span {
      display: block;
      text-align: center;
      color: #2c3c5b;
      font-size: 13px;

      p {
        margin-top: 1rem;

        strong {
          font-weight: 700;
        }

        h4 {
          font-size: 16px;
          font-weight: 700;
        }
      }
    }

    h1 {
      text-align: center;
      color: #2c3c5b;
      font-size: 28px;
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
