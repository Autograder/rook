import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Instructions from './components/Instructions';
import Reset from './components/Reset';
import QueuePage from './components/QueuePage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={Login}>
          <Redirect to="/login" />
      </Route>
      <Route path="/login" exact component={Login} />
      <Route path="/instructions" exact component={Instructions} />
      <Route path="/reset" exact component={Reset} />
      <Route path="/queue" exact component={QueuePage} />
    </Switch>
  );
}

export default Routes;
