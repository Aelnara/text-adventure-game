import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
   Game: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      // background: 'linear-gradient(to bottom, #c31432, #240b36)'
   },
   Paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      // border: '4px solid black',
      backgroundColor: 'rgb(218, 192, 152)'
   }
}))