import {observer} from "mobx-react-lite";
import styled from "styled-components";
import {User} from "../../../stores/domain/User";
import UserCardHeader from "./UserCardHeader";
import {truncTitle} from "../../../utils/string.utils";
import UserName from "./UserName";
import {useStores} from "../../../context/context";
import {ApplicationModal} from "../../../models/contracts/ui.contracts";
import Input from "../../../ui-elements/Input";
import {VoidAction} from "../../../models/contracts/common";
import {useState} from "react";

const Container = styled.div<{show?: boolean}>`
  display: ${({show}) => show ? 'block' : 'none'};
  position: absolute;
  width: 250px;
  background-color: var(--bg-c-gray-dark);
  top: 0;
  border-radius: 5px;
  box-shadow: var(--shadow-s);
  z-index: 1000;
  
  :hover {
    display: block;
  }
`

const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 16px 0 16px;
  box-sizing: border-box;
  text-align: left;
`

const PlayIn = styled.div`
  width: 100%;
  margin: 16px 0;
  color: var(--icon-color-h);
`

const TypeContainer = styled.div`
  width: 100%;
  height: 35px;
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  > input {
    width: 100%;
    height: 100%;
  }
`

export interface UserInfoCardProps {
  user: User;
  show?: boolean;
  close?: VoidAction;
}

function UserInfoCard(props: UserInfoCardProps): JSX.Element {

  const [body, setBody] = useState<string>('');
  const {uiStore, usersStore, serversStore} = useStores();

  const sendMessage = () => {
    if (props.user.isMe) return;
    serversStore.sendMessageToFriend(body, props.user.id);
    setBody('');
  }

  const callProfileModal = () => {
    uiStore.setOpenedModal(ApplicationModal.UserProfile);
    usersStore.setSelectedUser(props.user);
  }

  return (
    <Container show={props.show}>
      <UserCardHeader
        onCloseClick={props.close}
        height={50}
        user={props.user}
        avatarSettings={
          {
            bottom: -40,
            left: 15,
            bgColor: 'var(--bg-c-gray-dark)',
            size: 70,
            indicatorBottom: 5,
            indicatorRight: 5,
            indicatorSize: 20,
            onAvatarClick: callProfileModal
          }
        }
      />
      <CardBody>
        <UserName name={props.user.name} number={props.user.number} fontSize={18} />
        {props.user.isOnline && props.user.play &&
        <PlayIn>
          {truncTitle(`Играет в ${props.user.play}`, 40)}
        </PlayIn>}
        <TypeContainer>
          <Input
            placeholder={props.user.isMe ? 'Заметка' : `Сообщение для @${props.user.name}`}
            value={body}
            onChange={e => setBody(e!.target.value)}
            onEnterDown={sendMessage}
          />
        </TypeContainer>
      </CardBody>
    </Container>
  )
}

export default observer(UserInfoCard);