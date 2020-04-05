import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   Background: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      bottom: '20%',
      left: 0
   }
}));

export default function Background(props) {
   const classes = useStyles();
   const backgroundImg = `bottom / contain no-repeat url(${props.img})`
   
   return <div className={classes.Background} style={{background: backgroundImg}} />
}