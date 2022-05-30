import styled, {css} from "styled-components";
import {AiOutlineMail, AiFillQuestionCircle} from 'react-icons/ai';
import {BsFillBellSlashFill, BsFillPinAngleFill, BsDownload} from 'react-icons/bs';
import {MdPeopleAlt} from 'react-icons/md';
import AlertMessage from "../../ui-elements/AlertMessage";
import CreateBranchIcon from "../../ui-elements/CreateBranchIcon";
import {observer} from "mobx-react-lite";
import {Channel} from "../../stores/domain/Channel";
import Input from "../../ui-elements/Input";
import React, {useState} from "react";
import SearchAction from "../../ui-elements/SearchAction";
import SearchToggle from "../../ui-elements/SearchToggle";

const Container = styled.div`
  position: absolute;
  background-color: #494952;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SearchContainer = styled.div<{ queryExists: boolean }>`
  position: relative;

  > svg:nth-last-child(2) {
    font-size: 1.2em;
    position: absolute;
    right: 4px;
    top: 3px;
    color: var(--icon-color-h)
  }

  > svg:nth-last-child(1) {
    font-size: 1.6em;
    position: absolute;
    right: 1px;
    top: 0;
    color: var(--icon-color-h);
    transition: var(--tr-tr_0_1s);
  }

  ${({queryExists}) => queryExists ?
          css`
            > svg:nth-last-child(2) {
              display: none;
            }
            > svg:nth-last-child(1) {
              display: block;
              transform: rotate(90deg);
            }
          `
          :
          css`
            > svg:nth-last-child(2) {
              display: block;
            }
            > svg:nth-last-child(1) {
              display: none;
            }
          `
  }
  > input {
    padding: 5px 25px 5px 8px;
    margin: 0 8px;
    width: 200px !important;
    transition: width .25s ease-in-out;
  }

  > input:focus {
    width: 300px !important;
  }
`

const Action = styled.div<{ size?: number, color?: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  transition: color .25s ease-in-out;
  cursor: pointer;

  :hover {
    color: #eaeaea;

    > div {
      display: flex;
      animation: appearance .1s forwards ease-in-out;
    }
  }

  ${props => css`
    color: ${props.color ? props.color : 'var(--icon-color)'};

    > svg:nth-child(1) {
      font-size: ${props.size ? props.size : 1.5}em;
    }
  `}
  > svg:nth-child(2) {
    position: absolute;
    font-size: 0.7em;
    bottom: 0;
    right: 0;
  }
`

interface Props {
  channel: Channel;
}

function Actions(props: Props): JSX.Element {

  const [query, setQuery] = useState<string>('');
  const [showSearchAction, setShowSearchAction] = useState<boolean>(false);

  const queryHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    !e.target.value && props.channel.setQuery('');
  }

  const goSearch = () => {
    props.channel.setQuery(query);
    setShowSearchAction(false);
  }

  const clearQuery = () => {
    props.channel.setQuery('');
    setQuery('');
  }

  return (
    <Container>
      <Action>
        <BsFillPinAngleFill/>
        <AlertMessage under text={'Ветки'}/>
      </Action>
      <Action size={1.25}>
        <BsFillBellSlashFill/>
        <AlertMessage under text={'Параметры уведомлений'}/>
      </Action>
      <Action>
        <CreateBranchIcon bgColor={'#494952'}/>
        <AlertMessage under text={'Закрепленные сообщения'}/>
      </Action>
      <Action>
        <MdPeopleAlt/>
        <AlertMessage under text={'Скрыть список участников'}/>
      </Action>
      <SearchContainer queryExists={!!query}>
        <Input
          placeholder={'Поиск'}
          value={query}
          onChange={queryHandle}
          onEnterDown={goSearch}
          onFocus={() => setShowSearchAction(true)}
        />
        {(!!query && showSearchAction) &&
        <SearchAction
            value={query}
            onClick={goSearch}
            top={30}
            left={7}
            width={305}
            enterIcon={
              {
                fontSize: 14
              }
            }
        />}
        <SearchToggle
          queryExists={!!query}
          onCancel={clearQuery}
          onSearch={goSearch}
          right={7}
          top={3}
          activeRight={5}
          activeTop={-1}
        />
      </SearchContainer>
      <Action color={'#3be827'}>
        <BsDownload/>
        <AlertMessage under text={'Обновление готово'}/>
      </Action>
      <Action>
        <AiOutlineMail/>
        <AlertMessage under text={'Почта'}/>
      </Action>
      <Action>
        <AiFillQuestionCircle/>
        <AlertMessage right={1} tipRight={11} under text={'Помощь'}/>
      </Action>
    </Container>
  )
}

export default observer(Actions);