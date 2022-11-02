import { SForm, Input, SearchBtn } from './SearchForm.styled';
import PropTypes from 'prop-types';

export const SearchForm = ({ heandleSearch, name, onInputChange }) => {
  return (
    <SForm onSubmit={heandleSearch}>
      <Input value={name} onChange={onInputChange} placeholder="" />
      <SearchBtn type="submit">
        <img
          style={{ height: '18px' }}
          alt="icon"
          src="https://www.svgrepo.com/show/120806/cinema-clapper.svg"
        />
      </SearchBtn>
    </SForm>
  );
};

SearchForm.propTypes = {
  heandleSearch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
