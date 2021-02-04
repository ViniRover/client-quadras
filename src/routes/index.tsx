import React from 'react';
import { Switch } from 'react-router-dom';

import SignUpClient from '../pages/SignUpClient';

import Route from './Routes';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignUpClient} />
    </Switch>
  );
};

export default Routes;
