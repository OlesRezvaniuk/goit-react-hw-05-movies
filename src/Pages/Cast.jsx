import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCastApi } from 'components/Api/Api';
import { CastItem } from 'components/Cast/CastItem';

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

  return <CastItem topCast={topCast} />;
};
