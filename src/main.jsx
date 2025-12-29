import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import CartContextProvider from "./context/CartContextProvider";
import AuthProvider from "./context/AuthProvider";
import OrderProvider from "./context/OrderProvider";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <AuthProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </AuthProvider>
    </CartContextProvider>
  </StrictMode>
);
