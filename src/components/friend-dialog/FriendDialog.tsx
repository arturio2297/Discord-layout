import {observer} from "mobx-react-lite";
import styled, {css} from "styled-components";
import {useStores} from "../../context/context";
import Header from "./Header";
import MessagesList from "../common/messages/message/MessagesList";
import TypeMessage from "../common/messages/type/TypeMessage";

const Section = styled.section<{ w1: number, w2: number }>`
  height: 100%;
  position: relative;
  background-color: var(--dialog-c);

  ${props => css`
    width: calc(100% - ${props.w1}px - ${props.w2}px);
  `}
`

const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.2);
`

const ContentWrapper = styled.div<{ headerH: number }>`
  width: 100%;
  height: calc(100% - ${props => props.headerH}px);
`

const MessagesListContainer = styled.div<{typeH: number}>`
  height: calc(100% - ${({typeH}) => typeH}px);
`

interface Props {
  serversWidth: number;
  friendsWidth: number;
}

function FriendDialog(props: Props):JSX.Element {

  const {serversStore} = useStores();
  const server = serversStore.selectedServer!;
  const channel = server.selectedChannel!;
  const friend = channel.friend!;

  return (
    <Section w1={props.serversWidth} w2={props.friendsWidth}>
      <Header friend={friend} height={50} />
      <Separator/>
      <ContentWrapper headerH={52}>
        <MessagesListContainer typeH={70}>
          <MessagesList
            filteredMessages={channel.filteredMessages}
            allEmpty={channel.messagesCount === 0}
          />
        </MessagesListContainer>
        <TypeMessage
          height={70}
          placeholder={`Написать @${friend.name}`}
          send={body => channel.sendMessage(body)}
        />
      </ContentWrapper>
    </Section>
  )
}

export default observer(FriendDialog);