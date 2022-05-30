import styled from "styled-components";
import ForwardIcon from "../../../../ui-elements/ForwardIcon";
import CreateBranchIcon from "../../../../ui-elements/CreateBranchIcon";
import {BsFillPencilFill, BsLink45Deg, BsVolumeUpFill} from "react-icons/bs";

const Container = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 30px;
  top: 0;
  background-color: var(--bg-c-gray-dark);
  border-radius: 3px;
  width: 300px;
  padding: 4px;
`

const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 4px;
  transition: color .1s ease-in-out, background-color .1s ease-in-out;
  box-sizing: border-box;
  user-select: none;
  cursor: pointer;
  border-radius: 2px;
  
  :hover {
    background-color: #4b4ee8;
    color: white;
  }
`

const ActionTitle = styled.div`
  font-size: 14px;
`


function MoreActions():JSX.Element {

  return (
    <Container>
      <Action>
        <ActionTitle>
          Ответить
        </ActionTitle>
        <ForwardIcon fontSize={18}/>
      </Action>
      <Action>
        <ActionTitle>
          Создать ветку
        </ActionTitle>
        <CreateBranchIcon fontSize={20} bgColor={'var(--bg-c-dark)'}/>
      </Action>
      <Action>
        <ActionTitle>
          Отметить как непрочитанное
        </ActionTitle>
        <BsFillPencilFill/>
      </Action>
      <Action>
        <ActionTitle>
          Скопировать ссылку на сообщение
        </ActionTitle>
        <BsLink45Deg/>
      </Action>
      <Action>
        <ActionTitle>
          Зачитать сообщение
        </ActionTitle>
        <BsVolumeUpFill/>
      </Action>
    </Container>
  )
}

export default MoreActions;