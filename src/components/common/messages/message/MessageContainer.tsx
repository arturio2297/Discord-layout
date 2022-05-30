import {observer} from "mobx-react-lite";
import styled from "styled-components";
import {Message} from "../../../../stores/domain/Message";
import Actions from "./Actions";
import AnonAvatar from "../../users/AnonAvatar";
import {getDateInfo} from "../../../../utils/date.util";
import UserInfoCard from "../../users/UserInfoCard";
import {useState} from "react";

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 60px;
  margin: 8px 8px 8px 0;
  display: flex;
  align-items: center;
  border-radius: 5px;
  
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
    
    > div:last-child {
      display: flex;
    }
  }
`

const BodyContainer = styled.div`
  margin: 0 8px;
  color: #d2d2d2;
`

const UserAvatarContainer = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0 8px;
  cursor: pointer;
  
  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  
  > div:last-child {
    animation: come-from-right .1s forwards ease-in-out;
  }

  @keyframes come-from-right {
    from {
      opacity: 0;
      left: 100px;
    }
    to {
      opacity: 1;
      left: 70px;
    }
  }
  
`

const MessageAdditionalInfoContainer = styled.div`
  display: flex;
  align-items: center;
`


const UserName = styled.div`
  color: #dcbd00;
  font-weight: bold;
`

const MessageDate = styled.div`
  font-size: 12px;
  margin: 0 8px;
  color: #d2d2d2;
`

interface Props {
  message: Message;
}

function MessageContainer(props: Props):JSX.Element {

  const [showUserInfo, setShowUserInfo] = useState<boolean>(false);
  const {body, user, date} = props.message;
  const dateInfo = getDateInfo(date);

  return (
    <Container>
      <UserAvatarContainer onFocus={() => setShowUserInfo(true)} onBlur={() => setShowUserInfo(false)}>
        {user?.avatarUrl ? <img src={user.avatarUrl} alt="avatar"/> : <AnonAvatar size={40}/>}
        {user && <UserInfoCard user={user} show={showUserInfo} />}
      </UserAvatarContainer>
      <BodyContainer>
        <MessageAdditionalInfoContainer>
          <UserName>
            {user?.name}
          </UserName>
          <MessageDate>
            {dateInfo.isToday ? `Сегодня в ${dateInfo.time}` : dateInfo.time}
          </MessageDate>
        </MessageAdditionalInfoContainer>
        {body}
      </BodyContainer>
      <Actions message={props.message} />
    </Container>
  )
}

export default observer(MessageContainer);