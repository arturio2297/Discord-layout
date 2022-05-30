import {observer} from "mobx-react-lite";
import styled from "styled-components";
import {User} from "../../stores/domain/User";
import {UserRole} from "../../models/contracts/users.contracts";
import UserCard from "./UserCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 8px 0;
  padding: 0 10px;
  box-sizing: border-box;
`

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 12px;
  font-weight: bold;
  color: var(--icon-color);
  user-select: none;
  box-sizing: border-box;
`

interface Props {
  users: User[];
  byOnline?: boolean;
  online?: boolean;
  byRole?: boolean;
  role?: UserRole;
}

function UsersGroup(props:Props):JSX.Element {

  return (
    <Container>
      {props.byOnline &&
      <Title>
        {`${props.online ? 'В СЕТИ' : 'НЕ В СЕТИ'} - ${props.users.length}`}
      </Title>}
      {props.byRole &&
      <Title>
        {`${props.role} - ${props.users.length}`}
      </Title>}
      {props.users.map(x =>
      <UserCard key={x.id} user={x} />)}
    </Container>
  )
}

export default observer(UsersGroup);