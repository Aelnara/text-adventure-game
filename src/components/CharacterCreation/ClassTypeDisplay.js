import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import warrior from 'assets/images/classes/warrior.png';
import mage from 'assets/images/classes/mage.png';
import rogue from 'assets/images/classes/rogue.png';

const useStyles = makeStyles(theme => ({
   ClassTypeDisplay: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '2rem 0',
      fontFamily: 'Marck Script',
      fontSize: '1.5rem',
      '& img': {
         width: '30%'
      },
      '& div': {
         width: '65%',
         '& p': {
            fontSize: '1.4rem',
            margin: '0.5rem'
         }
      }
   }
}));

export default function ClassTypeDisplay(props) {
   const classes = useStyles();
   const { playerClass } = props;
   
      
   const classTypeText = {
      warrior: 
         <>
            <p>Warriors generally have higher health than others. They have lower attack damage but their hit chance is high.</p>
            <p>Basic Attack Hit Chance: 90%</p>
            <p>Special Attack Hit Chance: 60%</p>
         </>,
      mage: 
         <>
            <p>Mages have low health but their damage output is high at the cost of successful hit chance.</p>
            <p>Basic Attack Hit Chance: 70%</p>
            <p>Special Attack Hit Chance: 40%</p>
         </>,
      rogue: 
         <>
            <p>Rogues are well rounded. They have a decent health pool, damage and hit chance.</p>
            <p>Basic Attack Hit Chance: 80%</p>
            <p>Special Attack Hit Chance: 50%</p>
         </>,
   };
   
   const classTypeImg = {
      warrior: warrior,
      mage: mage,
      rogue: rogue
   }
   
   const classTypeTextDisplay = classTypeText[playerClass]
   const classTypeImgDisplay = classTypeImg[playerClass]
   
   return (
      <div className={classes.ClassTypeDisplay}>
         <img src={classTypeImgDisplay} alt={playerClass}/>
         <div>
            {classTypeTextDisplay}
         </div>
      </div>
   );
}