import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';


const useStyles = makeStyles({
  app: {
    display: 'grid',
    placeItems: 'center',    
    backgroundColor: '#dadbd3',
    height: 1000,
    

  },
  app__body: {
    display: 'flex',
    marginTop: -50,
    backgroundColor: '#ededed',
    height: 900,
    width: 900,
    boxShadow: '-1px 4px 20px -6px rgba(0, 0, 0, 0.2)'

  },


});

// youtube video paused @ 32.08

function App() {
  const classes = useStyles();
  return (
    // BEM naming convention
    <div className={classes.app}>
      
      <div className={classes.app__body}>
        <Sidebar />
        {/* Side bar */}

        {/* Chat */}

      </div>
    </div>
  );
}

export default App;

