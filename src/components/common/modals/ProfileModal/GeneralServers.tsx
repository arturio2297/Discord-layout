import {Server} from "../../../../stores/domain/Server";
import styled from "styled-components";
import {observer} from "mobx-react-lite";
import ServerImage from "../../servers/ServerImage";
import {VoidAction} from "../../../../models/contracts/common";
import {useStores} from "../../../../context/context";

const Container = styled.div`
  width: 100%;
  max-height: 150px;
  overflow: hidden auto;
`

const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: var(--tr-bg-c-0_1s);
  border-radius: 3px;
  margin: 8px 0;
  padding: 4px;
  box-sizing: border-box;

  :hover {
    background-color: rgba(204, 204, 204, 0.5);
  }
  
  :hover > div,
  :hover > svg {
    color: white;
  }
`

const ServerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--ds-blue);
  border-radius: 50%;
  padding: 10px;
  transition: var(--tr-c-0_1s);
`

const ServerName = styled.div`
  font-size: 18px;
  color: var(--icon-color-h);
  transition: var(--tr-c-0_1s);
  margin-left: 10px;
`

interface Props {
  servers: Server[];
  close: VoidAction;
}

function GeneralServers(props: Props):JSX.Element {

  const {serversStore} = useStores();

  const toServer = (server: Server) => {
    props.close();
    serversStore.setSelectedServer(server);
  }

  return (
    <Container>
      {props.servers.map(x =>
      <Item
        key={x.id}
        onClick={() => toServer(x)}
      >
        <ServerIcon>
          <ServerImage fontSize={30} serverName={x.name} />
        </ServerIcon>
        <ServerName>
          {x.name}
        </ServerName>
      </Item>)}
    </Container>
  )
}

export default observer(GeneralServers);