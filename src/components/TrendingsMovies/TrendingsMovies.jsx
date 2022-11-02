import PropTypes from 'prop-types';

import {
  Section,
  List,
  Poster,
  Item,
  LinkStyled,
  Title,
} from './TrendingsMovies.styled';
export const TrendingsMovies = ({ trendingMovies, location }) => {
  return (
    <Section>
      <Title>Trending Today</Title>
      <List>
        {trendingMovies.map(({ id, original_title, poster_path }) => (
          <Item key={id}>
            <LinkStyled key={id} to={`movies/${id}`} state={{ from: location }}>
              <span style={{ padding: '10px' }}> {original_title}</span>

              <Poster
                alt={original_title}
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              ></Poster>
            </LinkStyled>
          </Item>
        ))}
      </List>
    </Section>
  );
};

TrendingsMovies.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
  location: PropTypes.object.isRequired,
};
