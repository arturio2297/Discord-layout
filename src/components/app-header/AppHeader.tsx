import styled, {css} from "styled-components";
import {BsX, BsSquare} from 'react-icons/bs';
import {AiOutlineMinus} from 'react-icons/ai'

const HeaderContainer = styled.header<{height: number}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  box-sizing: border-box;
  
  ${props => css`
    height: ${props.height}px;
  `}
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  svg:nth-child(1),
  svg:nth-child(2){
    margin: 0 8px;
  }
  
  svg:last-child {
    margin-left: 8px;
    font-size: 1.5em;
  }
  
  svg {
    transition: color 0.25s linear;
    cursor: pointer;
  }
  
  svg:hover {
    color: darkgray;
  }
`

const Logo = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 1em;
  color: #b0b0b0;
  user-select: none;
  margin: 0;
`

export interface HeaderProps {
  height: number;
}

function AppHeader({height}: HeaderProps):JSX.Element {

  return (
    <HeaderContainer height={height}>
      <Logo>
        Discord
      </Logo>
        <Actions>
          <AiOutlineMinus />
          <BsSquare/>
          <BsX/>
        </Actions>
    </HeaderContainer>
  );
}

export default AppHeader;