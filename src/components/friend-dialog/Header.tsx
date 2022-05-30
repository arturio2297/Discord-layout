import {observer} from "mobx-react-lite";
import styled from "styled-components";
import {User} from "../../stores/domain/User";
import OnlineIndicator from "../common/users/OnlineIndicator";

const Container = styled.div<{height: number}>`
  height: ${({height}) => height}px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const FriendName = styled.div`
  position: relative;
  color: var(--icon-color-h);
  padding: 0 16px;
  font-weight: bold;
`

interface Props {
  friend: User;
  height: number;
}

function Header(props:Props):JSX.Element {

  return (
    <Container height={props.height}>
      <FriendName>
        {`@ ${props.friend.name}`}
        <OnlineIndicator
          size={20}
          bgColor={''}
          right={-10}
          bottom={0}
          online={props.friend.isOnline}
          showAlert
        />
      </FriendName>
    </Container>
  )
}

export default observer(Header);