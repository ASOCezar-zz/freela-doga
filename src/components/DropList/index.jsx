import { useState } from 'react';
import { DefaultOption, Options, Select } from './styles';

import PropTypes from 'prop-types';
import { Option } from '../Option';

export const DropList = ({ handleChange, options }) => {
  const [visible, setVisible] = useState(false);

  const renderOptions = (option) => <Option option={option} key={option.name} handleChange={handleChange}/>

  return (
    <Select>
      <DefaultOption onClick={() => setVisible(!visible)}>Select Option</DefaultOption>
      <Options visible={visible}>
        {options.map(renderOptions)}
      </Options>
    </Select>
  );
}

DropList.propTypes = {
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array
}
