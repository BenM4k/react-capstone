import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import DataDetail from '../routes/DataDetail';
import DataList from '../routes/DataList';

const mockStore = configureMockStore();

const mockData = [
  {
    id: '1',
    name: 'Kigali',
    sigle: 'KGL',
    aqi: 2,
    co: 30,
    no: 40,
    no2: 50,
    o3: 60,
    so2: 120,
    pm25: 145,
    pm10: 150,
    nh3: 100,
  },
];

const store = mockStore({
  data: {
    cities: mockData,
    loadCities: false,
    citiesError: false,
  },
  search: {
    query: '',
    filter: '0',
  },
});

describe('Testing all Routes', () => {
  test('Testing DataList', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DataList />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Kigali')).toBeInTheDocument();
  });

  test('Testing DataDetails', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DataDetail />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('City Details')).toBeInTheDocument();
  });
});
