import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 15px;
  margin: auto;
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

export const BtnBack = styled(Link)`
font-size: 14px;
  display: inline-flex;
  width: max-content;
  text-decoration: none;
  color: black;
  font-weight: 500;
  padding: 5px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 4px;
  border-radius: 4px;
  transition: 250ms;
  &:hover,
  &:focus {
    color: white;
`;

export const Box = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const InfoBox = styled.div`
  padding: 15px;
  color: white;
`;

export const ListGenres = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 10px;
  margin: 0;
`;

export const Poster = styled.img`
  width: 290px;
  object-fit: contain;
`;

// ---------OptionalInfo----------

export const OptionalInfoList = styled.ul`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 15px;
  display: flex;
  margin: auto;
  list-style: none;
  width: 320px;
  justify-content: space-evenly;
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

export const OptionalInfoLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
    transition: 250ms;
    &.active {
        color: white;
    }
  &:hover,
  &:focus {
    color: grey;
    &.active {
         color: white;
    }
`;
