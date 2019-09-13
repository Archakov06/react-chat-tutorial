const initialState = {
  items: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ATTACHMENTS:SET_ITEMS":
      return {
        ...state,
        items: payload
      };
    case "ATTACHMENTS:REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(item => item.uid !== payload.uid)
      };
    default:
      return state;
  }
};
