import {GameOverTitle, Winner, RestartBtn} from './GameOver.styled'

const GameOver = ({winner, onRestartGame}) => {
    return (
        <div>
          <GameOverTitle>Game Over!</GameOverTitle>
          <Winner>Winner: {winner}</Winner>
          <RestartBtn onClick={onRestartGame}>Restart</RestartBtn>
        </div>
    )
};

export default GameOver;