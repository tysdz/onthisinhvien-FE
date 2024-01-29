// import { createStore } from 'https://cdn.skypack.dev/redux';

// const initialState = {
//   cartCount: 0,
//   cartId: [],
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT_CART':
//       return {
//         ...state,
//         cartCount: state.cartCount + 1,
//         cartId: [...state.cartId, action.payload.productId],
//       };
//     case 'REMOVE-CART':
//       return{
//         ...state,
//         cartCount : state.cartCount - 1,
//         cartId: state.cartId.filter(id => id !== action.payload.productId),
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(cartReducer);

// export default store;

////////////////////////////////////////// chỉnh sửa thêm cấu trúc lấy ra id ///////////////////////////////////////

// const initialState = {
//   cartCount: 0,
//   cartId: [],
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT_CART':
//       const newState = {
//         ...state,
//         cartCount: state.cartCount + 1,
//         cartId: [...state.cartId, action.payload.productId],
//       };

//       localStorage.setItem('reduxState', JSON.stringify(newState));

//       return newState;

//     case 'REMOVE_CART':
//       const updatedState = {
//         ...state,
//         cartCount: state.cartCount - 1,
//         cartId: state.cartId.filter(id => id !== action.payload.productId),
//       };

//       localStorage.setItem('reduxState', JSON.stringify(updatedState));

//       return updatedState;

//     default:
//       return state;
//   }
// };

// const storedState = localStorage.getItem('reduxState');
// const store = createStore(cartReducer, storedState ? JSON.parse(storedState) : initialState);

// export default store;


/////////////////// chỉnh sửa từ js sang ts /////////////////////////
import { configureStore, createSlice } from '@reduxjs/toolkit';

interface CartState {
  cartCount: number;
  cartId: number[];
}

const initialState: CartState = {
  cartCount: 0,
  cartId: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementCart: (state, action) => {
      state.cartCount += 1;
      state.cartId.push(action.payload.productId);
      localStorage.setItem('reduxState', JSON.stringify(state));
    },
    removeCart: (state, action) => {
      state.cartCount -= 1;
      state.cartId = state.cartId.filter((id) => id !== action.payload.productId);
      localStorage.setItem('reduxState', JSON.stringify(state));
    },
  },
});

export const { incrementCart, removeCart } = cartSlice.actions;

const storedStateString = localStorage.getItem('reduxState');
const storedState: CartState | undefined = storedStateString ? JSON.parse(storedStateString) : undefined;

const store = configureStore({
  reducer: cartSlice.reducer,
  preloadedState: storedState,
});

export default store;
