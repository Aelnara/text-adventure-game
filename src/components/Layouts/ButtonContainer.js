import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   ButtonContainer: {
      marginTop: '1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // position: 'absolute',
      // top: 0
      '& button': {
         color: 'white',
         padding: '0 2rem !important',
         margin: '0 1rem',
         textTransform: 'none',
         letterSpacing: '2px',
         fontFamily: 'Marck Script',
         fontSize: '1.5rem',
         fontWeight: '500',
         backgroundColor: '#543628',
         '&:hover': {
            backgroundColor: '#472212',
         }
      }
   }
}));

export default function ButtonContainer(props) {
   const classes = useStyles();
   
   return (
      <div className={classes.ButtonContainer}>
         {props.children}
      </div>
   );
}