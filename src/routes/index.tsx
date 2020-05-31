import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Navigation from '../components/Navigation';

import Dashboard from '../pages/Dashboard';
import Basket from '../pages/Basket';

const Routes: React.FC = () => (
  <HashRouter>
    <Navigation />
    <Route path="/" exact component={Dashboard} />
    <Route path="/basket" component={Basket} />
  </HashRouter>
);

export default Routes;
