import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
   CharacterCreation: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
   },
   container: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
   },
   CreationForm: {
      width: '40%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& label': {
         fontFamily: 'Marck Script',
         fontSize: '1.7rem',
         fontWeight: '700',
         letterSpacing: '2px',
         padding: '10px'
      },
      '& input': {
         fontFamily: 'Marck Script',
         textAlign: 'center',
         boxSizing: 'border-box',
         fontSize: '1.4rem',
         width: '70%',
         padding: '10px 15px',
         border: '2px solid black',
         borderRadius: '5px',
         outline: 'none'
      }
   },
   selectComponent: {
      textAlign: 'center',
      width: '70%'
   },
   selectRoot: {
      fontFamily: 'Marck Script',
      fontSize: '1.4rem',
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
      fontFamily: 'Marck Script',
      justifyContent: 'center',
      fontSize: '1.4rem'
   }
}))