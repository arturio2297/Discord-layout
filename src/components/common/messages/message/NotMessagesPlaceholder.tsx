import styled, {css} from "styled-components";
import {GiBanana} from 'react-icons/gi';
import {FcSearch} from 'react-icons/fc';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Icon = styled.div<{ allEmpty: boolean }>`
  position: relative;

  width: 150px;
  height: 150px;
  border: dashed var(--bg-c-gray-dark) 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg:first-child {
    color: yellow;
    font-size: 150px;
    z-index: 1;
    transform: scaleX(-1) rotate(-10deg) translateX(-10px) translateY(-10px);
  }
  
  > svg:last-child {
    font-size: 150px;
    z-index: 1;
    transform: scaleX(-1) translateY(12px) translateX(12px);
  }

  ${({allEmpty}) => allEmpty ?
          css`
            > svg:first-child {
              display: none;
            }
          `
          :
          css`
            > svg:last-child {
              display: none;
            }

            ::after {
              position: absolute;
              content: '';
              width: 100px;
              height: 100px;
              border: dashed var(--bg-c-gray-dark) 2px;
              border-radius: 50%;
            }
          `
  }
`

const Message = styled.div`
  color: var(--icon-color-h);
  font-weight: bold;
  margin-top: 50px;
`

export interface NotMessagesPlaceholderProps {
  allEmpty: boolean;
}

function NotMessagesPlaceholder(props: NotMessagesPlaceholderProps): JSX.Element {

  return (
    <Container>
      <Content>
        <Icon allEmpty={props.allEmpty}>
          <GiBanana/>
          <FcSearch/>
        </Icon>
        <Message>
          {props.allEmpty ? 'Сообщения отсутствуют' : 'Ничего не найдено'}
        </Message>
      </Content>
    </Container>
  );
}

export default NotMessagesPlaceholder;