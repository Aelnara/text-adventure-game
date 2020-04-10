import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageWrongGuessFight(props) {
   return (
      <>
         <p>All 3 stones started to glow around the door...</p>
         <p>You activated the next level defense security and a Stone Golem came to life.</p>
         <p>The Golem attacked you.</p>
         <ButtonContainer>
            <Button onClick={props.golemFight} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}