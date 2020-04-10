import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageInitial(props) {
   return (
      <>
         <p>You tried to sneak up on him, but he noticed you and ran away.</p>
         <p>You tried to run after him and you broke your ankle. This was a very bad idea...</p>
         <p>[You lost 20 Health]</p>
         <ButtonContainer>
            <Button onClick={props.choiceAmbush} variant="contained">Ambush</Button>
            <Button onClick={props.choiceHelp} variant="contained">Help</Button>
         </ButtonContainer>
      </>
   );
}