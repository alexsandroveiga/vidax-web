import React from 'react';
import { FiHome, FiGrid } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import { Container, Icon } from './styles';

import Finger from '../../assets/finger.svg';

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
          <NavLink to="/explanation">
            <Icon src={Finger} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/chart">
            <Icon src={Finger} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/form">
            <Icon src={Finger} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/basket">
            <Icon src={Finger} />
          </NavLink>
        </li>
      </ul>
    </Container>
  );
};

export default Navigation;
