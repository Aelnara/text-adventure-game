import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageInitial(props) {
   return (
      <>
         <p>You arrived to a small town. There is a nice tavern there where you could rest a bit and regain your strenght.</p>
         <p>What do you do?</p>
         <ButtonContainer>
            <Button onClick={props.choiceRest} variant="contained">Rest</Button>
            <Button onClick={props.choiceMoveOn} variant="contained">Move on</Button>
         </ButtonContainer>
      </>
   );
}