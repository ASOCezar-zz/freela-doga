import styled from 'styled-components';

export const Select = styled.div`
  display: inline-block;
  position: relative;
`;

export const DefaultOption = styled.span`
    position: relative;
    cursor: pointer;
    display: inline-block;
    padding: 5px 50px 5px 10px;
    font-size: 15px;

    user-select: none;


    &::after {
      position: absolute;
      content: "";
      border-left: 2px solid black;
      border-top: 2px solid black;
      padding: 5px;
      right: 10px;
      top: 20%;
      transform: rotate(-135deg);
    }
`;

export const Options = styled.ul`
    padding: 10px;
    background-color: #f9f9f9;
    display: ${({ visible }) => visible ? "block" : "none"};
    margin: 15px 0 0 0;
    border-top: none;
    position: absolute;
    width: 100%;

    user-select: none;

    box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
`;
