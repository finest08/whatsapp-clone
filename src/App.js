import React, { lazy } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import custom from './theme';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const Login= lazy(() => import('./Login/Login'));

let theme = createMuiTheme(custom);
theme = responsiveFontSizes(theme);

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
// 2.20.50

function App() {
  const classes = useStyles();
  return (
    // BEM naming convention
    <ThemeProvider theme={theme}>
        <CssBaseline>
        <Router>
          <Switch>
          <div className={classes.app}>
            <div className={classes.app__body}>
            <Route path="/rooms/:roomId">
              <Sidebar />
                <Chat />
              </Route>

              </div>
          </div>   
              <Route default path="/login" component={Login}/>
              
          </Switch>
        </Router>
      </CssBaseline>
    </ThemeProvider>  
  );
}

export default App;

// Trying to find a way around how those divs have been created.