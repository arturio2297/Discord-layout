import styled from "styled-components";
import ActionsToggle from "../../../../ui-elements/ActionsToggle";

const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: -45px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Actions = styled.div`
  display: none;
  position: absolute;
  right: -170px;
  top: 10px;
  border-radius: 3px;
  background-color: var(--bg-c-gray-dark);
  box-shadow: var(--shadow-m);
  font-size: 14px;
  padding: 6px;
`

const ActionItem = styled.div<{isBlock?: boolean}>`
  width: 180px;
  text-align: left;
  padding: 8px 12px;
  border-radius: 3px;
  cursor: pointer;
  transition: var(--tr-bg-c-0_1s), var(--tr-c-0_1s);
  color: ${({isBlock}) => isBlock ? 'var(--ds-red)' : 'var(--icon-color)'};
  box-sizing: border-box;
  
  :hover {
    color: white;
    background-color: ${({isBlock}) => isBlock ? 'var(--ds-red-l)' : 'var(--ds-blue)'};
  }
`

const SendButton = styled.button`
  border: none;
  padding: 8px 12px;
  border-radius: 3px;
  background-color: var(--ds-green-dark);
  color: var(--icon-color-h);
  font-weight: bold;
  cursor: pointer;
  transition: var(--tr-bg-c-0_1s), var(--tr-c-0_1s);

  :hover {
    background-color: #1d6c2b;
    color: white;
  }
`

function SendMessage():JSX.Element {

  return (
    <Container>
      <SendButton>
        Отправить сообщение
      </SendButton>
      <ActionsToggle/>
      <Actions>
        <ActionItem isBlock>
          Заблокировать
        </ActionItem>
        <ActionItem>
          Написать сообщение
        </ActionItem>
      </Actions>
    </Container>
  )
}

export default SendMessage;