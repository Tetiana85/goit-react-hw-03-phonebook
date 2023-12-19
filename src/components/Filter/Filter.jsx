import { FilterInput } from './Filter.styled';

export const Filter = ({ filter, onUpdateFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onUpdateFilter}
        required
      />
    </>
  );
};
