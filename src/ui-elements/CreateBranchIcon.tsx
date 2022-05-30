import {BiHash} from "react-icons/bi";
import {BsFillChatLeftFill} from "react-icons/bs";
import styled, {css} from "styled-components";

const Container = styled.span<{fontSize?: number}>`
  position: relative;
  
  > svg:first-child {
    font-size: ${({fontSize}) => fontSize ? fontSize : 22}px;
  }
`

const ChatIconContainer = styled.div<{fontSize?: number, bgColor?: string}>`
  position: absolute;
  bottom: -3px;
  right: -1px;
  padding: 1px;
  transition: background-color .1s ease-in-out;
  
  ${props => css`
    font-size: ${props.fontSize ? `${props.fontSize * 0.5}px` : '0.7em'};
    background-color: ${props.bgColor ? props.bgColor : 'rgba(0, 0, 0, 0)'};
  `}
`

interface Props {
  fontSize?: number;
  bgColor?: string;
}

function CreateBranchIcon(props: Props): JSX.Element {

  return (
    <Container fontSize={props.fontSize}>
      <BiHash/>
      <ChatIconContainer fontSize={props.fontSize} bgColor={props.bgColor}>
        <BsFillChatLeftFill/>
      </ChatIconContainer>
    </Container>
  )
}

export default CreateBranchIcon;