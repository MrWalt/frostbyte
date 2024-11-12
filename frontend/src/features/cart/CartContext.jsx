import { createContext, useContext, useReducer } from "react";
const CartContext = createContext();

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "cart/add":
      return { ...state, cart: [...state.cart, action.payload] };

    case "cart/remove":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "cart/increase":
      // THIS IS FOR DEVMODE ONLY, CHANGE TO += 1 ON PROD!!!!!
      state.cart.find((item) => item.id === action.payload).quantity += 0.5;
      return { ...state };

    case "cart/decrease":
      // THIS IS FOR DEVMODE ONLY, CHANGE TO -= 1 ON PROD!!!!!
      state.cart.find((item) => item.id === action.payload).quantity -= 0.5;
      return { ...state };

    case "cart/clear":
      return initialState;

    default:
      throw new Error("Unknown action");
  }
}

export default function CartProvider({ children }) {
  const [{ cart }, dispatch] = useReducer(reducer, initialState);

  function addItem(item) {
    dispatch({ type: "cart/add", payload: item });
  }

  function removeItem(id) {
    dispatch({ type: "cart/remove", payload: id });
  }

  function clearCart() {
    dispatch({ type: "cart/clear" });
  }

  function increaseQuantity(id) {
    dispatch({ type: "cart/increase", payload: id });
  }

  function decreaseQuantity({ id, quantity }) {
    if (quantity === 1) {
      dispatch({ type: "cart/remove", payload: id });
      return;
    }
    dispatch({ type: "cart/decrease", payload: id });
  }

  function isInCart(id) {
    return cart.find((item) => item.id === id) ? true : false;
  }

  const itemsInCart = cart.reduce((acc, cur) => (acc += cur.quantity), 0);
  const totalCartPrice = cart.reduce(
    (acc, cur) => (acc += cur.price * cur.quantity),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        itemsInCart,
        totalCartPrice,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("Cart Context was used outside of cart provider");

  return context;
}
