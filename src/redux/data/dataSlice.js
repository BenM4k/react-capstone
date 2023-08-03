import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import cityNames from '../../utils/cityNames';

const getDetails = async (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${city.lat}&lon=${city.lon}&appid=7e3b3a5b2ace534a22e402c3016e2dd6`;
  try {
    const resp = await axios.get(URL);
    const newCity = {
      id: city.id,
      name: city.name,
      sigle: city.sigle,
      aqi: resp.data.list[0]?.main?.aqi,
      co: resp.data.list[0]?.components?.co,
      no: resp.data.list[0]?.components?.no,
      no2: resp.data.list[0]?.components?.no2,
      o3: resp.data.list[0]?.components?.o3,
      so2: resp.data.list[0]?.components?.so2,
      pm25: resp.data.list[0]?.components?.pm2_5,
      pm10: resp.data.list[0]?.components?.pm10,
      nh3: resp.data.list[0]?.components?.nh3,
    };
    return newCity;
  } catch (err) {
    return err.message;
  }
};

export const fetchCitiesData = createAsyncThunk('getCities/GetCitiesData', (cityList) => {
  const finalCitiesData = cityList.map((city) => getDetails(city));
  return Promise.all(finalCitiesData);
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    cities: cityNames,
    loadCities: false,
    citiesError: false,
  },
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchCitiesData.pending, (state) => {
        state.loadCities = true;
      })
      .addCase(fetchCitiesData.fulfilled, (state, action) => {
        state.loadCities = false;
        state.cities = action.payload;
      })
      .addCase(fetchCitiesData.rejected, (state) => {
        state.citiesError = true;
      });
  },
});

export default dataSlice.reducer;
