import styled from 'styled-components';

export const Checkbox = styled.input`
  display: none;
`;

export const Label = styled.label`
  cursor: pointer;
  color: #444;
  font-size: 12px;

  :hover {
    color: #000;
  }
`;

export const Item = styled.li`
  list-style: none;
  background-color: #f9f9f9;
  width: 100%;
  height: 15px;
  margin-bottom: 10px;
  text-align: left;

  > ${Checkbox}:checked + ${Label} {
    color: blue;
  }
`;

