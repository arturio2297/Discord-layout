import {observer} from "mobx-react-lite";
import styled from "styled-components";
import {User} from "../../../stores/domain/User";
import {VoidAction} from "../../../models/contracts/common";
import {ReactNode} from "react";
import CloseButton from "../../../ui-elements/CloseButton";
import UserAvatar from "./UserAvatar";

const Header = styled.div<HeaderSettings>`
  position: relative;
  height: ${({height}) => height ? height : 50}px;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: ${({bgColor}) => bgColor ? bgColor : 'var(--ds-blue)'};

  > button {
    z-index: 1;
    right: 2px;
    top: 2px;
  }
`

interface HeaderSettings {
  height: number;
  bgColor?: string;
}

interface AvatarSettings {
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

interface Props extends HeaderSettings {
  user: User;
  avatarSettings: AvatarSettings;
  onCloseClick?: VoidAction;
  children?: ReactNode;
}

function UserCardHeader(props: Props): JSX.Element {

  const {avatarSettings} = props;

  return (
    <Header
      height={props.height}
      bgColor={props.bgColor}
    >
      {props.children}
      {props.onCloseClick && <CloseButton onCLick={props.onCloseClick}/>}
      <UserAvatar
        user={props.user}
        size={avatarSettings.size}
        left={avatarSettings.left}
        bottom={avatarSettings.bottom}
        bgColor={avatarSettings.bgColor}
        indicatorSize={avatarSettings.indicatorSize}
        indicatorRight={avatarSettings.indicatorRight}
        indicatorBottom={avatarSettings.indicatorBottom}
        showAlertIndicator={avatarSettings.showAlertIndicator}
        onAvatarClick={avatarSettings.onAvatarClick}
      />
    </Header>
  )
}

export default observer(UserCardHeader);