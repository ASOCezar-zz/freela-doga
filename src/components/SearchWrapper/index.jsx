import { Icon, Input, Wrapper } from './styles';

import PropTypes from 'prop-types';
import searchIcon from '../../assets/search.svg'

export const SearchWrapper = ({ onChange }) => {
  const focusInput = () => {
    document.getElementById("search-input").focus();
  }

  return(
    <Wrapper>
      <Input type="text" id="search-input" onChange={(e) => onChange(e)}/>
      <Icon src={searchIcon} alt="Search Icon" onClick={focusInput}/>
    </Wrapper>
  )
};

SearchWrapper.propTypes = {
  onChange: PropTypes.func.isRequired,
};