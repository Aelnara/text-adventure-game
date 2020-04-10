import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageFightWon(props) {
   if(props.haveKey) {
      return (
         <>
            <p>After defeating the giant you searched the ruins and you found a locked chest.</p>
            <p>You tried the silver key you took from the roadside thugs, and you successfully unlocked the chest.</p>
            <p>You found some equipment and a Health Potion.</p>
            <p>[You gained +1 Health Potion]</p>
            <p>[You gained +200 XP]</p>
            <ButtonContainer>
               <Button onClick={props.goToScene7} variant="contained">Continue</Button>
            </ButtonContainer>
         </>
      );
   } else {
      return (
         <>
            <p>After defeating the giant you searched the ruins and you found a locked chess.</p>
            <p>Unfortunately, you dont have any keys so you couldnt open the chest.</p>
            <ButtonContainer>
               <Button onClick={props.goToScene7} variant="contained">Continue</Button>
            </ButtonContainer>
         </>
      );
   }
}