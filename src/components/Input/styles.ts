import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  transition: 0.5s;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #09c734;
      border-color: #09c734;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #09c734;
      border-color: #09c734;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: black;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
