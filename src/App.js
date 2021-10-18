import { useState } from 'react';
import './App.css';
import { DropList } from './components/DropList';
import { Navbar } from './components/Navbar';

import filterIcon from './assets/filter-icon.jpg';
import { SearchWrapper } from './components/SearchWrapper';
import { FilterWrapper } from './components/FilterWrapper';

function App() {

  const [selected, setSelected] = useState([
    { name: 'option-1', select: false },
    { name: 'option-2', select: false },
    { name: 'option-3', select: false },
  ]);

   const handleChange = (name) => {
    let changedSelected = [];
    selected.forEach((item) => {
      if (item.name === name) item.select = !item.select;
      changedSelected.push(item);
    });
    setSelected(changedSelected);
  };

  const options = [
    { name: 'option-1', select: false },
    { name: 'option-2', select: false },
    { name: 'option-3', select: false },
  ];

  const handleSearch = (e) =>  {
    console.log(e.target.value);
  };


  return (
    <div className="App">
      <Navbar handleChange={handleChange} options={options}>
        <FilterWrapper>
          <img src={filterIcon} alt="Filter Icon" width="30px" height="30px"/>
          <DropList handleChange={handleChange} options={options}/>
          <DropList handleChange={handleChange} options={options}/>
          <DropList handleChange={handleChange} options={options}/>
        </FilterWrapper>
        <SearchWrapper onChange={handleSearch}/>
      </Navbar>
    </div>
  );
}

export default App;
