import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/usercontext.jsx";
import { ProductTypeProvider } from "./context/productcontext.jsx";
import { CartContextProvider } from "./context/cartcontext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ProductTypeProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductTypeProvider>
    </UserProvider>
  </React.StrictMode>
);
