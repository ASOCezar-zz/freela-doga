import { Navbar } from '.';
import { DropList } from '../DropList';
import options from './mock';

const NavbarStory = {
  title: 'Navbar',
  component: Navbar,
  args: {
    children: <DropList options={options} handleChange={() => null}/>
  },
  argTypes: {
    children: { type: 'node' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Navbar {...args} />
    </div>
  );
};

export default NavbarStory;