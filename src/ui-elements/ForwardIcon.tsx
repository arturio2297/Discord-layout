import {RiShareForwardFill} from "react-icons/ri";
import styled, {css} from "styled-components";

const Container = styled.div<{fontSize?: number}>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  > svg {
    transform: scaleX(-1);
  }
  
  ${props => props.fontSize && css`
    font-size: ${props.fontSize}px;
  `}
`

interface Props {
  fontSize?: number;
}

function ForwardIcon(props: Props):JSX.Element {

  return (
    <Container fontSize={props.fontSize}>
      <RiShareForwardFill/>
    </Container>
  )
}

export default ForwardIcon;