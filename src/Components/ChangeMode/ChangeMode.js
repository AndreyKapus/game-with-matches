import {PlayerModeBtn} from './ChangeMode.styled'

const ChangeMode = ({onChangeModeToPlayer, onChangeModeToAi, isActivePlayer, isActiveAi}) => {
    return(
        <>
            <PlayerModeBtn type='radio' onClick={onChangeModeToPlayer} isActive={isActivePlayer}>Your first move</PlayerModeBtn>
            <PlayerModeBtn type='radio' onClick={onChangeModeToAi} isActive={isActiveAi}>AI first move</PlayerModeBtn>
        </>
    )
};

export default ChangeMode;