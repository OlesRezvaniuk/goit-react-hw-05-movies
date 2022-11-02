import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Section, List } from './Layout.styled';

export const Layout = () => {
  const navBtnArr = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
    { href: 'favorites', text: 'Favorites' },
  ];

  return (
    <>
      <Section>
        <List>
          {navBtnArr.map(({ href, text }) => (
            <li key={href}>
              <NavLink end to={href} key={text}>
                {text}
              </NavLink>
            </li>
          ))}
        </List>
      </Section>
      <Outlet />
    </>
  );
};
