export const createStore = reducer => {
  let state = {};
  let listeners = [];

  let getState = () => {
    return state;
  };

  let dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  let subscribe = listener => {
    listeners.push(listener);
  };
  return { getState, dispatch, subscribe };
};
