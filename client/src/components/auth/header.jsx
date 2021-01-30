
import React from 'react';
import {withRouter} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const classes = useStyles();

  const handleSubmit = () => {
      if(props.name === 'Login'){
          props.history.push('/')
      }
      else{
          props.history.push('/register')
      }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}> NanoTech </Typography>
          <Button color="inherit" onClick={handleSubmit}>{props.name}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(Header);