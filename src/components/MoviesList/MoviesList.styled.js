import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MoviesListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(8, 1fr);
    width: 1200px;
  }
  padding: 15px;
  margin: 15px;
  gap: 15px;
  list-style: none;
  margin: 15px auto;
`;

export const MoviesListItem = styled.li`
  box-shadow: 0px 0px 4px black;
  text-align: center;
  border-radius: 4px;
  -webkit-transition: 250ms;
  transition: 250ms;
  &:hover,
  &:focus {
    scale: 1.01;
    box-shadow: 0px 0px 8px black;
  }
`;

export const MovieListLink = styled(Link)`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
    background-color: black;
    color: white;
    border-radius: 4px;
    height: 100%;
}`;

export const MovieName = styled.span`
  padding: 10px;
`;

export const MoviePoster = styled.img`
  width: calc(100%);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 100%;
  object-fit: cover;
`;
