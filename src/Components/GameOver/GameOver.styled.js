import styled from '@emotion/styled'

export const GameOverWrapper = styled.div`
    margin-top: 30px;
`;

export const GameOverTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const GameOverTitle = styled.h2`
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 10px;
    font-size: 30px;
    Font-weight: 700;
`;

export const WinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const Winner = styled.p`
    font-size: 24px;
    margin-top: 0px;
    margin-bottom: 0px;
`;

export const RestartBtn = styled.button`
    width: 150px;
    height: 40px;
    margin-top: 30px;
    background-color: #CE8FFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    :hover {
        transform: scale(1.1);
        background-color: #C377FF;
      }
      transition-property: transform, background-color;
      transition-duration: 250ms;
      transition-timing-function: linear;
`;

