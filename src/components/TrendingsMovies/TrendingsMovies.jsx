import { Link } from 'react-router-dom';
import { Section } from './TrendingsMovies.styled';
export const TrendingsMovies = ({ trendingMovies, location }) => {
  return (
    <Section>
      <h1>Trending Today</h1>
      <ul>
        {trendingMovies.map(({ id, original_title }) => (
          <li key={id}>
            <Link key={id} to={`movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
};
