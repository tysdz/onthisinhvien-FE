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
import { createStore } from 'redux';

interface CartState {
  cartCount: number;
  cartId: number[];
}

interface IncrementCart {
  type: 'INCREMENT_CART';
  payload: {
    productId: number;
  };
}

interface RemoveCart {
  type: 'REMOVE_CART';
  payload: {
    productId: number;
  };
}

type CartAction = IncrementCart | RemoveCart;

const initialState: CartState = {
  cartCount: 0,
  cartId: [],
};

const cartReducer = (state: CartState = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case 'INCREMENT_CART':
      const newState: CartState = {
        ...state,
        cartCount: state.cartCount + 1,
        cartId: [...state.cartId, action.payload.productId],
      };

      localStorage.setItem('reduxState', JSON.stringify(newState));

      return newState;

    case 'REMOVE_CART':
      const updatedState: CartState = {
        ...state,
        cartCount: state.cartCount - 1,
        cartId: state.cartId.filter((id) => id !== action.payload.productId),
      };

      localStorage.setItem('reduxState', JSON.stringify(updatedState));

      return updatedState;

    default:
      return state;
  }
};

const storedStateString = localStorage.getItem('reduxState');
const storedState: CartState | undefined = storedStateString ? JSON.parse(storedStateString) : undefined;

const store = createStore(cartReducer, storedState);

export default store;
