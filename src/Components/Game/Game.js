import React, { useState, useEffect } from 'react';
import GameOver from '../GameOver/GameOver';
import GameInterface from '../GameInterface/GameInterface';
import {GameTitle, GameWrapper, GamePlayer, YourMatchesPar, PlayerEmoji, AiEmoji} from './Game.styled';
import ChangeMode from '../ChangeMode/ChangeMode';

const Game = () => {
  const [matches, setMatches] = useState(25);
  const [currentPlayer, setCurrentPlayer] = useState('Your');
  const [winner, setWinner] = useState(null);
  const [playerMatches, setPlayerMatches] = useState(0);
  const [aiMatches, setAiMatches] = useState(0)
  const [disabled, setDisabled] = useState(false);
  const [isActivePlayer, setIsActivePlayer] = useState(true);
  const [isActiveAi, setIsActiveAi] = useState(false);

    const handleMatchSelection = (numMatches) => {
    if (matches - numMatches >= 0 && !winner) {
      setMatches(matches - numMatches);
      if(currentPlayer === 'Your') {
        const takenByPlayerMatches = playerMatches + numMatches
        setPlayerMatches(takenByPlayerMatches)
      } 
      if(currentPlayer === 'AI') {
        const takenByAiMatches = aiMatches + numMatches
        setAiMatches(takenByAiMatches)
      };
      setCurrentPlayer(currentPlayer === 'Your' ? 'AI' : 'Your');
    }
  };

  const makeAIMove = () => {
    const optimalMove = calculateOptimalMove(matches);
    setDisabled(true)
    setTimeout(() => {
      handleMatchSelection(optimalMove);
      setDisabled(false)
    }, 1000);
  };

  const calculateOptimalMove = (remainingMatches) => {
    if(remainingMatches === 7 && aiMatches === 10) {
      return 3;
    };
    if (remainingMatches === 5 && playerMatches === 10) {
      return 1;
    }
    if(aiMatches % 2 === 0 && remainingMatches >= 2) {
      return 2;
    };
    if(aiMatches % 2 !== 0 && remainingMatches >= 3) {
      return 3;
    };
    if(remainingMatches <= 2) {
      return 1;
    };
  };

  const handleRestart = () => {
    setMatches(25);
    setWinner(null);
    setAiMatches(0);
    setPlayerMatches(0);
    if(isActiveAi) {
      setCurrentPlayer('AI')
    };
    if(isActivePlayer) {
      setCurrentPlayer('Your')
    }
  };

  useEffect(() => {
    if (matches === 0) {
      setWinner(matches === 0 && playerMatches % 2 === 0 && aiMatches % 2 !== 0 ? 'You' : 'AI');
    } else if (currentPlayer === 'AI') {
      makeAIMove();
    }
  }, [aiMatches, currentPlayer, matches, playerMatches]);   // eslint-disable-line react-hooks/exhaustive-deps


  const changeCurrentModeToAi = () => {
    handleRestart();
    setCurrentPlayer('AI');
    setIsActiveAi(true);
    setIsActivePlayer(false);
  };

  const changeCurrentModeToPlayer = () => {
    handleRestart();
    setCurrentPlayer('Your');
    setIsActivePlayer(true);
    setIsActiveAi(false);
  };

  return (
    <GameWrapper>
      <GameTitle>Match Game</GameTitle>
      <ChangeMode 
        onChangeModeToAi={changeCurrentModeToAi} 
        onChangeModeToPlayer={changeCurrentModeToPlayer} 
        isActivePlayer={isActivePlayer}
        isActiveAi={isActiveAi}/>
      {!winner && 
        <div>
          <GamePlayer>{currentPlayer} turn</GamePlayer>
            {currentPlayer === 'Your' ? 
              <PlayerEmoji role="img" aria-label="power" >😎</PlayerEmoji> :
              <AiEmoji role="img" aria-label="power" >🤖</AiEmoji>
            }
        </div>   
      }
      {winner ? (
          <GameOver winner={winner} onRestartGame={handleRestart}/>
      ) : (
        <GameInterface matches={matches} onHandleMachesSelection={handleMatchSelection} disabled={disabled}/>
      )}
      <YourMatchesPar>Your matches: {playerMatches}</YourMatchesPar>
      <YourMatchesPar>AI matches: {aiMatches}</YourMatchesPar>
    </GameWrapper>
  );
};

export default Game;