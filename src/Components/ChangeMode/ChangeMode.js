import {PlayerModeBtn} from './ChangeMode.styled'

const ChangeMode = ({onChangeModeToPlayer, onChangeModeToAi}) => {
    return(
        <>
            <PlayerModeBtn onClick={onChangeModeToPlayer}>Your first move</PlayerModeBtn>
            <PlayerModeBtn onClick={onChangeModeToAi}>AI first move</PlayerModeBtn>
        </>
    )
};

export default ChangeMode;