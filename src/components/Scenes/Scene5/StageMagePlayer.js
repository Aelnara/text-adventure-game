import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageMagePlayer(props) {
   return (
      <>
         <p>You could fight the wolf but as a Mage you could also try to calm the wolf with a spell.</p>
         <ButtonContainer>
            <Button onClick={props.choiceCalm} variant="contained">Calm</Button>
            <Button onClick={props.fight} variant="contained">Fight</Button>
         </ButtonContainer>
      </>
   );
}