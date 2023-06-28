import {GameOverTitle, Winner, RestartBtn, WinnerWrapper, GameOverTitleWrapper, GameOverWrapper} from './GameOver.styled'
import Emoji from 'react-emojis';

const GameOver = ({winner, onRestartGame}) => {
    return (
        <GameOverWrapper>
          <GameOverTitleWrapper>
            <GameOverTitle>Game Over!</GameOverTitle>
            <Emoji emoji="chequered-flag" size={40} lineHeight="inherit"/>
          </GameOverTitleWrapper>
          <WinnerWrapper>
            <Winner>Winner: {winner} {winner === 'You' ? 
              <Emoji emoji="flexed-biceps" size={40} lineHeight="inherit"/> :
              <Emoji emoji="pensive-face" size={40} lineHeight="inherit"/>}
            </Winner>
          </WinnerWrapper>

          <RestartBtn onClick={onRestartGame}>Restart</RestartBtn>
        </GameOverWrapper>
    )
};

export default GameOver;