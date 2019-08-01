const initialState = {
  items: [],
  isLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "MESSAGES:ADD_MESSAGE":
      return {
        ...state,
        items: [...state.items, payload]
      };
    case "MESSAGES:SET_ITEMS":
      return {
        ...state,
        items: payload,
        isLoading: false
      };
    case "MESSAGES:SET_IS_LOADING":
      return {
        ...state,
        isLoading: payload
      };
    default:
      return state;
  }
};
