import styled, {css} from "styled-components";
import MessagesList from "../common/messages/message/MessagesList";
import {useStores} from "../../context/context";
import Header from "./Header";
import {observer} from "mobx-react-lite";
import TypeMessage from "../common/messages/type/TypeMessage";
import UsersList from "../users/UsersList";

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
  display: flex;
`

const MessagesContentContainer = styled.div<{ typeH: number, userW: number }>`
  width: calc(100% - ${props => props.userW}px);
  height: calc(100% - ${props => props.typeH}px);
`

const UsersListContainer = styled.div<{ width: number }>`
  width: ${props => props.width}px;
  height: 100%;
  background-color: var(--user-list-c);
`

const sizes = {
  headerH: 52,
  typeAreaH: 70,
  usersW: 250,
}

interface Props {
  serversWidth: number;
  channelsWith: number;
}

function ChannelDialog(props: Props): JSX.Element {

  const {serversStore} = useStores();
  const server = serversStore.selectedServer!;
  const channel = server.selectedChannel!;

  return (
    <Section w1={props.serversWidth} w2={props.channelsWith}>
      <Header channel={channel}/>
      <Separator/>
      <ContentWrapper headerH={sizes.headerH}>
        <MessagesContentContainer typeH={sizes.typeAreaH} userW={sizes.usersW}>
          <MessagesList
            filteredMessages={channel.filteredMessages}
            allEmpty={channel.messagesCount === 0}
          />
          <TypeMessage
            height={sizes.typeAreaH}
            send={body => channel.sendMessage(body)}
            placeholder={`Написать #${channel.name}`}
          />
        </MessagesContentContainer>
        <UsersListContainer width={sizes.usersW}>
          <UsersList channel={channel}/>
        </UsersListContainer>
      </ContentWrapper>
    </Section>
  );
}

export default observer(ChannelDialog);