import styled, {css} from "styled-components";
import {BsX} from "react-icons/bs";
import {IoIosArrowDown} from "react-icons/io";

const Toggle = styled.div<{ visible: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: var(--tr-tr_0_1s);
  width: 30px;

  ${props => props.visible ?
          css`
            transform: rotate(-90deg);
            font-size: 1.8em;
            > svg:last-child {
              display: none;
            }
          ` :
          css`
            font-size: 1.5em;
            > svg:first-child {
              display: none;
            }
          `}

`

interface Props {
  visible: boolean;
}

function ActionsToggle(props: Props): JSX.Element {

  return (
    <Toggle visible={props.visible}>
      <BsX/>
      <IoIosArrowDown/>
    </Toggle>
  )
}

export default ActionsToggle;