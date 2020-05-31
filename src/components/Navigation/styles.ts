import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  transform: translateY(-50%);
  z-index: 9999999999;
  top: 50%;
  right: 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }

  li a {
    background: rgba(0, 0, 0, 0.2);
    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 8px;
    right: -8px;
    transition: all 0.5s ease;
    position: relative;
    display: block;

    svg {
      display: block;
    }
  }

  li a:hover,
  li .active {
    background: #0ac5a8;
    right: 0;
  }

  li:last-child a {
    margin-bottom: 0;
  }

  li a {
    color: #fff;
  }

  li:hover a {
    color: #222;
  }
`;
