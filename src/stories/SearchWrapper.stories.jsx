import { SearchWrapper } from '../components/SearchWrapper';

export default {
  title: 'SearchWrapper',
  component: SearchWrapper,
};

const Template = (args) => <SearchWrapper {...args} />

export const Default = Template.bind({});

Default.args = {
  onChange: () => null,
}
