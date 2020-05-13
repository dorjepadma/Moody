import { study, STUDY, takeNap, TAKE_NAP, eatSnack, EAT_SNACK, drinkCoffee, DRINK_COFFEE } from './moodyActions';

describe ('moodys actions', () => {
  it('moody will study', () => {
    const action = study();

    expect(action).toEqual({ type: STUDY });
  });
  it('moody will take a nap', () => {
    const action = takeNap();
  
    expect(action).toEqual({ type: TAKE_NAP });
  });
  it('moody will eat a tasty snack', () => {
    const action = eatSnack();
    
    expect(action).toEqual({ type: EAT_SNACK });
  });
  it('moody will drink some black coffee', () => {
    const action = drinkCoffee();
    
    expect(action).toEqual({ type: DRINK_COFFEE });
  });
});
