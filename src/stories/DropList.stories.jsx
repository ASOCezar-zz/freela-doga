import { DropList } from '../components/DropList';
import options from '../components/Navbar/mock';

export default {
  title: 'DropList',
  component: DropList,
};

const Template = (args) => <DropList {...args} />

export const Default = Template.bind({});

Default.args = {
  handleChange: () => null,
  options,
}
