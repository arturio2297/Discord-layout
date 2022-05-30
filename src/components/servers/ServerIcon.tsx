import {observer} from "mobx-react-lite";
import styled, {css} from "styled-components";
import ServerName from "./ServerName";
import {Server} from "../../stores/domain/Server";
import {useStores} from "../../context/context";
import ServerImage from "../common/servers/ServerImage";

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const Icon = styled.div<{ selected: boolean, main: boolean }>`
  font-size: 2em;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-c-gray-light);
  color: var(--icon-color);
  transition: border-radius .25s ease-in-out, color .25s ease-in-out, background-color .25s ease-in-out;
  cursor: pointer;

  :hover {
    border-radius: 15px;
    color: white;
    background-color: #3535ff;
  }

  ${props => props.selected ?
          css`
            border-radius: 15px;
            color: white;
            background-color: #3535ff;

            > div:first-child {
              height: 40px;
            }
          `
          :
          css`
            :hover > div:first-child {
              height: 20px;
            }
          `}
  ${props => !props.main && css`
    margin-bottom: 8px;
  `}
  :hover > div:last-child {
    display: block;
    animation: appearance .1s forwards ease-in-out;
  }
`

const Indicator = styled.div`
  height: 10px;
  width: 10px;
  background-color: white;
  position: absolute;
  left: -5px;
  border-radius: 10px;
  transition: height .25s ease-in-out;
`

const MessagesCounter = styled.div`
  position: absolute;
  right: 5px;
  bottom: 5px;
  background-color: var(--ds-red-l);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7em;
  color: white;
  font-weight: bold;
  user-select: none;
`


interface Props {
  server: Server;
}

function ServerIcon(props: Props): JSX.Element {

  const {serversStore} = useStores();

  return (
    <IconContainer>
      <Icon
        onClick={() => serversStore.setSelectedServer(props.server)}
        selected={serversStore.selectedServer === props.server}
        main={props.server.isMain}
      >
        <Indicator/>
        <ServerImage fontSize={30} serverName={props.server.name}/>
        <ServerName groupName={props.server.name}/>
      </Icon>
      {!!props.server.messagesCount &&
      <MessagesCounter>
        {props.server.messagesCount}
      </MessagesCounter>}
    </IconContainer>
  )
}

export default observer(ServerIcon);