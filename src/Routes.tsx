import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Instructions from './components/Instructions';
import Reset from './components/Reset';
import QueuePage from './components/QueuePage';
import StudentPage from './components/StudentPage'
import StaffPage from './components/StaffPage';
import CreateCourse from './components/CreateCourse';
import HallOfFame from './components/HallOfFame';

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
      <Route path="/staff" exact component={StaffPage} />
      <Route path='/createcourse' exact component={CreateCourse}/>
      <Route path='/secret/halloffame' exact component={HallOfFame}/>
    </Switch>
  );
}

export default Routes;
