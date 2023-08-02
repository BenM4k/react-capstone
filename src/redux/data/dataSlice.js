import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import cityNames from '../../utils/cityNames';

const APP_ID = '54cb10c14297c007dca881e9ae6aa7bd';

export const fetchCitiesData = createAsyncThunk('getCities/GetCitiesData', (cityNames, thunkAPI) => {
  const newCitiesData = [];
  const finalCitiesData = [];
  cityNames.map(async (city) => {
    const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city.name.toLowerCase()}&limit=1&appid=54cb10c14297c007dca881e9ae6aa7bd`;
    try {
      const resp = await axios.get(URL);
      console.log(resp.data);
      const newCity = {
        id: city.id,
        sigle: city.sigle,
        name: city.name?.split('_').join(' '),
        lon: resp.data?.lon,
        lat: resp.data?.lat,
      };
      newCitiesData.push(newCity);
      return newCitiesData;
    } catch (err) {
      return thunkAPI.rejectWithValue("Couldn't fetch lon and lat data");
    }
  });

  newCitiesData.map(async (city) => {
    const URL = `http://api.openwheathermap.org/data/2.5/air_pollution?lat=${city.lat}&lon=${city.lon}&appid=${APP_ID}`;
    try {
      const resp = await axios.get(URL);
      console.log(resp?.data);
      const newCity = {
        id: city.id,
        name: city.name,
        sigle: city.sigle,
        aqi: resp.data.list?.main?.aqi,
        co: resp.data.list?.components?.co,
        no: resp.data.list?.components?.no,
        no2: resp.data.list?.components?.no2,
        o3: resp.data.list?.components?.o3,
        so2: resp.data.list?.components?.so2,
        pm25: resp.data.list?.components?.pm2_5,
        pm10: resp.data.list?.components?.pm10,
        nh3: resp.data.list?.components?.nh3,
      };
      finalCitiesData.push(newCity);
      return finalCitiesData;
    } catch (err) {
      return thunkAPI.rejectWithValue("Couldn't fetch aqi data");
    }
  });
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
