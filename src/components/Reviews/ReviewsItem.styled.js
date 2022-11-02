import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  margin: auto;
  padding: 15px;
  width: 320px;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Author = styled.p`
  color: #ffffffc4;
  text-align: center;
`;

export const Review = styled.p`
  color: #ffffffc4;
  text-indent: 10px;
  text-align: justify;
`;
