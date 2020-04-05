import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
   CharacterCreation: {
      width: '40%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& label': {
         fontSize: '1.3rem',
         fontWeight: '700',
         letterSpacing: '2px',
         padding: '10px'
      },
      '& input': {
         textAlign: 'center',
         boxSizing: 'border-box',
         fontSize: '1.2rem',
         width: '70%',
         padding: '10px 15px',
         border: '2px solid black',
         borderRadius: '5px',
         outline: 'none'
      },
      '& button': {
         padding: '0.5rem 2rem',
      }
   },
   selectComponent: {
      textAlign: 'center',
      width: '70%',
   },
   selectRoot: {
      fontSize: '1.2rem',
      padding: '12px 15px',
      backgroundColor: 'white',
      borderRadius: '5px',
      border: '2px solid black',
      '&:focus': {
         borderRadius: '5px',
         backgroundColor: 'white'
      },
   },
   menuItemGutters: {
      justifyContent: 'center',
      fontSize: '1.2rem',
   }
}))