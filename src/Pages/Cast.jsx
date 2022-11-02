import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCastApi } from 'components/Api';
import { CastList } from 'components/Cast/Casts';

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

  return <CastList topCast={topCast} />;
};
