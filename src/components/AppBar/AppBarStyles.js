import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
   AppBar: {
      width: '100%',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
      borderBottom: '3px solid black',
      boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.75)',
      boxSizing: 'border-box',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '100',
      background: 'linear-gradient(180deg, rgba(131,125,125,1) 0%, rgba(86,86,91,1) 45%, rgba(86,86,91,1) 55%, rgba(131,125,125,1) 100%)',
      '& h1': {
         fontSize: '1.5rem',
         fontWeight: '400',
         padding: '0 1rem'
      }
   },
   classIcon: {
      height: '30px'
   },
   potion: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 1rem',
      '& img': {
         height: '30px'
      },
      '& h1': {
         padding: '0'
      }
   },
   buttonContainer: {
      // marginLeft: 'auto',
      '& button': {
         backgroundColor: '#3c423e',
         color: 'black',
         marginLeft: '0.5rem',
         padding: '3px 10px',
         textTransform: 'none',
         '&:hover': {
            backgroundColor: '#323633',
         }
      }
   }
}))