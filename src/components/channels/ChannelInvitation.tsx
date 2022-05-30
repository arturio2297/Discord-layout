import {BsFillPersonPlusFill} from "react-icons/bs";
import styled from "styled-components";
import AlertMessage from "../../ui-elements/AlertMessage";

const Container = styled.div`
  position: relative;
  display: none;
  align-items: center;
  justify-content: center;
  transition: color .1s ease-in-out;
  
  :hover {
    color: white;
    
    > div {
      display: flex;
      animation: appearance 0.1s forwards ease-in-out;
    }
  }
  
  @keyframes appearance {
    0% {
      opacity: 0;
    }
    80% {
      opacity: 1;
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`

function ChannelInvitation():JSX.Element {

  return (
    <Container>
      <BsFillPersonPlusFill/>
      <AlertMessage text={'Создание приглашения'} under/>
    </Container>
  )
}

export default ChannelInvitation;