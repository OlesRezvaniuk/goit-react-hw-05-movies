import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsApi } from 'components/Api/Api';
import { ReviewsItem } from 'components/ReviewsItem/ReviewsItem';

const Reviews = () => {
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

  return (
    <>
      <ReviewsItem reviews={reviews} />
    </>
  );
};

export default Reviews;
