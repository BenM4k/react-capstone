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
      <h1>{currentData?.name}</h1>
      <p className="city-air">Air components concentration</p>
      <ul>
        <li>
          <p>CO (Carbon monoxide): </p>
          <span>{currentData?.co}</span>
        </li>
        <li>
          <p>NO (Nitrogen monoxide): </p>
          <span>{currentData?.no}</span>
        </li>
        <li>
          <p>NO2 (Nitrogen dioxide): </p>
          <span>{currentData?.no2}</span>
        </li>
        <li>
          <p>O3 (Ozone): </p>
          <span>{currentData?.o3}</span>
        </li>
        <li>
          <p>SO2 (Sulphur dioxide): </p>
          <span>{currentData?.so2}</span>
        </li>
        <li>
          <p>PM2.5 (Fine particles matter): </p>
          <span>{currentData?.pm25}</span>
        </li>
        <li>
          <p>PM10 (Coarse particulate matter): </p>
          <span>{currentData?.pm10}</span>
        </li>
        <li>
          <p>NH3 (Ammonia): </p>
          <span>{currentData?.nh3}</span>
        </li>
      </ul>
    </div>
  );
};

export default DataDetail;
