import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlistItem(state, action) {
      state.wishlist.push(action.payload);
    },
    deleteWishlistItem(state, action) {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export function getWishlist(state) {
  return state.wishlist.wishlist;
}

export const { addWishlistItem, deleteWishlistItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;
