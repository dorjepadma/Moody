//refactored export
export const isTired = state => state.coffee < 2 && state.naps < 2;
export const isHyper = state => state.coffee > 3 && state.study > 3;
export const isEducated = state => state.study > 2;
export const isHungry = state => state.snacks < 2;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';
  return '😀';
};
