import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageMoveOn(props) {
   return (
      <>
         <p>You decided to not take too much time on these roads. This thug wasn't the first and probably not the last one either.</p>
         <p>They usually have nothing valuable on them anyway, thats why they attack travelers on sight on these roads.</p>
         <ButtonContainer>
            <Button onClick={props.goToScene4} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}