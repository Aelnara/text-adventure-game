import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageRest(props) {
   if(!props.disturbed) {
      return (
         <>
            <p>You decided to stay here for the night. Whats the chance of being attacked twice, huh??</p>
            <p>You slept undisturbed, and in the first sunlight you left this place.</p>
            <p>[Health Restored]</p>
            <ButtonContainer>
               <Button onClick={props.goToScene6} variant="contained">Continue</Button>
            </ButtonContainer>
         </>
      );
   } else {
      return (
         <>
            <p>You decided to stay here for the night. Whats the chance of being attacked twice, huh??</p>
            <p>Well, that was not your lucky night because a wild boar showed up and attacked you!</p>
            <ButtonContainer>
               <Button onClick={props.boarFight} variant="contained">Continue</Button>
            </ButtonContainer>
         </>
      );
   }
}