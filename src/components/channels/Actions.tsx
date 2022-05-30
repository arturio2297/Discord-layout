import {observer} from "mobx-react-lite";
import styled, {css} from "styled-components";
import {
  BsFillSuitDiamondFill,
  BsFillPersonPlusFill,
  BsFillShieldFill,
  BsFillPencilFill,
  BsSquare,
  BsFillArrowLeftCircleFill
} from 'react-icons/bs'
import {AiFillBell} from 'react-icons/ai'

const Container = styled.div<{ visible: boolean }>`
  margin: 8px;
  width: calc(100% - 16px);
  height: auto;
  position: absolute;
  background-color: var(--bg-c-gray-dark);
  border-radius: 5px;
  padding: 12px 4px;
  box-sizing: border-box;
  display: none;
  user-select: none;
  transform-origin: top;
  z-index: 1;
  

  ${props => props.visible && css`
    display: block;
    animation: scale .15s forwards ease-in-out;
  `}
`

const Action = styled.div<{isLast?: boolean}>`
  width: calc(100% - 10px);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5px;
  padding: 6px 10px;
  box-sizing: border-box;
  font-size: 1.1em;
  color: var(--icon-color);
  cursor: pointer;
  transition: background-color .1s ease-in-out, color .1s ease-in-out;
  
  div, svg {
    transition: color .1s ease-in-out;
  }
  
  :hover div,
  :hover svg {
    color: white !important;
  }
  
  ${props => css`
    :hover {
      background-color: ${props.isLast ? 'red' : '#4b4ee8'};
    }
  `}
`

const ActionTitle = styled.div<{color?: string}>`
  font-weight: bold;
  font-size: 0.9rem;
  
  ${props => css`
    color: ${props.color ? props.color : 'var(--icon-color)'};
  `}
`

const Separator = styled.div`
  width: 95%;
  height: 2px;
  border-radius: 1px;
  background-color: var(--icon-color);
  margin: 4px auto;
  color: #ff3737;
`

interface Props {
  visible: boolean;
}

function Actions(props: Props): JSX.Element {

  return (
    <Container visible={props.visible}>

      <Action>
        <ActionTitle>
          Буст сервера
        </ActionTitle>
        <BsFillSuitDiamondFill color={'#9941ce'} />
      </Action>

      <Separator/>

      <Action>
        <ActionTitle color={'#6d70e7'}>
          Пригласить людей
        </ActionTitle>
        <BsFillPersonPlusFill color={'#6d70e7'} />
      </Action>

      <Separator/>

      <Action>
        <ActionTitle>
          Параметры уведом...
        </ActionTitle>
        <AiFillBell/>
      </Action>
      <Action>
        <ActionTitle>
          Настройки конфидеци...
        </ActionTitle>
        <BsFillShieldFill/>
      </Action>

      <Separator/>

      <Action>
        <ActionTitle>
          Настроить профиль с...
        </ActionTitle>
        <BsFillPencilFill/>
      </Action>
      <Action>
        <ActionTitle>
          Скрыть заглушенные к...
        </ActionTitle>
        <BsSquare/>
      </Action>

      <Separator/>

      <Action isLast>
        <ActionTitle color={'#ff3737'}>
          Покинуть сервер
        </ActionTitle>
        <BsFillArrowLeftCircleFill color={'#ff3737'} />
      </Action>
    </Container>
  )
}

export default observer(Actions);