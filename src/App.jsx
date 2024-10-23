import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Account from "./pages/Account";
import CheckOut from "./pages/CheckOut";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";
import { CartProvider } from "./features/cart/CartContext";

export default function App() {
  return (
    <CartProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:category" element={<Products />} />
            {/* <Route path="products/:product" element={<Product />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
