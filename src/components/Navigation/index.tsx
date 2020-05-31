import React from 'react';
import { FiHome, FiGrid } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

const Navigation: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <NavLink exact to="/">
            <FiHome size="28" />
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/basket">
            <FiGrid size="28" />
          </NavLink>
        </li>
        <li>
          <a href="#Grid">
            <FiGrid size="28" />
          </a>
        </li>
        <li>
          <a href="#Grid">
            <FiGrid size="28" />
          </a>
        </li>
        <li>
          <a href="#Grid">
            <FiGrid size="28" />
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Navigation;
