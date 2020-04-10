import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonContainer from 'components/Layouts/ButtonContainer';

export default function StageFightWon(props) {
   return (
      <>
         <p>After you managed to defeat your attacker, you noticed that his camp is on the other side of the road not far from you.</p>
         <p>It might be worth checking out... but it would also be wise to get off these dangerous roads as soon as possible...</p>
         <ButtonContainer>
            <Button onClick={props.searchCamp} variant="contained">Search camp</Button>
            <Button onClick={props.moveOn} variant="contained">Move on</Button>
         </ButtonContainer>
      </>
   );
}