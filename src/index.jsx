import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { UserContextProvider } from "./context/UserContext";
import { ProductContextProvider } from "./context/ProductContext";
import { LoadingContextProvider } from "./context/LoadingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingContextProvider>
        <AuthContextProvider>
          <UserContextProvider>
            <ProductContextProvider>
              <App />
            </ProductContextProvider>
          </UserContextProvider>
        </AuthContextProvider>
      </LoadingContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
