import React from 'react';
import Routes from "./Routes";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
// tslint doesn't like this import even though it works...
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

  
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #212228 30%, #393C44 90%)',
  },
  title: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

const App: React.FC = () => {

  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            <Link to="/login">Login</Link>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Routes />
    </div>
  );
  
}

export default App;
