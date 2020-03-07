import React from 'react';
import './style/Login.css';
import FormControl from '@material-ui/core/FormControl';

export default class Login extends React.Component {
  webName = "autograder.";
  webTitle = (
    <div className="wrapper">
        <h1 className="title"> {this.webName} </h1>
    </div>
  );
  
  loginBox = (
    <form className="loginForm" noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
    </form>
  );

  render() {
    return <div>
      {this.webTitle}
      {this.loginBox}
    </div>
  };
}