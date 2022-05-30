import {observer} from "mobx-react-lite";
import styled, {css} from "styled-components";
import Header from "./Header";
import FriendList from "./FriendList";
import {useStores} from "../../context/context";

const Section = styled.section<{ width: number }>`
  position: relative;
  height: 100%;
  background-color: #595959;
  border-top-left-radius: 10px;

  ${props => css`
    width: ${props.width}px;
  `}
`

const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.2);
`

interface Props {
  width: number;
}

function Friends(props:Props):JSX.Element {

  const {serversStore} = useStores();
  const server = serversStore.selectedServer!;
  const channels = serversStore.selectedServer!.filteredFriendChannels;

  return (
    <Section width={props.width}>
      <Header />
      <Separator/>
      <FriendList
        channels={channels}
        onChannelClick={channel => server.setSelectedChannel(channel)}
      />
    </Section>
  )
}

export default observer(Friends);