import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageInvestigate(props) {
   return (
      <>
         <p>You decided to investigate the ruins for some equipment.</p>
         <p>As you arrived, you noticed that a giant guards the ruins.</p>
         <ButtonContainer>
            <Button onClick={props.ruinsAttack} variant="contained">Attack</Button>
            <Button onClick={props.ruinsMoveOn} variant="contained">Move</Button>
         </ButtonContainer>
      </>
   );
}