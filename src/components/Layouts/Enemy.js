import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   Enemy: {
      width: '50%',
      height: '400px',
      position: 'absolute',
      bottom: '40%',
      right: '10px'
   }
}));

export default function Enemy(props) {
   const classes = useStyles();
   const enemyImg = `right / contain no-repeat url(${props.enemyImage})`
   
   return <div className={classes.Enemy} style={{background: enemyImg}} />
}