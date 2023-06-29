import styled from '@emotion/styled'

export const InterfaceWrapper = styled.div`
    margin-top: 20px;
`;

export const GameMatches = styled.p`
    margin-top: 0px;
    margin-bottom: 20px;
    font-size: 18px;
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
    cursor: pointer;
    :hover {
        transform: scale(1.1);
        background-color: ${(props) => props.disabled ? '#E3C1FE' : '#CE8FFF'};
      }
      transition-property: transform, background-color;
      transition-duration: 250ms;
      transition-timing-function: linear;
`;

export const ClockEmojiWrapper = styled.div`
display: inline-block;
animation-name: spin;
animation-duration: 1000ms;
animation-timing-function: linear;

@keyframes spin {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
`
