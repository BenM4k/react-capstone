import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

const DataDetail = () => {
  const { id } = useParams();
  const { cities: data } = useSelector((store) => store.data);
  const currentData = data.find((data) => data.id === id);

  return (
    <div>
      <NavLink to="/">back home</NavLink>
      <h1>{currentData.name}</h1>
      <p>
        {currentData.desc}
        {' '}
        id :
        {' '}
        {id}
      </p>
    </div>
  );
};

export default DataDetail;
