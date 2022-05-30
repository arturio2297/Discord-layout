import styled from "styled-components";
import React from "react";
import {VoidAction} from "../models/contracts/common";

const StyledInput = styled.input`
  box-sizing: border-box;
  padding: 0 6px;
  border-radius: 3px;
  border: none;
  background-color: var(--bg-c-gray);
  color: var(--icon-color-h);

  :focus {
    outline: none;
  }
  
  ::placeholder {
    color: var(--icon-color);
  }
`

export interface InputProps {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterDown?: VoidAction;
  onFocus?: VoidAction;
  onBlur?: VoidAction;
  placeholder?: string;
}

const entKey = 'Enter';

function Input(props:InputProps):JSX.Element {
  return (
    <StyledInput
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      onChange={props.onChange}
      onKeyDown={e => e.key === entKey && props.onEnterDown && props.onEnterDown()}
      value={props.value}
      placeholder={props.placeholder}
    />
  )
}

export default Input;