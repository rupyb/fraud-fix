import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import './button.css';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  margin: {
    //position: 'relative',
    //zIndex: 1,
    margin: theme.spacing(1),
    textTransform: 'none',
    fontFamily: 'Barlow',
  
  fontWeight: 500,
    backgroundImage: 'linear-gradient(to bottom, rgba(151, 20, 244, 0.2), rgba(96, 0, 164,0.2))',
    backgroundColor: 'rgba(0,0,0,0) !important',
    outline: 'none !important',
    color: ' #ffffff',
    // '&::before': {
    //   content: "",
    //   position: 'absolute',
    //   zIndex: -1,
    //   top: 0,
    //   bottom: 0,
    //   left: 0,
    //   right: 0,
    //   backgroundImage: 'linear-gradient(to bottom, #9714f4, #6000a4)',
    //   opacity: .2
    // }
  },
  span: {
    opacity: '1',
    color: 'white'
  },
  
}));

export default function ButtonSizes() {
  const classes = useStyles();
  return (
 
    <Fab variant="extended" aria-label="Add" className={classes.margin + ' buttonStyle'}>
       Contact us
        </Fab>
       
       
  );
}