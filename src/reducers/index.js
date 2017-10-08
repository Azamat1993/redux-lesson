const initialState = {
  color: "black",
  text: ""
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "SET_WHITE":
      return Object.assign({}, state, { color: state.color === "white" ? "black" : "white" });
    case "SET_INPUT":
      return Object.assign({}, state, { text: action.payload });
  }
  return state;
};
