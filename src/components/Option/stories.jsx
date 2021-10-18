import { Option } from '.';
import option from './mock';

const OptionStory = {
  title: 'Option',
  component: Option,
  args: {
    option,
    handleChange: () => null
  },
  argTypes: {
    option: { type: 'object' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Option {...args} />
    </div>
  );
};

export default OptionStory;
