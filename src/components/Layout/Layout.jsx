import { Outlet } from 'react-router-dom';
import { Section, Box, NavLinkStyled, List, Logo } from './Layout.styled';

export const Layout = () => {
  const navBtnArr = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
    { href: 'favorites', text: 'Favorites' },
  ];

  return (
    <>
      <Section>
        <Box>
          <Logo
            alt="logo"
            width="30px"
            src="https://www.svgrepo.com/show/34896/movie.svg"
          />
          <List>
            {navBtnArr.map(({ href, text }) => (
              <li key={href}>
                <NavLinkStyled to={href} key={text}>
                  {text}
                </NavLinkStyled>
              </li>
            ))}
          </List>
        </Box>
      </Section>
      <Outlet />
    </>
  );
};
