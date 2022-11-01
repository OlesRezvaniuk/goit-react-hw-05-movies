import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const navBtnArr = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
  ];

  return (
    <>
      <div>
        {navBtnArr.map(({ href, text }) => (
          <li key={href}>
            <NavLink end to={href} key={text}>
              {text}
            </NavLink>
          </li>
        ))}
      </div>
      <Outlet />
    </>
  );
};
