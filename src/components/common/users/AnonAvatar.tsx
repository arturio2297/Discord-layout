import styled, {css} from "styled-components";
import {FaDiscord} from "react-icons/fa";

const Container = styled.div<{size: number}>`
  
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--ds-blue);
  
  > svg {
    width: 80%;
    height: 80%;
    color: white;
  }
  
  ${props => css`
    width: ${props.size}px;
    height: ${props.size}px;
  `}
`

interface Props {
  size: number;
}

function AnonAvatar(props: Props):JSX.Element {

  return (
    <Container size={props.size}>
      <FaDiscord/>
    </Container>
  )
}

export default AnonAvatar;