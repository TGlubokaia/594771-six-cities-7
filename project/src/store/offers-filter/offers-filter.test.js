import { offersFilter } from './offers-filter';
import { ActionType } from '../action';

const DEFAULT_CITY = 'Paris';

describe('Reducer: offers` filter', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersFilter(undefined, {}))
      .toEqual({ selectedCity: DEFAULT_CITY });
  });

  it('should filter offers by city', () => {
    const state = {selectedCity: DEFAULT_CITY};
    const chosenCity = 'city';
    const changeCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: chosenCity,
    };

    expect(offersFilter(state, changeCityAction))
      .toEqual({ selectedCity: chosenCity });

    const nonChangeCityAction = {
      type: 'ActionType',
      payload: '',
    };

    expect(offersFilter(state, nonChangeCityAction))
      .toEqual({ selectedCity: DEFAULT_CITY });
  });
});
