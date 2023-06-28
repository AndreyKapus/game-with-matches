import React, { useState, useEffect } from 'react';
import GameOver from '../GameOver/GameOver';
import GameInterface from '../GameInterface/GameInterface';
import {GameTitle, GameWrapper, GamePlayer} from './Game.styled';
import Emoji from 'react-emojis';

const Game = () => {
  const [matches, setMatches] = useState(25);
  const [currentPlayer, setCurrentPlayer] = useState('Your');
  const [winner, setWinner] = useState(null);
  const [playerMatches, setPlayerMatches] = useState(0);
  const [aiMatches, setAiMatches] = useState(0)
  const [disabled, setDisabled] = useState(false)

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
    if(aiMatches % 2 === 0 && remainingMatches >= 2) {
      return 2;
    };
    if(aiMatches % 2 !== 0 && remainingMatches >= 3) {
      return 3;
    };
    if(remainingMatches < 2) {
      return 1;
    }
    // if (remainingMatches <= 3) {
    //   return remainingMatches;
    // }

    // const maxAIMatches = Math.min(3, remainingMatches - 1);
    // const optimalMove = (remainingMatches - maxAIMatches) % 2 === 0 ? maxAIMatches : maxAIMatches - 1;
    // return optimalMove;

    // const optimalMove = (remainingMatches - 1) % 4;
    // return optimalMove === 0 ? 1 : optimalMove;
  };

  const handleRestart = () => {
    setMatches(25);
    setCurrentPlayer('Your');
    setWinner(null);
  };


  useEffect(() => {
    if (matches === 0) {
      setWinner(matches === 0 && playerMatches % 2 === 0 && aiMatches % 2 !== 0 ? 'You' : 'AI');
    } else if (currentPlayer === 'AI') {
      makeAIMove();
    }
  }, [currentPlayer, matches, playerMatches]);


  return (
    <GameWrapper>
      <GameTitle>Match Game</GameTitle>
      {!winner && 
        <diV>
          <GamePlayer>{currentPlayer} turn</GamePlayer>
            {currentPlayer === 'Your' ? 
              <Emoji emoji="smiling-face-with-sunglasses" size={40} lineHeight="inherit"/> :
              <Emoji emoji="robot" size={40} lineHeight="inherit"/>
            }
        </diV>   
      }
      {winner ? (
          <GameOver winner={winner} onRestartGame={handleRestart}/>
      ) : (
        <GameInterface matches={matches} onHandleMachesSelection={handleMatchSelection} disabled={disabled}/>
      )}
      <div>AI: {aiMatches}</div>
      <div>Player: {playerMatches}</div>
    </GameWrapper>
  );
};

export default Game;