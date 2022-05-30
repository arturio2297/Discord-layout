import styled, {css} from "styled-components";
import CreateBranchIcon from "../../../../ui-elements/CreateBranchIcon";
import AlertMessage from "../../../../ui-elements/AlertMessage";
import {BsFillEmojiLaughingFill, BsFillTrashFill} from 'react-icons/bs';
import ForwardIcon from "../../../../ui-elements/ForwardIcon";
import MoreActions from "./MoreActions";
import {Message} from "../../../../stores/domain/Message";
import {useStores} from "../../../../context/context";
import ActionsToggle from "../../../../ui-elements/ActionsToggle";

const Container = styled.div`
  display: none;
  position: absolute;
  top: -15px;
  right: 15px;
  height: 30px;
  background-color: var(--bg-c-gray-dark);
  box-shadow: var(--shadow-m);
  border-radius: 5px;
  z-index: 1;
  cursor: pointer;
`

const Action = styled.div<{ borderLeft?: boolean, borderRight?: boolean, isDelete?: boolean }>`
  position: relative;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => `var(${props.isDelete ? '--ds-red-l' : '--icon-color'})`};
  transition: color .15s ease-in-out, background-color .15s ease-in-out;

  :hover {
    color: var(--icon-color-h);
    background-color: ${props => `var(${props.isDelete ? '--ds-red-l' : '--bg-c-gray-light'})`};

    > div:last-child {
      display: flex;
      animation: appearance .1s forwards ease-in-out;
    }
  }

  ${props => props.borderLeft && css`
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  `}

  ${props => props.borderRight && css`
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  `}

`

interface Props {
  message: Message;
}


function Actions(props: Props): JSX.Element {

  const {serversStore} = useStores();
  const channel = serversStore.selectedServer!.selectedChannel!;

  return (
    <Container>
      <Action borderLeft>
        <BsFillEmojiLaughingFill/>
        <AlertMessage text={'Добавить реакцию'}/>
      </Action>
      <Action>
        <CreateBranchIcon/>
        <AlertMessage text={'Создать ветку'}/>
      </Action>
      <Action>
        <ForwardIcon/>
        <AlertMessage text={'Ответить'}/>
      </Action>
      {props.message.user?.id === 1 &&
      <Action
          onClick={() => channel.removeMessage(props.message)}
          isDelete
      >
          <BsFillTrashFill/>
          <AlertMessage text={'Удалить'}/>
      </Action>}
      <Action borderRight>
        <ActionsToggle isHorizontal/>
        <MoreActions/>
        <AlertMessage text={'Еще'}/>
      </Action>
    </Container>
  )
}

export default Actions;