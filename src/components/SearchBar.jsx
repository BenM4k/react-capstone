import { useDispatch, useSelector } from 'react-redux';
import { updateQuery, updateFilter } from '../redux/search/searchSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { query } = useSelector((store) => store.search);
  const handleSearch = async (e) => {
    dispatch(updateQuery(e.target.value));
  };
  const handleFilter = async (e) => {
    dispatch(updateFilter(e.target.value));
  };
  return (
    <div className="search-bar">
      <input
        type="search"
        value={query ? `${query}` : null}
        placeholder="Search"
        className="search"
        onChange={handleSearch}
      />
      <select onChange={handleFilter}>
        <option value="">Tri by Air qlty</option>
        <option value="1">Good</option>
        <option value="2">Fair</option>
        <option value="3">Moderate</option>
        <option value="4">Poor</option>
        <option value="5">Very poor</option>
      </select>
    </div>
  );
};

export default SearchBar;
