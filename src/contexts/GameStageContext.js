import React, { createContext, useState } from 'react';

export const GameStageContext = createContext();

export function GameStageProvider(props) {
   const [gameStage, setGameStage] = useState('scene9');
   
   const changeGameStage = value => setGameStage(value);
   
   return (
      <GameStageContext.Provider value={{ gameStage, changeGameStage }}>
         {props.children}
      </GameStageContext.Provider>
   );
}