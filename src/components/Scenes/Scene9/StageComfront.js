import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageFightWon(props) {
   if(props.soldiersDied) {
      return (
         <>
            <p>The red cloaked soldiers didnt ask anything. The captain looked into your eyes and said:</p>
            <p>This is for our brothers at the crossroads. You should have stayed out of it.</p>
            <p>Then all the soldiers drew their weapon and charged at you with all their fury.</p>
            <ButtonContainer>
               <Button onClick={props.soldiersFight} variant="contained">Continue</Button>
            </ButtonContainer>
         </>
      );
   } else {
      return (
         <>
            <p>They were on a routine patrol in the area. You talked to the red cloaked captain.</p>
            <p>He gave you a Health Potion, and the soldiers wished you good fortune as they moved on.</p>
            <p>[You gained +1 Health Potion]</p>
            <ButtonContainer>
               <Button onClick={props.goToScene10} variant="contained">Continue</Button>
            </ButtonContainer>
         </>
      );
   }
}