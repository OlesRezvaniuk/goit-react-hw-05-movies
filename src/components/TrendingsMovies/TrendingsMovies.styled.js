import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  margin: 0 auto;
  padding: 15px;
  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1200px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 0;
  margin: 15px;
  gap: 15px;
  list-style: none;
  margin: 15px auto;
  @media screen and (min-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Poster = styled.img`
  width: calc(100%);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 100%;
  object-fit: cover;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column-reverse;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  background-color: black;
  color: white;
  border-radius: 4px;
  height: 100%;
`;

export const Item = styled.li`
  box-shadow: 0px 0px 4px black;
  text-align: center;
  border-radius: 4px;
  transition: 250ms;
  &:hover,
  &:focus {
    scale: 1.01;
    box-shadow: 0px 0px 8px black;
  }
`;

export const Text = styled.span`
  background-color: black;
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
  text-transform: uppercase;
  font-size: 26px;
`;
