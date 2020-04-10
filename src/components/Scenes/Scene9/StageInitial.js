import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageInitial(props) {
   return (
      <>
         <p>You continued wandering...</p>
         <p>A group of red cloaked soldiers are coming at your way.</p>
         <p>They are probably on a patrol.</p>
         <ButtonContainer>
            <Button onClick={props.choiceComfront} variant="contained">Comfront</Button>
            <Button onClick={props.choiceHide} variant="contained">Hide</Button>
         </ButtonContainer>
      </>
   );
}