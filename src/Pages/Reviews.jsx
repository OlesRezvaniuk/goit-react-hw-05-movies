import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsApi } from 'components/Api';

export const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  const onArrayItems = async () => {
    const movieReview = await getReviewsApi(moviesId);
    setReviews(movieReview.results);
  };

  useEffect(() => {
    onArrayItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(reviews);

  return (
    <ul>
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
