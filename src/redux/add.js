import { createStore } from 'https://cdn.skypack.dev/redux';

const initialState = {
  cartCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_CART':
      return {
        ...state,
        cartCount: state.cartCount + 1,
      };
    default:
      return state;
  }
};

const store = createStore(cartReducer);

export default store;
