import {PlayerModeBtn} from './ChangeMode.styled'

const ChangeMode = ({onChangeModeToPlayer, onChangeModeToAi, isActive}) => {
    return(
        <>
            <PlayerModeBtn onClick={onChangeModeToPlayer} isActive={isActive}>Your first move</PlayerModeBtn>
            <PlayerModeBtn onClick={onChangeModeToAi} isActive={isActive}>AI first move</PlayerModeBtn>
        </>
    )
};

export default ChangeMode;