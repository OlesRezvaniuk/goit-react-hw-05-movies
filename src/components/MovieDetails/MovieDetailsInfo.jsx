import {
  BtnBack,
  Box,
  InfoBox,
  ListGenres,
  Section,
  Poster,
} from './MovieDetails.styled';

export const MovieDetailsInfo = ({
  poster_path,
  original_title,
  overview,
  genres,
  year,
  score,
  pathname,
  search,
}) => {
  return (
    <>
      <Section>
        <BtnBack to={pathname + search}>Go back</BtnBack>
        <Box>
          <Poster
            style={{ width: '290px' }}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt=""
          ></Poster>
          <InfoBox>
            <h1>
              {original_title}({year})
            </h1>
            <p>User Score: {score}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ListGenres>
              {genres.map(({ name }) => (
                <li key={name}>
                  <p style={{ margin: '0' }}>{name}</p>
                </li>
              ))}
            </ListGenres>
          </InfoBox>
        </Box>
      </Section>
    </>
  );
};
