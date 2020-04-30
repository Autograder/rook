import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import Login from './components/Login';
import Instructions from './components/Instructions';
import Reset from './components/Reset';
import QueuePage from './components/QueuePage';
import StudentPage from './components/StudentPage'
import CreateCourse from './components/CreateCourse';
import ManageCourse from './components/ManageCourse';
=======
import Login from './routes/Login';
import Instructions from './routes/Instructions';
import Reset from './routes/Reset';
import QueuePage from './routes/QueuePage';
import StudentPage from './routes/StudentPage'
import CreateCourse from './routes/CreateCourse';
import HallOfFame from './routes/HallOfFame';
import TicketHistory from './routes/TicketHistory';
>>>>>>> fc5154b48d9d554bf5fd17a2f25a2f35fee3e9c1

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
<<<<<<< HEAD
      <Route path='/managecourse' exact component={ManageCourse}/>
=======
      <Route path='/secret/halloffame' exact component={HallOfFame}/>
      <Route path="/tickethistory" exact component={TicketHistory}/>
>>>>>>> fc5154b48d9d554bf5fd17a2f25a2f35fee3e9c1
    </Switch>
  );
}

export default Routes;
