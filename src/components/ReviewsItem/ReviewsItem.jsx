import { List, Author, Review } from './ReviewsItem.styled';
import PropTypes from 'prop-types';

export const ReviewsItem = ({ reviews }) => {
  return (
    <List>
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <Author>
            Author: <strong>{author}</strong>
          </Author>
          <Review>{content}</Review>
        </li>
      ))}
    </List>
  );
};

ReviewsItem.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any,
      author: PropTypes.string.isRequired,
      content: PropTypes.any,
    })
  ),
};
