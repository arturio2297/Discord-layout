import styled, {css} from "styled-components";
import AlertMessage from "../../../ui-elements/AlertMessage";

const Indicator = styled.div<Settings>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({size}) => `${size}`}px;
  height: ${({size}) => `${size}`}px;
  right: ${({right}) => `${right}`}px;
  bottom: ${({bottom}) => `${bottom}`}px;
  border-radius: 50%;
  background-color: ${({bgColor}) => bgColor};
  transition: var(--tr-bg-c-0_1s);

  ::after {
    position: absolute;
    content: '';
    width: ${({size}) => `${size * 0.7}`}px;
    height: ${({size}) => `${size * 0.7}`}px;
    border-radius: 50%;
    background-color: ${props => props.online ? 'var(--ds-green)' : 'var(--ds-red)'};
  }

  ${({showAlert}) => showAlert && css`
    :hover > div {
      display: flex;
      animation: appearance .1s forwards ease-in-out;
    }
  `}
`


interface Settings {
  size: number;
  bgColor: string;
  right: number;
  bottom: number;
  online: boolean;
  showAlert?: boolean;
}

export interface OnlineIndicatorProps extends Settings {

}

function OnlineIndicator(props: OnlineIndicatorProps): JSX.Element {

  return (
    <Indicator
      size={props.size}
      online={props.online}
      bottom={props.bottom}
      bgColor={props.bgColor}
      right={props.right}
      showAlert={props.showAlert}
    >
      {props.showAlert && <AlertMessage text={props.online ? 'В сети' : 'Не в сети'}/>}
    </Indicator>
  )
}

export default OnlineIndicator;