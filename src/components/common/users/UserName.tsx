import styled from "styled-components";

const Container = styled.div<{ fontSize: number }>`
  font-size: ${({fontSize}) => fontSize}px;

  > span:first-child {
    color: white;
  }
  > span:last-child {
    color: var(--icon-color);
  }
`

export interface UserNameProps {
  name: string;
  number: string;
  fontSize: number;
}

function UserName(props: UserNameProps): JSX.Element {

  return (
    <Container fontSize={props.fontSize}>
          <span>
            {props.name}
          </span>
      <span>
            {props.number}
          </span>
    </Container>
  )
}

export default UserName;