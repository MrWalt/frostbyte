import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import SpecificProducts from "./pages/SpecificProducts";
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <>
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
            <Route path="cart" element={<Cart />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:product" element={<SpecificProducts />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
