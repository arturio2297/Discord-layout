import {VoidAction} from "../models/contracts/common";
import ReactDOM from "react-dom";
import {ReactNode, useState} from "react";
import styled from "styled-components";

const portal = document.getElementById('portal') as HTMLElement;

interface ModalSettings {
  width?: number;
  height?: number;
}

export interface ModalProps extends ModalSettings {
  show?: boolean;
  close: VoidAction;
  children: ReactNode;
}

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  width: 100vw;
  height: calc(100vh - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = styled.div<ModalSettings>`
  height: ${({height}) => `${height ? height : 500}`}px;
  width: ${({width}) => `${width ? width: 300}`}px;
  background-color: var(--bg-c-gray);
  border-radius: 10px;
  box-shadow: var(--shadow-s);
  animation: show .2s forwards ease-in-out;
  z-index: 1001;

  @keyframes show {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes hide {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0);
    }
  }
`

function Modal(props: ModalProps):JSX.Element {

  const [modalHover, setModalHover] = useState<boolean>(false);

  return props.show ? ReactDOM.createPortal(
    <Backdrop onClick={() => !modalHover && props.close()}>
      <ModalContent
        onMouseEnter={() => setModalHover(true)}
        onMouseLeave={() => setModalHover(false)}
        height={props.height}
        width={props.width}
      >
        {props.children}
      </ModalContent>
    </Backdrop>,
    portal
  )
    :
    <></>
}

export default Modal;