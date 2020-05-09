import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './routes/Login';
import Instructions from './routes/Instructions';
import Reset from './routes/Reset';
import QueuePage from './routes/QueuePage';
import StudentPage from './routes/StudentPage'
import CreateCourse from './routes/CreateCourse';
import HallOfFame from './routes/HallOfFame';
import TicketHistory from './routes/TicketHistory';
import ManageCourse from './routes/ManageCourse';

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
      <Route path="/managecourse" exact component={ManageCourse}/>
    </Switch>
  );
}

export default Routes;
