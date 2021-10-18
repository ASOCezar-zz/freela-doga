import { Nav } from './styles';
import PropTypes from 'prop-types';

const Navbar = ({ children }) => (
  <Nav>
    {children}
  </Nav>
);


Navbar.propTypes = {
  children: PropTypes.node.isRequired
}

export default Navbar;