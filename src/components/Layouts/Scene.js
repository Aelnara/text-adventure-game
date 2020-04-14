import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   Scene: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(80,80,195,1) 0%, rgba(115,115,219,1) 25%, rgba(162,162,228,1) 100%)',
   }
}));

export default function Scene(props) {
   const classes = useStyles();
   return (
      <div className={classes.Scene}>
         {props.children}
      </div>
   )
}