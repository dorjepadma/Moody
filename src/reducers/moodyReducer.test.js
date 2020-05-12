import { eatSnack, drinkCoffee, takeNap, study } from '../actions/moodyActions';
import reducer from './moodyReducer';

describe('moody reducer', () => {
  it('accumulates eatSnacks', () => {
    const action = eatSnack();
    const initialState = { snacks: 0 };
    const state = reducer(initialState, action);
    expect(state).toEqual({ snacks: 1 });
  });
});
