import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/layout/AppLayout";
import AdminLayout from "./components/layout/AdminLayout";
import AdminPage from "./pages/admin/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AuthLayout from "./components/layout/AuthLayout";
import PrivateRoute from "./components/common/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";
import OrderPage from "./pages/OrderPage";
import AdminOrderPage from "./pages/admin/OrderPage";
import AuthRoute from "./components/common/AuthRoute";
import AdminRoutes from "./components/common/AdminRoutes";
import MyOrdersPage from "./pages/MyOrdersPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="*" element={<NotFoundPage />} />

        <Route element={<AuthLayout />}>
          <Route element={<AuthRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
        </Route>

        {/* App Layout */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/my-orders" element={<MyOrdersPage/>} />
          </Route>
        </Route>

        {/* Admin Layout */}
        <Route element={<AdminLayout />}>
          <Route element={<AdminRoutes />}>
            <Route path="/admin" element={<AdminPage />}/>
              <Route path="/admin/orders" element={<AdminOrderPage/>} />
              <Route path="/admin/users" element={<h1>Order page</h1>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
