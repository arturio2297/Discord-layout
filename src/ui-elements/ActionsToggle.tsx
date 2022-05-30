import styled from "styled-components";
import {BsThreeDotsVertical, BsThreeDots} from "react-icons/bs";

const Toggle = styled.button<{fontSize?: number}>`
  border: none;
  background: none;
  padding: 0;

  > svg {
    color: var(--icon-color);
    font-size: ${({fontSize}) => fontSize ? fontSize : 20}px;
    margin: 0 8px;
    cursor: pointer;
    transition: --var(tr-c-0_1s);
  }

  > svg:hover {
    color: white;
  }
  
  :focus + div {
    display: block;
    animation: appearance .1s forwards ease-in-out;
  }

  + div:hover {
    display: block;
  }
`

export interface ActionsToggleProps {
  fontSize?: number;
  isHorizontal?: boolean;
}

function ActionsToggle(props: ActionsToggleProps): JSX.Element {

  return (
    <Toggle fontSize={props.fontSize}>
      {props.isHorizontal ? <BsThreeDots/> : <BsThreeDotsVertical/>}
    </Toggle>)
}

export default ActionsToggle;