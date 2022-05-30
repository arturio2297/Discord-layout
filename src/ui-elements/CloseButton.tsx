import {VoidAction} from "../models/contracts/common";
import styled from "styled-components";
import {BsX} from "react-icons/bs";

const Button = styled.button`
  position: absolute;
  z-index: 1;
  right: 2px;
  top: 2px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: var(--tr-c-0_1s);
  font-size: 30px;

  :hover {
    color: var(--icon-color-h);
  }
`

export interface CloseButtonProps {
  onCLick?: VoidAction;
}

function CloseButton(props: CloseButtonProps):JSX.Element {

  return (
    <Button
      onClick={props.onCLick}
    >
      <BsX/>
    </Button>
  )
}

export default CloseButton;