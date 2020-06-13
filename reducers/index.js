import produce from "immer";

const baseState = {
  generalnews: {},
  rates: {},
};

const reducer = produce((state, action) => {
  switch(action.type) {
    case 'FETCH_GENERAL_NEWS':
      state.generalnews = {};
      action.payload.forEach(gnews => {
        state.generalnews[gnews.headline] = gnews;
      })
      break;
    case 'FETCH_RATE':
      state.rates = action.payload;
      break;
    default:
      break;
  }
}, baseState);

export default reducer;