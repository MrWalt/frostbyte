import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Account from "./pages/Account";
import CheckOut from "./pages/CheckOut";
import Products from "./pages/Products";
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";
import CartSummary from "./pages/CartSummary";
import About from "./pages/About";
import Legal from "./pages/Legal";
import Product from "./pages/Product";
import Profile from "./features/account/Profile";
import Security from "./features/account/Security";
import Dashboard from "./features/account/Dashboard";
import Orders from "./features/account/Orders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UserProvider from "./features/authentication/UserContext";
import CartProvider from "./features/cart/CartContext";
import WishlistProvider from "./features/wishlist/WishlistContext";
import MenuProvider from "./contexts/MenuContext";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ fontSize: "16px" }}>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
      <GlobalStyles />
      <BrowserRouter>
        <UserProvider>
          <CartProvider>
            <WishlistProvider>
              <MenuProvider>
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
                    >
                      <Route
                        index
                        element={<Navigate replace to="/account/profile" />}
                      />
                      <Route path="/account/profile" element={<Profile />} />
                      <Route path="/account/orders" element={<Orders />} />
                      <Route path="/account/security" element={<Security />} />
                      <Route
                        path="/account/dashboard"
                        element={<Dashboard />}
                      />
                    </Route>
                    <Route path="checkout" element={<CheckOut />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/:category" element={<Products />} />
                    <Route path="cart-summary" element={<CartSummary />} />
                    <Route path="product/:id" element={<Product />} />
                    <Route path="login" element={<Login />} />
                    <Route path="about" element={<About />} />
                    <Route path="legal" element={<Legal />} />
                    <Route path="*" element={<PageNotFound />} />
                  </Route>
                </Routes>
              </MenuProvider>
            </WishlistProvider>
          </CartProvider>
        </UserProvider>
      </BrowserRouter>
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{
          marginTop: "80px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-900)",
            color: "var(--color-grey-0)",
            border: "1px solid var(--color-grey-800)",
            borderRadius: "0",
          },
        }}
      />
    </QueryClientProvider>
  );
}
