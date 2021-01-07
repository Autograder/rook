import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './routes/Login';
import Instructions from './routes/Instructions';
import ForgotPassword from './routes/ForgotPassword';
import QueuePage from './routes/QueuePage';
import CreateCourse from './routes/CreateCourse';
import HallOfFame from './routes/HallOfFame';
import Profile from './routes/Profile';
import CourseSettings from './routes/CourseSettings';
import TutorCheckoff from './routes/TutorCheckoff';
import StudentCheckoff from './routes/StudentCheckoff';
import Forbidden from './routes/Forbidden';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Login}>
          <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={Login} />
      <Route exact path="/instructions" component={Instructions} />
      <Route exact path="/forgotpassword" component={ForgotPassword} />
      <Route exact path='/secret/halloffame' component={HallOfFame}/>
      <Route exact path="/forbidden" component={Forbidden}/>
      <Route path="/queue/:course_id" component={QueuePage} />
      <Route path="/profile" component={Profile} /> 
      <Route path='/createcourse' component={CreateCourse}/>
      <Route path="/checkoff/:course_id" component={TutorCheckoff}/>
      <Route path="/checkoffHistory/:course_id" component={StudentCheckoff}/>
      <Route path="/coursesettings/:course_id" exact component={CourseSettings}/>
    </Switch>
  );
}

export default Routes;
