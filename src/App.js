import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCitiesData } from './redux/data/dataSlice';
import cityNames from './utils/cityNames';
import Layout from './components/Layout';
import DataList from './routes/DataList';
import DataDetail from './routes/DataDetail';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCitiesData(cityNames));
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<DataList />} />
        <Route path="/data/:id" element={<DataDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
