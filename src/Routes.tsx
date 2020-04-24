import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './routes/Login';
import Instructions from './routes/Instructions';
import Reset from './routes/Reset';
import QueuePage from './routes/QueuePage';
import StudentPage from './routes/StudentPage'
import CreateCourse from './routes/CreateCourse';

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
      <Route path="/students" exact component={StudentPage} />
      <Route path='/createcourse' exact component={CreateCourse}/>
    </Switch>
  );
}

export default Routes;
