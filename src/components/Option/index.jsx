import PropTypes from 'prop-types';
import { Checkbox, Item, Label } from './styles';

export const Option = ({ option, handleChange }) => (
  <Item>
      <Checkbox id={option.name} type="checkbox" onChange={() => handleChange(option.name)}/>
      <Label htmlFor={option.name}>
        {option.name}
      </Label>
  </Item>
);

Option.propTypes = {
  handleChange: PropTypes.func.isRequired,
  option: PropTypes.shape({
    name: PropTypes.string.isRequired,
    select: PropTypes.bool.isRequired
  })
}
