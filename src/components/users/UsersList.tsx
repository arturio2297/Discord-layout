import {observer} from "mobx-react-lite";
import styled from "styled-components";
import {Channel} from "../../stores/domain/Channel";
import {useStores} from "../../context/context";
import UsersGroup from "./UsersGroup";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`

interface Props {
  channel: Channel;
}

function UsersList(props: Props):JSX.Element {

  const {usersStore} = useStores();

  const participants = usersStore.getChannelUsers(props.channel.participantsIds);

  return (
    <Container>
      <UsersGroup
        byOnline
        online={true}
        users={participants.online}
      />
      <UsersGroup
        byOnline
        online={false}
        users={participants.offline}
      />
    </Container>
  )
}

export default observer(UsersList);