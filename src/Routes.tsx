import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './routes/Login';
import Instructions from './routes/Instructions';
import ForgotPassword from './routes/ForgotPassword';
import QueuePage from './routes/QueuePage';
import CreateCourse from './routes/CreateCourse';
import HallOfFame from './routes/HallOfFame';
import TicketHistory from './routes/TicketHistory';
import TicketFeedback from './routes/TicketFeedback';
import TutorCheckoff from './routes/TutorCheckoff';
import StudentCheckoff from './routes/StudentCheckoff';
import Settings from './routes/Settings';
import CourseSettings from './routes/CourseSettings';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={Login}>
          <Redirect to="/login" />
      </Route>
      <Route path="/login" exact component={Login} />
      <Route path="/instructions" exact component={Instructions} />
      <Route path="/forgotpassword" exact component={ForgotPassword} />
      <Route path="/queue" exact component={QueuePage} />
      <Route path='/createcourse' exact component={CreateCourse}/>
      <Route path='/secret/halloffame' exact component={HallOfFame}/>
      <Route path="/tickethistory" exact component={TicketHistory}/>
      <Route path="/ticketfeedback" exact component={TicketFeedback}/>
      <Route path="/checkoff" exact component={TutorCheckoff}/>
      <Route path="/checkoffHistory" exact component={StudentCheckoff}/>
      <Route path="/coursesettings" exact component={CourseSettings}/>
      <Route path="/settings" exact component={Settings}/>
    </Switch>
  );
}

export default Routes;
