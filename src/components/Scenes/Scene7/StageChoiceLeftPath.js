import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageChoiceLeftPath(props) {
   return (
      <>
         <p>You took the Left path.</p>
         <p>After about an hour of wandering the road, you heard yelling.</p>
         <p>You decided to check it out and you found out that a group of red cloaked soldiers are harassing a men.</p>
         <ButtonContainer>
            <Button onClick={props.leftIntervene} variant="contained">Intervene</Button>
            <Button onClick={props.leftMoveOn} variant="contained">Move on</Button>
         </ButtonContainer>
      </>
   );
}