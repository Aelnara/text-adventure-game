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
      '& img': {
         width: '30%'
      },
      '& div': {
         width: '65%',
         textAlign: 'center',
         fontSize: '1.2rem'
      }
   }
}));

export default function ClassTypeDisplay(props) {
   const classes = useStyles();
   const { playerClass } = props;
   
      
   const classTypeText = {
      warrior: 'Warriors generally have higher health than others. They have lower attack damage but their hit chance is high.',
      mage: 'Mages have low health but their damage output is high at the cost of successful hit chance.',
      rogue: 'Rogues are well rounded. They have a decent health pool, damage and hit chance.'
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
            <p>{classTypeTextDisplay}</p>
         </div>
      </div>
   );
}