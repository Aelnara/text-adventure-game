import React from 'react';

export default function Scene2Ambush(props) {
   if(props.classType === 'rogue') {
      return (
         <>
            <p>You decided to take the opportunity and ambush him.</p>
            <p>You stabbed him in the back and he died.</p>
            <p>[You gained +400 XP]</p>
         </>
      );
   } else {
      return (
         <>
            <p>You tried to sneak up on him, but he noticed you and ran away.</p>
            <p>You tried to run after him and you broke your ankle. This was a very bad idea...</p>
            <p>[You lost 20 Health]</p>
         </>
      );
   }
}