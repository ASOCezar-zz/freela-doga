import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.input`
  height: 100%;
  border: none;
  margin-right: 20px;

  outline: none;
  cursor: default;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    border-bottom: 1px solid #000;
  }
`;

export const Icon = styled.img`
  height: 30px;
  width: 30px;
  cursor: pointer;
`;
