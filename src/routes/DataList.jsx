import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const DataList = () => {
  const { query, filter } = useSelector((store) => store.search);
  const { cities: data } = useSelector((store) => store.data);
  const searchedData = data?.filter((data) => data.name.includes(query));
  const filteredData = searchedData?.filter((data) => data.name.includes(filter));
  return (
    <ul>
      {filteredData?.map((data) => (
        <li key={data.id}>
          <NavLink to={`/data/${data.id}`}>
            <h3>{data.name}</h3>
            {/* <p>{data.desc}</p> */}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default DataList;
