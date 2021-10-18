import { DropList } from '.';
import options from '../Navbar/mock';

const DropListStory = {
  title: 'DropList',
  component: DropList,
  args: {
    handleChange: () => null,
    options,
  },
  argTypes: {
    options: { type: 'array' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <DropList {...args} />
    </div>
  );
};

export default DropListStory;
