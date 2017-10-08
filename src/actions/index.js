export const toggle_color = () => {
  return {
    type: "SET_WHITE"
  };
};

export const input = val => {
  return {
    type: "SET_INPUT",
    payload: val
  };
};
