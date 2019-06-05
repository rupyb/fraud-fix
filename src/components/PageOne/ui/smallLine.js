import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    smallLine: {
        width: '50px',
        height: '1px',
        borderRadius: '1.8px',
        backgroundColor: '#3cdc7c'
  }
}));

export default () => {
  const classes = useStyles();
  return (
       <div className={classes.smallLine}></div>
  );
}