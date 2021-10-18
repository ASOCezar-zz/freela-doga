import { SearchWrapper } from '.';

const SearchWrapperStory = {
  title: 'SearchWrapper',
  component: SearchWrapper,
  args: {
    onChange: () => null,
  },
};

export const Template = (args) => {
  return (
    <div>
      <SearchWrapper {...args} />
    </div>
  );
};

export default SearchWrapperStory;
