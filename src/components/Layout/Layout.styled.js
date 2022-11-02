import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  box-shadow: 0px 0px 8px black;
`;

export const Box = styled.div`
  list-style: none;
  display: flex;
  margin: auto;
  padding: 0px 15px;
  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  margin-left: auto;
  padding: 0 10px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  &.active {
    color: white;
    font-weight: 700;
  }
  &:hover,
  &:focus {
    color: grey;
    &.active{
      color: white;
    }
`;

export const Logo = styled.img`
  margin-left: 15px;
  wigth: 30px;
  @media screen and (min-width: 768px) {
    width: 40px;
  }
`;
