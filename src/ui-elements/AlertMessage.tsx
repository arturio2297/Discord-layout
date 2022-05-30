import styled, {css} from "styled-components";

const Message = styled.div<{under?: boolean, right?: number, tipRight?: number}>`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: max-content;
  background-color: var(--bg-c-gray-dark);
  font-weight: normal;
  padding: 5px 8px;
  border-radius: 5px;
  font-size: 14px;
  color: var(--icon-color);
  box-shadow: var(--shadow-s);
  z-index: 1000;
  user-select: none;

  ::after {
    content: '';
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    background-color: var(--bg-c-gray-dark);
    position: absolute;
  }

  ${props => props.under ?
          css`
            bottom: -45px;

            ::after {
              top: -5px;
            }
          ` :
          css`
            top: -45px;

            ::after {
              bottom: -5px;
            }
          `
  }

  ${props => props.right && css`
    right: ${props.right}px;
  `}

  ${props => props.tipRight && css`
    ::after {
      right: ${props.tipRight}px;
    }
  `}
`

interface Props {
  text: string;
  under?: boolean;
  right?: number;
  tipRight?: number;
}

function AlertMessage(props: Props): JSX.Element {

  return (
    <Message
      under={props.under}
      right={props.right}
      tipRight={props.tipRight}
    >
      {props.text}
    </Message>
  )
}

export default AlertMessage;