const initialState = {
  color: "black"
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "SET_WHITE":
      return { color: state.color === "white" ? "black" : "white" };
  }
  return state;
};
