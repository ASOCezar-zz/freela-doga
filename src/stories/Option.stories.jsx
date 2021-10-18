import { Option } from '../components/Option';
import option from '../components/Option/mock';

export default {
  title: 'Option',
  component: Option,
}

const Template = (args) => <Option {...args} />

export const Default = Template.bind({})

Default.args = {
  option,
  handleChange: () => null
}