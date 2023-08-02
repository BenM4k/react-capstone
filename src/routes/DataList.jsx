import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const DataList = () => {
  const { query, filter } = useSelector((store) => store.search);
  const { cities: data } = useSelector((store) => store.data);
  const searchedData = data?.filter(
    (data) => data?.name?.toLowerCase().includes(query?.toLowerCase()),
  );
  const filteredData = filter === '0' ? searchedData : searchedData?.filter((data) => data?.aqi === parseInt(filter, 10));
  return (
    <>
      <div className="banner">
        <h1>
          Air Quality
          <br />
          Index
        </h1>
        <p>City Based</p>
        <span>2023</span>
      </div>
      <SearchBar />
      <div className="values">
        <h3>Possible values</h3>
        <ul>
          <li>1 = Good</li>
          <li>2 = Fair</li>
          <li>3 = Moderate</li>
          <li>4 = Poor</li>
          <li>5 = Very poor</li>
        </ul>
      </div>
      <ul className="cities-list">
        {filteredData?.map((data) => (
          <li key={data?.id} className="city">
            <NavLink to={`/data/${data.id}`}>
              <h3>{data?.sigle}</h3>
              <p>{data?.name.split('_').join(' ')}</p>
              <span>{data?.aqi}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DataList;
