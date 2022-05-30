import styled, {css} from "styled-components";
import {observer} from "mobx-react-lite";
import {useStores} from "../../context/context";
import GroupIcon from "./ServerIcon";

const Section = styled.section<{bg: string, width: number}>`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  ${props => css`
    background: ${props.bg};
    width: ${props.width}px;
  `}
`

const Separator = styled.div`
  height: 2px;
  border-radius: 10px;
  width: 60%;
  background-color: var(--bg-c-gray-light);
  margin: 8px auto;
`

const ServerIconContainer = styled.div`
  width: 100%;
`

interface Props {
  bg: string;
  width: number;
}

function Servers(props: Props):JSX.Element {

  const {serversStore} = useStores();

  return (
    <Section bg={props.bg} width={props.width}>
      {serversStore.servers.map((x, i) =>
      <ServerIconContainer key={i}>
        <GroupIcon
          key={x.name}
          server={x}
        />
        {x.isMain && <Separator/>}
      </ServerIconContainer>)}
    </Section>
  );
}

export default observer(Servers);