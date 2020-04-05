import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import papyrus from 'assets/images/papyrus-1.png';

const useStyles = makeStyles(theme => ({
   TextContainer: {
      width: '100%',
      minHeight: '30%',
      background: `no-repeat url(${papyrus})`,
      backgroundSize: 'cover',
      position: 'absolute',
      bottom: 0,
      left: 0,
      padding: '1rem 4rem 1rem 4rem',
      boxSizing: 'border-box',
      fontFamily: 'Marck Script',
      fontSize: '1.5rem',
      fontWeight: '700',
      '& p': {
         margin: '0.5rem 0'
      },
      '& h2': {
         marginBottom: '1rem'
      }
   }
}));

export default function TextContainer(props) {
   const classes = useStyles();
   
   return (
      <div className={classes.TextContainer}>
         {props.children}
      </div>
   );
}