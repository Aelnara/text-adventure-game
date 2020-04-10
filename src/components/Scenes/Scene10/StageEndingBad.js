import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageEndingBad(props) {
   return (
      <>
         <p>After you moved on from the vault, the sun was already going down.</p>
         <p>You decided to make a camp for the night and continue your journey in the first daylight.</p>
         <p>That was not a good place to settle down for the night. A werwolf tore you apart in your dreams...</p>
         <p>The story of your Hero ends here, {props.name}...</p>
         <ButtonContainer>
            <Button onClick={props.goToOutro} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}