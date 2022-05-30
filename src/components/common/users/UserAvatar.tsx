import {observer} from "mobx-react-lite";
import styled, {css} from "styled-components";
import AnonAvatar from "./AnonAvatar";
import OnlineIndicator from "./OnlineIndicator";
import {VoidAction} from "../../../models/contracts/common";
import {User} from "../../../stores/domain/User";

const Container = styled.div<{ left: number, bottom: number, clickable: boolean, bgColor: string }>`
  position: absolute;
  left: ${({left}) => left ? left : 25}px;
  bottom: ${({bottom}) => bottom ? bottom : -20}px;
  background-color: ${({bgColor}) => bgColor};
  border-radius: 50%;
  padding: 7px;

  ${props => props.clickable && css`
    cursor: pointer;

    :hover > div:nth-last-child(2) {
      opacity: 1;
    }
  `}
`

const Avatar = styled.div<{ size: number }>`

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: ${({size}) => size ? size : 70}px;
    height: ${({size}) => size ? size : 70}px;
    border-radius: 50%;
  }
`

const Message = styled.div<{ size: number }>`
  position: absolute;
  right: 7px;
  bottom: 7px;
  width: ${({size}) => size ? size : 70}px;
  height: ${({size}) => size ? size : 70}px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 14px;
  transition: var(--tr-op-0_1s);
  opacity: 0;
  user-select: none;
`


export interface UserAvatarProps {
  user: User;

  size: number;
  left: number;
  bottom: number;
  bgColor: string;
  indicatorSize: number;
  indicatorRight: number;
  indicatorBottom: number;
  showAlertIndicator?: boolean;
  onAvatarClick?: VoidAction;
}

function UserAvatar(props: UserAvatarProps): JSX.Element {

  return (
    <Container
      left={props.left}
      bottom={props.bottom}
      bgColor={props.bgColor}
      clickable={!!props.onAvatarClick}
      onClick={props.onAvatarClick}
    >
      {props.user.avatarUrl ?
        <Avatar size={props.size}>
          <img src={props.user.avatarUrl} alt="avatar"/>
        </Avatar>
        :
        <AnonAvatar size={props.size}/>
      }
      <Message size={props.size}>
        профиль
      </Message>
      <OnlineIndicator
        size={props.indicatorSize}
        bgColor={props.bgColor}
        right={props.indicatorRight}
        bottom={props.indicatorBottom}
        online={props.user.isOnline}
        showAlert={props.showAlertIndicator}
      />
    </Container>
  )
}

export default observer(UserAvatar);