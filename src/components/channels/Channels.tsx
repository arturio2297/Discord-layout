import styled, {css} from "styled-components";
import {observer} from "mobx-react-lite";
import {useStores} from "../../context/context";
import ChannelGroup from "./ChannelGroup";
import {ChannelType} from "../../models/contracts/channels.contracts";
import {useState} from "react";
import ChannelsBarActions from "./Actions";
import Header from "./Header";

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

function Channels(props: Props): JSX.Element {

  const [actionsVisible, setActionsVisible] = useState<boolean>(false);
  const {serversStore} = useStores();
  const server = serversStore.selectedServer!;

  return (
    <Section width={props.width}>
      <Header
        onCLick={() => setActionsVisible(!actionsVisible)}
        serverName={server.name}
        actionsVisible={actionsVisible}
      />
      <Separator/>
      <ChannelsBarActions visible={actionsVisible}/>
      <ChannelGroup
        type={ChannelType.Text}
        channels={server.channelsByTypes.textChannels}
      />
      <ChannelGroup
        type={ChannelType.Music}
        channels={server.channelsByTypes.musicChannels}
      />
      <ChannelGroup
        type={ChannelType.Voice}
        channels={server.channelsByTypes.voiceChannels}
      />
    </Section>
  );
}

export default observer(Channels);