import {observer} from "mobx-react-lite";
import styled from "styled-components";
import {User} from "../../stores/domain/User";
import AnonAvatar from "../common/users/AnonAvatar";
import UserInfoCard from "../common/users/UserInfoCard";
import OnlineIndicator from "../common/users/OnlineIndicator";
import {truncTitle} from "../../utils/string.utils";
import {useState} from "react";

const Container = styled.button`
  position: relative;
  border: none;
  background: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 6px 0;
  padding: 4px 0;
  box-sizing: border-box;
  color: var(--icon-color);
  user-select: none;
  cursor: pointer;
  border-radius: 5px;
  transition: var(--tr-bg-c-0_1s);

  :hover,
  :hover > div:first-child > div:last-child {
    background-color: var(--bg-c-gray-light);
  }
  
  > div:last-child {
    animation: come-from-left 0.1s forwards ease-in-out;
  }
  
  @keyframes come-from-left {
    from {
      opacity: 0;
      left: -290px;
    }
    to {
      opacity: 1;
      left: -270px;
    }
  }
`

const Avatar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 6px;

  > img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`

const UserInfo = styled.div`
  margin: 0 16px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const UserName = styled.div`
  width: 100%;
  text-align: start;
  font-size: 14px;
`

const PlayInfo = styled.div`
  width: 100%;
  font-size: 12px;
`

interface Props {
  user: User;
}

function UserCard(props: Props): JSX.Element {

  const [showUserInfo, setShowUserInfo] = useState<boolean>(false);

  return (
    <>
      <Container
        onFocus={() => setShowUserInfo(true)}
        onBlur={() => setShowUserInfo(false)}
      >
        <Avatar>
          {props.user.avatarUrl ?
            <img src={props.user.avatarUrl} alt="avatar"/>
            :
            <AnonAvatar size={35}/>}
          <OnlineIndicator
            size={13}
            bgColor={'var(--user-list-c)'}
            right={-2}
            bottom={-2}
            online={props.user.isOnline}
            showAlert
          />
        </Avatar>
        <UserInfo>
          <UserName>
            {props.user.name}
          </UserName>
          {(props.user.isOnline && props.user.play) &&
          <PlayInfo>
            {truncTitle(`Играет в ${props.user.play}`, 18)}
          </PlayInfo>}
        </UserInfo>
        <UserInfoCard
          show={showUserInfo}
          user={props.user}
        />
      </Container>
    </>
  )
}

export default observer(UserCard);