import { BtnBack } from './MovieDetails.styled';

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
      <BtnBack to={pathname + search}>Go back</BtnBack>
      <section style={{ display: 'flex' }}>
        <img
          style={{ width: '290px' }}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
        ></img>
        <div>
          <h1>
            {original_title}({year})
          </h1>
          <p>User Score: {score}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres.map(({ name }) => (
            <p key={name}>{name}</p>
          ))}
        </div>
      </section>
    </>
  );
};
