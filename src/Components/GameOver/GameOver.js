import {GameOverTitle, Winner, RestartBtn, WinnerWrapper, GameOverTitleWrapper, GameOverWrapper, Emoji} from './GameOver.styled';

const GameOver = ({winner, onRestartGame}) => {
    return (
        <GameOverWrapper>
          <GameOverTitleWrapper>
            <GameOverTitle>Game Over!</GameOverTitle>
            <Emoji role="img" aria-label="sheep" width='40px'>🏁</Emoji>
          </GameOverTitleWrapper>
          <WinnerWrapper>
            <Winner>Winner: {winner} {winner === 'You' ? 
              <Emoji role="img" aria-label="power" >💪</Emoji> :
              <Emoji role="img" aria-label="sad" >😞</Emoji>}
            </Winner>
          </WinnerWrapper>

          <RestartBtn onClick={onRestartGame}>Restart</RestartBtn>
        </GameOverWrapper>
    )
};

export default GameOver;