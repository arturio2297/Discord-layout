import styled from "styled-components";
import {IoIosGift} from 'react-icons/io';
import {AiOutlineGif} from 'react-icons/ai';
import {CgFile} from 'react-icons/cg';
import AlertMessage from "../../../../ui-elements/AlertMessage";
import EmojiSwap from "./EmojiSwap";

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
`

const Action = styled.div`
  position: relative;
  margin: 0 5px;
  font-size: 1.5em;
  cursor: pointer;
  color: var(--icon-color);
  
  :hover {
    color: var(--icon-color-h);
    
    > div {
      display: flex;
      animation: appearance .1s forwards ease-in-out;
    }
  }
`

function TypeActions():JSX.Element {

  return (
    <Container>
      <Action>
        <IoIosGift/>
        <AlertMessage text={'Отправить подарок!'} right={-58}/>
      </Action>
      <Action>
        <AiOutlineGif/>
      </Action>
      <Action>
        <CgFile/>
      </Action>
      <EmojiSwap/>
    </Container>
  )
}

export default TypeActions;