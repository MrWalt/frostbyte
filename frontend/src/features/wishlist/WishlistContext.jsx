import { createContext, useContext, useReducer } from "react";

const WishlistContext = createContext();

const initialState = {
  wishlist: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "wishlist/add":
      return { ...state, wishlist: [...state.wishlist, action.payload] };

    case "wishlist/remove":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };

    default:
      throw new Error("Unknown action");
  }
}

export default function WishlistProvider({ children }) {
  const [{ wishlist }, dispatch] = useReducer(reducer, initialState);

  function addItem(item) {
    dispatch({ type: "wishlist/add", payload: item });
  }

  function removeItem(id) {
    dispatch({ type: "wishlist/remove", payload: id });
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addItem, removeItem }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context)
    throw new Error("useWishlist was used outside of Wishlist Context");

  return context;
}
