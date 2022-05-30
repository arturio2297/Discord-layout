import {observer} from "mobx-react-lite";
import styled from "styled-components";
import Input from "../../ui-elements/Input";
import React, {useState} from "react";
import {useStores} from "../../context/context";
import SearchToggle from "../../ui-elements/SearchToggle";
import SearchAction from "../../ui-elements/SearchAction";

const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  background-color: #595959;
  border-top-left-radius: 10px;
`

const TypeContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  > input {
    width: 80%;
    height: 25px;
  }
`

function Header():JSX.Element {

  const {serversStore} = useStores();
  const server = serversStore.selectedServer!;
  const [query, setQuery] = useState<string>('');
  const [showSearchAction, setShowSearchAction] = useState<boolean>(false);

  const queryHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    !e.target.value && server.setQuery('');
  }

  const goSearch = () => {
    setShowSearchAction(false);
    server.setQuery(query);
  }

  const clearQuery = () => {
    setQuery('');
    server.setQuery('');
  }

  return (
    <Container>
      <TypeContainer>
        <Input
          onFocus={() => setShowSearchAction(true)}
          placeholder={'Найти беседу'}
          value={query}
          onChange={queryHandle}
          onEnterDown={goSearch}
        />
        <SearchToggle
          queryExists={!!query}
          activeRight={25}
          activeTop={-1}
          right={28}
          top={2}
          onSearch={goSearch}
          onCancel={clearQuery}
        />
        {(!!query && showSearchAction) &&
        <SearchAction
            value={query}
            onClick={goSearch}
            enterIcon={
              {
                fontSize: 14,
                onClick: goSearch
              }
            }
            left={25}
            top={30}
            width={300}
        />}
      </TypeContainer>
    </Container>
  )
}

export default observer(Header);