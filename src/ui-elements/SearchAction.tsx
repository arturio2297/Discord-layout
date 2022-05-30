import {VoidAction} from "../models/contracts/common";
import styled from "styled-components";
import EnterIcon, {EnterIconProps} from "./EnterIcon";
import {truncTitle} from "../utils/string.utils";

const Container = styled.div<ContainerSettings>`
  position: absolute;
  left: ${({left}) => left}px;
  top: ${({top}) => top}px;
  width: ${({width}) => width}px;
  background-color: var(--bg-c-gray-dark);
  border-radius: 3px;
  box-shadow: var(--shadow-m);
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  animation: appearance 0.1s forwards ease-in-out;
  z-index: 1000;
`

const Title = styled.div`
  font-size: 14px;
  > span:first-child {
    color: var(--icon-color);
  }
  > span:last-child {
    color: white;
    margin-left: 4px;
  }
`

interface ContainerSettings {
  left: number;
  top: number;
  width: number;
}

export interface SearchActionProps extends ContainerSettings {
  value: string | number;
  onClick: VoidAction;
  enterIcon: EnterIconProps;
}

function SearchAction(props: SearchActionProps):JSX.Element {

  return (
    <Container left={props.left} top={props.top} width={props.width}>
      <Title>
        <span>
          Ищем:
        </span>
        <span>
          {truncTitle(props.value + '', 22)}
        </span>
      </Title>
      <EnterIcon fontSize={props.enterIcon.fontSize} onClick={props.onClick}/>
    </Container>
  )
}

export default SearchAction;