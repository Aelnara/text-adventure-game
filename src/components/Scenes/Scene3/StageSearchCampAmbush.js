import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageSearchCampAmbush(props) {
   return (
      <>
         <p>You took too long and another thug showed up... She looks infuriated.</p>
         <p>She probably knew the one you killed before.</p>
         <ButtonContainer>
            <Button onClick={props.searchCampFight} variant="contained">Continue</Button>
         </ButtonContainer>
      </>
   );
}