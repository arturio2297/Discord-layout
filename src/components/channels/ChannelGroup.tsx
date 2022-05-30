import {observer} from "mobx-react-lite";
import {Channel} from "../../stores/domain/Channel";
import styled, {css} from "styled-components";
import {IoIosArrowDown} from 'react-icons/io';
import ChannelTitle from "./ChannelTitle";
import {ChannelType} from "../../models/contracts/channels.contracts";
import {useState} from "react";

const Container = styled.div`
  margin: 16px 8px;
  user-select: none;
  font-size: 0.9em;
  font-weight: bold;
`

const TypeTitle = styled.div`
  color: var(--icon-color);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: color 0.25s ease-in-out;

  :hover {
    color: var(--icon-color-h);
  }
`

const CollapseToggle = styled.div<{collapse: boolean}>`
  margin-right: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: transform 0.25s ease-in-out;
  
  ${props => !props.collapse && css`
    transform: rotate(-90deg);
  `}
`

interface Props {
  type: ChannelType;
  channels: Channel[];
}

function ChannelGroup(props: Props):JSX.Element {

  const [collapse, setCollapse] = useState<boolean>(true);

  return (
    <>
      {!!props.channels.length &&
      <Container>
        <TypeTitle onClick={() => setCollapse(!collapse)}>
          <CollapseToggle collapse={collapse}>
            <IoIosArrowDown />
          </CollapseToggle>
          {props.type}
        </TypeTitle>
        {collapse &&
        <>
          {props.channels.map(x =>
            <ChannelTitle
              key={x.name}
              channel={x}
            />)}
        </>}
      </Container>}
    </>
  )

}

export default observer(ChannelGroup);