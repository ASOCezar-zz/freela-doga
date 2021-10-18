import { FilterWrapper } from '../components/FilterWrapper';
import DropList from '../components/DropList';
import options from '../components/Navbar/mock';

import filterIcon from './assets/filter-icon.jpg';

export default {
  title: 'FilterWrapper',
  component: FilterWrapper,
};


const Template = (args) => <FilterWrapper {...args} />

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <img src={filterIcon} alt="Filter Icon" width="30px" height="30px"/>
      <DropList  options={options} handleChange={() => null}/>
    </>
  ),
};

