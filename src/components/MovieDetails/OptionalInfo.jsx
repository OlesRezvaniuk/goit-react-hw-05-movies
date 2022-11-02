import { Link } from 'react-router-dom';
import { OptionalInfoList, OptionalInfoLink } from './MovieDetails.styled';

export const OptionalInfo = ({ locationState }) => {
  return (
    <OptionalInfoList>
      <li>
        <OptionalInfoLink state={locationState} to="cast">
          Cast
        </OptionalInfoLink>
      </li>
      <li>
        <OptionalInfoLink state={locationState} to="reviews">
          Reviews
        </OptionalInfoLink>
      </li>
    </OptionalInfoList>
  );
};
