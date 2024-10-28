import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteCartItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity++;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity--;

      if (item.quantity === 0)
        cartSlice.caseReducers.deleteCartItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export function getCart(state) {
  return state.cart.cart;
}

export function getTotalItemsInCart(state) {
  return state.cart.cart.reduce((acc, cur) => (acc += cur.quantity), 0);
}

export function getTotalPrice(state) {
  return state.cart.cart
    .reduce((acc, cur) => (acc += cur.price * cur.quantity), 0)
    .toFixed(2);
}

export const {
  addCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteCartItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
