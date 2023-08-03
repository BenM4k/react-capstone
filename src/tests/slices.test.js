import searchReducer, { updateFilter, updateQuery } from '../redux/search/searchSlice';

describe('Test all slices', () => {
  test('Type of update filter Slice', () => {
    const action = updateFilter();
    const expectedAction = {
      type: 'search/updateFilter',
    };

    expect(action).toEqual(expectedAction);
  });

  test('Type of update query Slice', () => {
    const action = updateQuery();
    const expectedAction = {
      type: 'search/updateQuery',
    };

    expect(action).toEqual(expectedAction);
  });

  test('Update filter', () => {
    const state = {
      query: '',
      filter: '0',
    };

    const action = updateFilter('1');

    const result = searchReducer(state, action);

    const newState = {
      query: '',
      filter: '1',
    };
    expect(result).toEqual(newState);
  });

  test('Update query', () => {
    const state = {
      query: '',
      filter: '0',
    };

    const action = updateQuery('kigali');

    const result = searchReducer(state, action);

    const newState = {
      query: 'kigali',
      filter: '0',
    };
    expect(result).toEqual(newState);
  });
});
