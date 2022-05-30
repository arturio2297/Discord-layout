import {observer} from "mobx-react-lite";
import styled from "styled-components";
import ActionsToggle from "./ActionsToggle";
import {VoidAction} from "../../models/contracts/common";

const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  color: #ffffff;
  background-color: #595959;
  border-top-left-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color .25s ease-in-out;

  :hover {
    background-color: #676767;
  }
`

interface Props {
  serverName: string;
  actionsVisible: boolean;
  onCLick: VoidAction;
}

function Header(props: Props):JSX.Element {

  return (
    <Container onClick={props.onCLick}>
      {props.serverName}
      <ActionsToggle visible={props.actionsVisible}/>
    </Container>
  )
}

export default observer(Header);