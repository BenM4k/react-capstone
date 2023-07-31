import { useDispatch } from 'react-redux';
import { updateQuery, updateFilter } from '../redux/search/searchSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const handleSearch = async (e) => {
    dispatch(updateQuery(e.target.value));
  };
  const handleFilter = async (e) => {
    dispatch(updateFilter(e.target.value));
  };
  return (
    <>
      <input type="search" placeholder="search" className="search-bar" onChange={handleSearch} />
      <select onChange={handleFilter}>
        <option value="">default</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default SearchBar;
