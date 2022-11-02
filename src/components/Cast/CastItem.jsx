import { CastList, ActorName, CharacterName, CastActor } from './Casts.styled';

export const CastItem = ({ topCast }) => {
  return (
    <CastList>
      {topCast.map(({ name, character, profile_path, credit_id }) => (
        <CastActor key={credit_id}>
          <img
            style={{ width: '100%' }}
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt=""
          ></img>
          <ActorName>{name}</ActorName>
          <CharacterName>{character}</CharacterName>
        </CastActor>
      ))}
    </CastList>
  );
};
