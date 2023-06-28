import styled from '@emotion/styled'

export const InterfaceWrapper = styled.div`
    margin-top: 20px;
`

export const GameMatches = styled.p`
    margin-top: 0px;
    margin-bottom: 20px;
`;

export const SelectionBtnWrapper = styled.div`
    margin-top: 20px;

`;

export const SelectionBtn = styled.button`
    width: 150px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${(props) => props.disabled ? '#E3C1FE' : '#CE8FFF'};
    color: #fff;
    border: none;
    border-radius: 5px;
    &:not(:last-child) {
        margin-right: 15px;
    };
    
`;
