import { Icon, Input, Wrapper } from './styles';

import PropTypes from 'prop-types';
import searchIcon from '../../assets/search.svg'
import { useRef } from 'react';

export const SearchWrapper = ({ onChange }) => {
  const searchInput = useRef(null);

  const focusInput = () => {
    searchInput.current?.focus();
  }

  return(
    <Wrapper>
      <Input type="text" id="search-input" ref={searchInput} onChange={(e) => onChange(e)}/>
      <Icon src={searchIcon} alt="Search Icon" onClick={focusInput}/>
    </Wrapper>
  )
};

SearchWrapper.propTypes = {
  onChange: PropTypes.func.isRequired,
};