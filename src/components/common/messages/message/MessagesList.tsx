import {observer} from "mobx-react-lite";
import styled from "styled-components";
import MessageContainer from "./MessageContainer";
import {compareDateByDay, getDateInfo} from "../../../../utils/date.util";
import NotMessagesPlaceholder from "./NotMessagesPlaceholder";
import {Message} from "../../../../stores/domain/Message";

const Container = styled.div`
  padding-top: 25px;
  height: 100%;
  width: 100%;
  overflow: hidden auto;
  box-sizing: border-box;
`

const MessageContentContainer = styled.div`
  width: 100%;
`

const SeparatorContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Separator = styled.div`
  position: relative;
  width: 95%;
  height: 2px;
  border-radius: 1px;
  background-color: var(--bg-c-gray-light);
`

const DateInfoContainer = styled.div`
  position: absolute;
  font-size: 12px;
  padding: 0 4px;
  color: var(--icon-color);
  background-color: var(--dialog-c);
  user-select: none;
`

interface Props {
  filteredMessages: Message[];
  allEmpty: boolean;
}

function MessagesList(props: Props):JSX.Element {

  const filteredMessagesEmpty = props.filteredMessages.length === 0;

  return (
    <Container>
        <>

          {(props.allEmpty || filteredMessagesEmpty) &&
          <NotMessagesPlaceholder allEmpty={props.allEmpty} />}

          {props.filteredMessages.map((x, i, messages) => {

            const {date} = getDateInfo(x.date);
            const prevMessage = messages[i - 1];
            const compareResult = prevMessage ? compareDateByDay(x.date, prevMessage.date) : false;

            return (
              <MessageContentContainer key={i}>
                {!compareResult &&
                <SeparatorContainer>
                    <Separator/>
                    <DateInfoContainer>
                      {date}
                    </DateInfoContainer>
                </SeparatorContainer>}
                <MessageContainer message={x} />
              </MessageContentContainer>
            );
          })}
        </>
    </Container>
  )
}

export default observer(MessagesList);