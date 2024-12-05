import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./Context/AuthContext";
import { ProductProvider } from "./Context/ProductContext";
import { FilterContextProvider } from "./Context/FilterContext";
// import { UserProvider } from "./Context/UserContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <UserProvider> */}
    <AuthProvider>
      <ProductProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </ProductProvider>
    </AuthProvider>
    {/* </UserProvider> */}
  </StrictMode>
);
