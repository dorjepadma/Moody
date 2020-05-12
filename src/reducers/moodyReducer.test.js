import { eatSnack, drinkCoffee, takeNap, study } from '../actions/moodyActions';
import reducer from './moodyReducer';

describe('moody reducer', () => {
  it('accumulates Snacks', () => {
    const action = eatSnack();
    const initialState = { snacks: 0 };
    const state = reducer(initialState, action);
    expect(state).toEqual({ snacks: 1 });
  });
  it('accumulates Coffees', () => {
    const action = drinkCoffee();
    const initialState = { coffee: 0 };
    const state = reducer(initialState, action);
    expect(state).toEqual({ coffee: 1 });
  });
  it('accumulates Naps', () => {
    const action = takeNap();
    const initialState = { naps: 0 };
    const state = reducer(initialState, action);
    expect(state).toEqual({ naps: 1 });
  });
  it('accumulates knowledge', () => {
    const action = study();
    const initialState = { study: 0 };
    const state = reducer(initialState, action);
    expect(state).toEqual({ study: 1 });
  });
});
