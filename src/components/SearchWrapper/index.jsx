import { Icon, Input, Wrapper } from './styles';

import PropTypes from 'prop-types';
import searchIcon from '../../assets/search.svg'
import { useRef } from 'react';

const SearchWrapper = ({ onChange }) => {
  const searchInput = useRef(null);

  const focusInput = () => {
    searchInput.current?.focus();
  }

  return(
    <Wrapper>
      <Input type="text" id="search-input" ref={searchInput} onChange={onChange}/>
      <Icon src={searchIcon} alt="Search Icon" onClick={focusInput}/>
    </Wrapper>
  )
};

SearchWrapper.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchWrapper;