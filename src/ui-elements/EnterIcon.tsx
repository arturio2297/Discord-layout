import styled, {css} from "styled-components";
import {VoidAction} from "../models/contracts/common";

const Container = styled.div<ContainerSettings>`
  ${({fontSize}) => fontSize && css`
    font-size: ${fontSize}px;
  `}
`

const Title = styled.div`
  position: relative;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--icon-color);
  background-color: var(--bg-c-gray-light);
  padding: 1px 4px;
  border-radius: 3px;
  cursor: pointer;
  
  ::after {
    position: absolute;
    content: '';
    width: 98%;
    height: 100%;
    border: solid var(--icon-color) 1px;
    border-radius: 3px;
    left: 1%;
    bottom: -25%;
    z-index: -1;
    box-sizing: border-box;
  }
`

interface ContainerSettings {
  fontSize?: number;
}

export interface EnterIconProps extends ContainerSettings {
  onClick?: VoidAction;
}

function EnterIcon(props: EnterIconProps):JSX.Element {

  return (
    <Container fontSize={props.fontSize} onClick={props.onClick}>
      <Title>
        enter
      </Title>
    </Container>
  )
}

export default EnterIcon;