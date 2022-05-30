import styled from "styled-components";
import {ReactNode, useState} from "react";
import {
  BsFillEmojiWinkFill,
  BsEmojiAngryFill,
  BsEmojiDizzyFill,
  BsEmojiHeartEyes,
  BsEmojiNeutral,
  BsEmojiSmile,
  BsEmojiSunglasses,
  BsEmojiLaughing,
  BsEmojiSmileUpsideDown,
} from 'react-icons/bs';

const Container = styled.div<{color: string}>`
  font-size: 1.3em;
  color: var(--icon-color);
  margin: 0 5px;
  transition: var(--tr-c-0_2s), var(--tr_tr_0_2s);
  cursor: pointer;
  
  :hover {
    color: ${({color}) => color};
    transform: scale(1.2);
  }
`

type Emoji = {
  item: ReactNode;
  color: string;
}

type Emojis = Emoji[];

const emojis: Emojis =
  [
    {
      item: <BsFillEmojiWinkFill/>,
      color: 'lightcoral'
    },
    {
      item: <BsEmojiAngryFill/>,
      color: 'red'
    },
    {
      item: <BsEmojiDizzyFill/>,
      color: 'lightgreen'
    },
    {
      item: <BsEmojiHeartEyes/>,
      color: 'pink'
    },
    {
      item: <BsEmojiNeutral/>,
      color: 'white'
    },
    {
      item: <BsEmojiSmile/>,
      color: 'orange'
    },
    {
      item: <BsEmojiSunglasses/>,
      color: 'lightblue'
    },
    {
      item: <BsEmojiLaughing/>,
      color: 'yellow'
    },
    {
     item: <BsEmojiSmileUpsideDown/>,
     color: 'orange'
    }
  ];

function EmojiSwap(): JSX.Element {

  const [index, setIndex] = useState<number>(0);
  const [isSwapped, setIsSwapped] = useState<boolean>(false);
  const emoji = emojis[index];

  const showNext = () => {
    if (isSwapped) return;
    index === (emojis.length - 1) ? setIndex(0) : setIndex(index + 1);
    setIsSwapped(true);
  }

  return (
    <Container
      color={emoji.color}
      onMouseEnter={showNext}
      onMouseLeave={() => setIsSwapped(false)}
    >
      {emoji.item}
    </Container>
  )
}

export default EmojiSwap;