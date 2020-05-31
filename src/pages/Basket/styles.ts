import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #ebebeb;

  .content {
    width: 1000px;
    height: 100vh;
    background: url('https://cdn4.iconfinder.com/data/icons/longico/224/longico-26-512.png')
      no-repeat center center;
    background-size: 300px;
    margin: 0 auto;
    padding: 2rem 0;
    position: relative;

    > div {
      width: auto;
      position: absolute;
      right: 0;
      bottom: 2rem;

      button {
        background: #0ac5a8;
        display: flex;
        height: 60px;
        border-radius: 30px;
        padding: 0 46px;
        align-items: center;
        border: 0;
        color: #2c3c5b;
        font-weight: 500;
        font-size: 18px;
      }

      span {
        padding: 16px 46px 0 46px;
        display: inline-block;
        font-size: 13px;
        font-weight: 500;
      }
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
