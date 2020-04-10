import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageFightWon(props) {
   return (
      <>
         <p>You killed the ambusher. Finally... its over.</p>
         <p>You wonder if it was the right thing to do back then when you tried to kill him for no reason... hmm...</p>
         <p>Anyway, you probably should be careful who do you attack in the future if you dont want to make enemies.</p>
         <p>You searched his body and you found a Health Potion.</p>
         <p>[You gained +1 Health Potion]</p>
         <ButtonContainer>
            <Button onClick={props.goToHint1} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}