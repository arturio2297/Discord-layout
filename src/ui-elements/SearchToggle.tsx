import styled, {css} from "styled-components";
import {VoidAction} from "../models/contracts/common";
import {AiOutlineSearch} from "react-icons/ai";
import {BsX} from "react-icons/bs";

const Container = styled.div<ToggleSettings>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--tr-tr_0_1s);

  > svg {
    color: var(--icon-color);
    transition: var(--tr-c-0_1s);
    cursor: pointer;
  }

  > svg:first-child {
    font-size: 20px;
  }

  > svg:last-child {
    font-size: 28px;
  }

  :hover > svg {
    color: white;
  }

  ${({queryExists, right, top, activeRight, activeTop}) => queryExists ?
          css`
            > svg:first-child {
              display: none;
            }
            
            transform: rotate(-90deg);
            right: ${activeRight}px;
            top: ${activeTop}px;
          `
          :
          css`
            > svg:last-child {
              display: none;
            }

            right: ${right}px;
            top: ${top}px;
          `}
`

interface ToggleSettings {
  queryExists: boolean;
  activeRight: number;
  activeTop: number;
  right: number;
  top: number;
}

export interface SearchToggle extends ToggleSettings {
  onSearch?: VoidAction;
  onCancel?: VoidAction;
}

function SearchToggle(props: SearchToggle): JSX.Element {

  return (
    <Container
      queryExists={props.queryExists}
      right={props.right}
      top={props.top}
      activeRight={props.activeRight}
      activeTop={props.activeTop}
    >
      <AiOutlineSearch onClick={props.onSearch}/>
      <BsX onClick={props.onCancel}/>
    </Container>
  )
}

export default SearchToggle;