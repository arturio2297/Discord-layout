import {observer} from "mobx-react-lite";
import styled from "styled-components";
import FriendCard from "./FriendCard";
import {Channel} from "../../stores/domain/Channel";

const Container = styled.div`
  height: calc(100% - 52px);
  width: 100%;
  padding: 25px 10px;
  box-sizing: border-box;
  overflow: hidden auto;
`

interface Props {
  channels: Channel[];
  onChannelClick: (channel: Channel) => void;
}

function FriendList(props:Props):JSX.Element {

  return (
    <Container>
      {props.channels.map(x =>
      <FriendCard
        friend={x.friend!}
        onClick={() => props.onChannelClick(x)}
      />)}
    </Container>
  )
}

export default observer(FriendList);