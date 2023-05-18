const initialState = {
  contact: [],
  keyword: "",
};

function reducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contact: [
          ...state.contact,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    case "SEARCH_BY_USERNAME":
      return { ...state, keyword: payload.keyword };
    default:
      return { ...state };
  }
}

export default reducer;
