import React from 'react';
import { Switch } from 'react-router-dom';

import SignUp from '../pages/SignUp';

import Route from './Routes';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignUp} />
    </Switch>
  );
};

export default Routes;
