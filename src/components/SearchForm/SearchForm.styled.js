import styled from '@emotion/styled';

export const SForm = styled.form`
  width: 290px;
  height: 30px;
  margin: 15px auto;
  display: flex;
`;

export const Input = styled.input`
  padding-left: 10px;
  height: inherit;
  width: 100%;
  border-radius: 4px;
  border: none;
  outline: none;
  box-shadow: inset 0px 0px 4px black;
  margin-right: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  background-color: grey;
  transition: 250ms;
  color: #f6f6f6;

  &:hover,
  &:focus {
    box-shadow: inset 0px 0px 8px black;
  }
`;

export const SearchBtn = styled.button`
  width: 30px;
  box-shadow: inset 0px 0px 4px;
  border: none;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  background-color: grey;
  transition: 250ms;
  &:hover,
  &:focus {
    box-shadow: inset 0px 0px 8px;
  }
`;
