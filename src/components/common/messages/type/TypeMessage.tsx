import {observer} from "mobx-react-lite";
import styled from "styled-components";
import {BsPlusCircleFill} from 'react-icons/bs';
import TypeActions from "./TypeActions";
import {useState} from "react";
import {StringAction, VoidAction} from "../../../../models/contracts/common";

const Container = styled.div<{height: number}>`
  height: ${props => props.height}px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

const TypeContainer = styled.div`
  width: 90%;
  height: 65%;
  position: relative;
`

const Type = styled.input`
  border: none;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding-left: 50px;
  padding-right: 100px;
  box-sizing: border-box;
  background-color: var(--bg-c-gray);
  color: var(--icon-color);
  
  :focus {
    outline: none;
  }
`

const PlusIcon = styled.div`
  position: absolute;
  font-size: 1.3em;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  top: 11px;
  color: var(--icon-color);
  cursor: pointer;
  transition: var(--tr-c-0_1s);
  
  :hover {
    color: var(--icon-color-h);
  }
`

interface Props {
  send: StringAction;
  placeholder: string;
  height: number;
}

function TypeMessage(props: Props):JSX.Element {

  const [body, setBody] = useState<string>('');

  const sendMessage = () => {
    props.send(body);
    setBody('');
  }

  return (
    <Container height={props.height}>
      <TypeContainer>
        <PlusIcon>
          <BsPlusCircleFill/>
        </PlusIcon>
        <Type
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          value={body}
          onChange={e => setBody(e.target.value)}
          placeholder={props.placeholder}
        />
        <TypeActions />
      </TypeContainer>
    </Container>
  )
}

export default observer(TypeMessage);