import styled, {css} from "styled-components";
import AppHeader from "./app-header/AppHeader";
import Servers from "./servers/Servers";
import Channels from "./channels/Channels";
import ChannelDialog from "./channel-dialog/ChannelDialog";
import {observer} from "mobx-react-lite";
import {useStores} from "../context/context";
import ModalsHandler from "./ModalsHandler";
import Friends from "./friends/Friends";
import FriendDialog from "./friend-dialog/FriendDialog";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#313131, #282828);
`

const Content = styled.section<{ headerHeight: number }>`
  display: flex;
  width: 100%;
  position: relative;

  ${props => css`
    height: calc(100% - ${props.headerHeight}px);
  `}
`

const headerHeight = 40;
const headerBg = 'linear-gradient(#313131, #282828)';

function ApplicationLayout(): JSX.Element {

  const {serversStore: {selectedServer}} = useStores();

  return (
    <Main>

      <AppHeader height={headerHeight}/>

      <Content headerHeight={headerHeight}>

        <Servers bg={headerBg} width={70}/>

        {selectedServer &&
        <>
          {selectedServer.isMain ?
            <>
              <Friends width={250}/>
              {selectedServer.selectedChannel && selectedServer.selectedChannel.friend &&
              <FriendDialog serversWidth={70} friendsWidth={250} />}
            </>
            :
            <>
              <Channels width={250}/>
              {selectedServer.selectedChannel &&
              <ChannelDialog serversWidth={70} channelsWith={250}/>}
            </>}
        </>}

      </Content>

      <ModalsHandler/>
    </Main>
  )
}

export default observer(ApplicationLayout);