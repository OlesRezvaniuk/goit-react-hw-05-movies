import { CastList } from './Cast.styled';

export const Casts = ({ topCast }) => {
  return (
    <CastList>
      {topCast.map(({ name, character, profile_path, credit_id }) => (
        <li key={credit_id}>
          <img
            style={{ width: '100px' }}
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt=""
          ></img>
          <p>{name}</p>
          <p>{character}</p>
        </li>
      ))}
    </CastList>
  );
};
