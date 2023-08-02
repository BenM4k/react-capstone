import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { BiChevronLeft } from 'react-icons/bi';

const DataDetail = () => {
  const { id } = useParams();
  const { cities: data } = useSelector((store) => store.data);
  const currentData = data.find((data) => data.id === id);

  return (
    <div className="city-detail">
      <div className="city-detail-top">
        <NavLink to="/" className="chevron">
          <BiChevronLeft />
        </NavLink>
        <p>City Details</p>
      </div>
      <h1>{currentData.name}</h1>
      <p>
        {currentData.sigle}
        {' '}
        id :
        {' '}
        {id}
      </p>
    </div>
  );
};

export default DataDetail;
