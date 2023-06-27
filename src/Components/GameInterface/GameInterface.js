import {GameMatches, SelectionBtn, SelectionBtnWrapper, InterfaceWrapper} from './GemeInterface.styled'

const GameInterface = ({matches, onHandleMachesSelection}) => {
    return (
        <InterfaceWrapper>
            <GameMatches>Matches Remaining: {matches}</GameMatches>
            <SelectionBtnWrapper>
                <SelectionBtn onClick={() => onHandleMachesSelection(1)}>Take 1 Match</SelectionBtn>
                <SelectionBtn onClick={() => onHandleMachesSelection(2)}>Take 2 Matches</SelectionBtn>
                <SelectionBtn onClick={() => onHandleMachesSelection(3)}>Take 3 Matches</SelectionBtn>
            </SelectionBtnWrapper>  
        </InterfaceWrapper>
    )
};

export default GameInterface