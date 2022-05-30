import {observer} from "mobx-react-lite";
import styled from "styled-components";
import {Channel} from "../../stores/domain/Channel";
import HeaderActions from "./Actions";
import {FaHashtag} from "react-icons/fa";

const Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
`

const ChannelTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    font-size: 1.5em;
    color: #afafaf;
  }
`

const ChannelName = styled.div`
  margin-left: 8px;
  color: white;
`

const Separator = styled.div`
  background-color: #afafaf;
  width: 2px;
  border-radius: 2px;
  height: calc(100% - 20px);
  margin: 0 16px;
`

interface Props {
  channel: Channel;
}

function Header(props: Props): JSX.Element {

  return (
    <Container>
      <ChannelTitle>
        <FaHashtag/>
        <ChannelName>
          {props.channel.name}
        </ChannelName>
      </ChannelTitle>
      <Separator/>
      <HeaderActions channel={props.channel}/>
    </Container>
  )
}

export default observer(Header);