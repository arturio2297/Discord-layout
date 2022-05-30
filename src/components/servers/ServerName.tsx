import styled from "styled-components";
import {AppServerName} from "../../models/contracts/servers.contracts";

const Name = styled.div`
  position: absolute;
  font-size: 14px;
  height: 30px;
  width: 70px;
  background-color: #3f3f3f;
  padding: 4px 8px;
  border-radius: 5px;
  right: -100px;
  box-shadow: var(--shadow-s);
  display: none;
  z-index: 1;

  ::after {
    position: absolute;
    left: -5px;
    top: calc(50% - 5px);
    content: '';
    height: 10px;
    width: 10px;
    transform: rotate(45deg);
    background-color: #3f3f3f;
  }
`

interface Props {
  groupName: AppServerName;
}

function ServerName({groupName}: Props): JSX.Element {

  return (
    <Name>
      {groupName}
    </Name>
  )
}

export default ServerName;