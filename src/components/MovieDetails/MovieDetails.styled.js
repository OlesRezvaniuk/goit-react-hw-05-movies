import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const BtnBack = styled(Link)`
font-size: 14px;
  display: inline-flex;
  width: max-content;
  text-decoration: none;
  color: black;
  font-weight: 500;
  padding: 5px;
  box-shadow: 0px 0px 4px;
  margin: 15px;
  border-radius: 4px;
  transition: 250ms;
  &:hover,
  &:focus {
    color: white;
`;
