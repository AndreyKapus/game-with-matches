import {GameOverTitle, Winner, RestartBtn, WinnerWrapper, GameOverTitleWrapper, GameOverWrapper} from './GameOver.styled'
// import Emoji from 'react-emojis';

const GameOver = ({winner, onRestartGame}) => {
    return (
        <GameOverWrapper>
          <GameOverTitleWrapper>
            <GameOverTitle>Game Over!</GameOverTitle>
            <input/>
          </GameOverTitleWrapper>
          <WinnerWrapper>
            <Winner>Winner: {winner} {winner === 'You' ? 
              <input/> :
              <input/>}
            </Winner>
          </WinnerWrapper>

          <RestartBtn onClick={onRestartGame}>Restart</RestartBtn>
        </GameOverWrapper>
    )
};

export default GameOver;