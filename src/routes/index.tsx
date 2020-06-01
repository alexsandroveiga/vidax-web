import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Navigation from '../components/Navigation';

import Dashboard from '../pages/Dashboard';
import Explanation from '../pages/Explanation';
import Chart from '../pages/Chart';
import Form from '../pages/Form';
import Basket from '../pages/Basket';

const Routes: React.FC = () => (
  <HashRouter>
    <Navigation />
    <Route path="/" exact component={Dashboard} />
    <Route path="/explanation" component={Explanation} />
    <Route path="/chart" component={Chart} />
    <Route path="/form" component={Form} />
    <Route path="/basket" component={Basket} />
  </HashRouter>
);

export default Routes;
