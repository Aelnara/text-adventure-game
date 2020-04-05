import React from 'react';
import Game from 'components/Game/Game';
import { PlayerProvider } from 'contexts/PlayerContext';
import { GameStageProvider } from 'contexts/GameStageContext';
import { EnemyProvider } from 'contexts/EnemyContext';

function App() {
   return (
      <GameStageProvider>
         <PlayerProvider>
            <EnemyProvider>
               <Game />
            </EnemyProvider>
         </PlayerProvider>
      </GameStageProvider>
   );
}

export default App;
