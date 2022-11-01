import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCastApi } from 'components/Api';

export const Cast = () => {
  const { moviesId } = useParams();
  const [topCast, setTopCast] = useState([]);

  const onArrayItems = async () => {
    const movieCast = await getCastApi(moviesId);
    const topCast = await movieCast.cast.splice(0, 21);
    setTopCast(topCast);
  };

  useEffect(() => {
    onArrayItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
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
    </ul>
  );
};
