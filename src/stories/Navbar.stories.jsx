import { Navbar } from '../components/Navbar';
import { DropList } from '../components/DropList';
import options from '../components/Navbar/mock';

export default {
  title: 'Navbar',
  component: Navbar,
}

const Template = (args) => <Navbar {...args} />

export const Default = Template.bind({})

Default.args = {
    children: <DropList options={options} handleChange={() => null}/>
};

