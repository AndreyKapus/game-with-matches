import {GameMatches, SelectionBtn, SelectionBtnWrapper, InterfaceWrapper} from './GemeInterface.styled'

const GameInterface = ({matches, onHandleMachesSelection, disabled}) => {
    return (
        <InterfaceWrapper>
            <GameMatches>Matches Remaining: {matches}</GameMatches>
            <SelectionBtnWrapper>
                <SelectionBtn disabled={disabled} onClick={() => onHandleMachesSelection(1)}>Take 1 Match</SelectionBtn>
                <SelectionBtn disabled={disabled} onClick={() => onHandleMachesSelection(2)}>Take 2 Matches</SelectionBtn>
                <SelectionBtn disabled={disabled} onClick={() => onHandleMachesSelection(3)}>Take 3 Matches</SelectionBtn>
            </SelectionBtnWrapper>  
        </InterfaceWrapper>
    )
};

export default GameInterface