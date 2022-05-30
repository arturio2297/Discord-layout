import styled, {css} from "styled-components";
import {observer} from "mobx-react-lite";
import {useStores} from "../../context/context";
import {Channel} from "../../stores/domain/Channel";
import {ChannelType} from '../../models/contracts/channels.contracts';
import {AiTwotoneSound} from "react-icons/ai";
import {FaHashtag} from 'react-icons/fa';
import ChannelInvitation from "./ChannelInvitation";

const TitleContainer = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  margin: 8px 0;
  color: var(--icon-color);
  cursor: pointer;
  transition: background-color .25s ease-in-out, color .25s ease-in-out;
  border-radius: 5px;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: var(--icon-color-h);
    
    > div:last-child {
      display: flex;
    }
    
    > div:nth-last-child(2) {
      display: none;
    }
  }

  ${props => props.selected && css`
    background-color: rgba(0, 0, 0, 0.1);
    color: var(--icon-color-h);
  `}
`

const Title = styled.div`
  margin: 0 8px;
`

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MessagesCounter = styled.div<{visible: boolean}>`
  width: 18px;
  height: 18px;
  background-color: var(--ds-red-l);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  font-size: 0.8em;
  
  ${props => !props.visible && css`
    display: none;
  `}
`

export interface ChannelTitleProps {
  channel: Channel;
}

function ChannelTitle(props: ChannelTitleProps): JSX.Element {

  const {serversStore} = useStores();
  const group = serversStore.selectedServer!;

  return (
    <TitleContainer
      selected={group.selectedChannel === props.channel}
      onClick={() => group.setSelectedChannel(props.channel)}
    >

      <ContentContainer>
        {props.channel.type === ChannelType.Voice ?
          <AiTwotoneSound/>
          :
          <FaHashtag/>}
        <Title>
          {props.channel.name}
        </Title>
      </ContentContainer>
      <MessagesCounter visible={!!props.channel.messagesCount}>
        {props.channel.messagesCount}
      </MessagesCounter>
      <ChannelInvitation />
    </TitleContainer>
  )
}

export default observer(ChannelTitle);