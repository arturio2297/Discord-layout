import {observer} from "mobx-react-lite";
import styled from "styled-components";
import {User} from "../../stores/domain/User";
import {VoidAction} from "../../models/contracts/common";
import AnonAvatar from "../common/users/AnonAvatar";
import OnlineIndicator from "../common/users/OnlineIndicator";

const Container = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: var(--tr-bg-c-0_1s);
  box-sizing: border-box;
  border-radius: 4px;

  :hover {
    background-color: rgba(162, 162, 162, 0.5);
  }
  
  :hover > div:last-child {
    color: white;
  }
`

const AvatarContainer = styled.div`
  position: relative;
  
  > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`

const UserName = styled.div`
  color: var(--icon-color);
  margin-left: 8px;
  transition: var(--tr-c-0_1s);
`

interface Props {
  friend: User;
  onClick: VoidAction;
}

function FriendCard(props:Props):JSX.Element {

  return (
    <Container onClick={props.onClick}>
      <AvatarContainer>
        {props.friend.avatarUrl ?
        <img src={props.friend.avatarUrl}/>
        :
        <AnonAvatar size={30} />}
        <OnlineIndicator size={15} bgColor={'var(--bg-gray)'} right={-2} bottom={-2} online={props.friend.isOnline} showAlert/>
      </AvatarContainer>
      <UserName>
        {props.friend.name}
      </UserName>
    </Container>
  )
}

export default observer(FriendCard);