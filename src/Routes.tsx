import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Instructions from './components/Instructions';
import Reset from './components/Reset';
import QueuePage from './components/QueuePage';
import StudentPage from './components/StudentPage'
import CreateCourse from './components/CreateCourse';
import HallOfFame from './components/HallOfFame';
import TicketHistory from './components/TicketHistory';

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
      <Route path='/secret/halloffame' exact component={HallOfFame}/>
      <Route path="/tickethistory" exact component={TicketHistory}/>
    </Switch>
  );
}

export default Routes;
