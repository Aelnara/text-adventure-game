import React, { createContext, useState } from 'react';

export const GameStageContext = createContext();

export function GameStageProvider(props) {
   const [gameStage, setGameStage] = useState('scene10');
   
   const changeGameStage = value => setGameStage(value);
   
   return (
      <GameStageContext.Provider value={{ gameStage, changeGameStage }}>
         {props.children}
      </GameStageContext.Provider>
   );
}