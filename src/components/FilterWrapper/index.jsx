import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export const FilterWrapper = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

FilterWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};