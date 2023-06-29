import styled from '@emotion/styled'

export const PlayerModeBtn = styled.button`
background-color: #CE8FFF;
width: 150px;
height: 40px;
border: none;
cursor: pointer;
box-shadow: ${(props) => props.isActive ? 
    'inset 0 0 3px 2px rgba(0, 0, 0, 0.3)' 
    : 'offset 0 0 3px 2px rgba(0, 0, 0, 0.3)'};
`