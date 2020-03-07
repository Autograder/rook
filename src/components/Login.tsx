import React from 'react';

export default class Login extends React.Component {
  webName = "autograder.";
  webTitle = (
    <div className="App-header">
        <div className="App-header">{this.webName}</div>
    </div>
  );
  loginBox = (
    <div className="App-login">
      <form name="login">
      Username<input type="text" name="userid"/>
      <br/>
      Password<input type="password" name="pswrd"/>
      <br/>
      <input type="button" value="Login"/>
      <input type="reset" value="Cancel"/>
      </form>
    </div>
  );

  render() {
    return <div>
      {this.webTitle}
      {this.loginBox}
    </div>
  }
}
