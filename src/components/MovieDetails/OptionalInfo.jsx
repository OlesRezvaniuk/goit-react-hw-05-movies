import { OptionalInfoList, OptionalInfoLink } from './MovieDetails.styled';
import PropTypes from 'prop-types';

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

OptionalInfo.propTypes = {
  locationState: PropTypes.object.isRequired,
};
