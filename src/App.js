import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const useStyles = makeStyles({
  app: {
    display: 'grid',
    placeItems: 'center',    
    backgroundColor: '#dadbd3',
    height: 1500,
    
  },
  app__body: {
    display: 'flex',
    marginTop: -500,
    backgroundColor: '#ededed',
    height: 900,
    width: 1100,
    boxShadow: '-1px 4px 20px -6px rgba(0, 0, 0, 0.75)',

  },
});

function App() {
  const classes = useStyles();
  return (
    // BEM naming convention
    <div className={classes.app}>
      <div className={classes.app__body}>
        <Router>
          <Switch>
            
              <Route path="/rooms/:roomId">
                <Sidebar />
                <Chat />
              </Route>
              <Route path="/">
              </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

